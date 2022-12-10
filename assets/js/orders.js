function loadUserWelcomeUI(data) {
    const lastOrder = data["previous_orders"]["orders"][0];
    const containsPrevOrder = data["previous_orders"]["orders"].length;
    $(".header").removeClass('hide');
    $("#content_box").empty();

    $("#content_box").append(`
        <div class="order_section">
            <div class="tabs">
                <div class="tab-2 active">
                    <div class="block active ${containsPrevOrder ? '' : 'hide'}">
                        <input id="tab21" name="tabs-two" type="radio" checked="checked">
                        <label for="tab21" id="label">Last Order</label>
                    </div>
                    <div class="tab_body active">
                        <div class="order_history bottom">
                            <div class="upper_history_container" id="last_order_history"></div>
                            <div class="btn_wrapper">
                                <div class="btnbox">
                                    ${
                                        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? '<a class="btn outline place_new_order" href="#">Place New Order</a>': ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-2">
                    <div class="block ${containsPrevOrder ? '' : 'hide'}">
                        <input id="tab22" name="tabs-two" type="radio">
                        <label for="tab22" id="label">Order History</label>
                    </div>
                    <div class="tab_body">
                        <div class="order_history bottom">
                            <div class="upper_history_container" id="order_history_container"></div>
                            <div class="btn_wrapper">
                                <div class="btnbox">
                                    <button class="btn solid inverted" id="backbtnOh">Back</button>
                                    <div id="download_file" class="btn outline" href=${data["download_url"]}><span class="icon"><i class="fa fa-download" aria-hidden="true"></i></span>Download Order History</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    $("#download_file").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        console.log(data["download_url"]);
        let blob = new Blob([data["download_url"]], { type: 'text/csv;charset=utf-8' });
        if(navigator.msSavedBlob) {
            navigator.msSavedBlob(blob, "orderhistory.csv");
        } else {
            let link = document.createElement("a");
            if(link.download !== undefined) {
                let url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", "orderhistory.csv");
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    });

    if(containsPrevOrder) {
        addInputEventListener();

        $("#last_order_history").append(`
            <div class="order_card last_order" data=${encodeURIComponent(JSON.stringify(lastOrder))} skudata="${lastOrder['sku']}" date="${lastOrder['ordered_date']}">
                <div class="title backbtn hide">
                    <div class="arrow name flex back_button" style="font-weight: 400; font-size: 14px; color: #151515;">
                        <img src="/assets/images/svg/right.svg" style="transform: rotate(180deg);" />
                        <span style="margin-left: 5px;">Back</span>
                    </div>
                    <div class="arrow hide">
                        <img src="/assets/images/svg/edit.svg" style="height: 20px; width: 20px;"/>
                    </div>
                </div>
                <div class="card_click" data=${encodeURIComponent(JSON.stringify(lastOrder))} skudata="${lastOrder['sku']}" date="${lastOrder['ordered_date']}">
                    <div class="title">
                        <div class="name highlight">${lastOrder["account_no"]}</div>
                        <div class="arrow">
                            <img src="/assets/images/svg/right.svg" />
                        </div>
                    </div>
                    <div class="flex">
                        <!-- <div class="order_status">
                            <div class="info">Order No: ${lastOrder["order_no"]}</div>
                            <div class="info">${lastOrder["status"]}${lastOrder["delivery_date"] ? " &nbsp;|&nbsp; Delivery On: " : ""}${lastOrder["delivery_date"]}</div>
                        </div> -->
                        <div class="order_status">
                            <div class="info"><span class="light-colored">Order No:</span> <span class="bold">${lastOrder["order_no"]}</span></div>
                            <div class="info"><span class="light-colored">Status:</span> <span class="bold">${lastOrder["status"]}</span></div>
                        </div>
                        <div class="order_status">
                            <div class="info"><span class="light-colored">Order Date:</span> <span class="bold">${lastOrder["ordered_date"]}</span></div>
                            <div class="info"><span class="light-colored">Status Date:</span> <span class="bold">${lastOrder["delivery_date"]}</span></div>
                        </div>
                        <div class="order_on_date">
                            <div class="info">Ordered On:</div>
                            <div class="info">${lastOrder["ordered_date"]}</div>
                        </div>
                    </div>
                </div>
                <div class="order_cart history hide">
                    <div class="title">
                        <div class="name">Order Details</div>
                    </div>
                    <div class="detail">
                        <table class="ui very basic table" skudata=${lastOrder["sku"]} date="${lastOrder["ordered_date"]}">
                            <thead>
                                <tr class="info_row">
                                    <td class="info_data" colspan="1">Est. Price</td>
                                    <td class="info_data" colspan="1">Units</td>
                                    <td class="info_data" colspan="1">Free Goods</td>
                                    <td class="info_data" colspan="1">${Boolean(lastOrder["on_invoice"]) ? "On Invoice Discount" : "Off Invoice Discount"}</td>
                                    <td class="info_data" colspan="1">Pay Term</td>
                                </tr>
                            </thead>
                            <tbody id="order_card_tablebody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
    
            <div class="progress_plan" id="progress_plan_main"></div>
        `);

        $("#backbtnOh").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            // document.getElementById("tab21").click();
            switchTab("tab21");
            ToBot("back-on-orderhistory", {});
        });
    
        $(".back_button").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            let siblingElement = $(this).parent().siblings(".order_cart.history")
            siblingElement.addClass("hide");
            $(this).parent().addClass("hide");
            siblingElement.siblings(".card_click")
            $("#progress_plan_main").removeClass("hide");
            siblingElement.siblings(".card_click").css("pointer-events", "unset");
        });

        data && data["previous_orders"] && data["previous_orders"]["orders"] && data["previous_orders"]["orders"].map((orderData, index) => {
            let classValue = "success";
            if (orderData["status"] === "Invoiced") {
                classValue = "success";
            }
            if (orderData["status"] === "Sent") {
                classValue = "warning";
            }
            if (orderData["status"] === "Cancelled") {
                classValue = "failed";
            }
    
            $("#order_history_container").prepend(`
                <div class="order_card history clickToOpen" data=${encodeURIComponent(JSON.stringify(orderData))}>
                    <div class="history_card_click" data=${encodeURIComponent(JSON.stringify(orderData))} skudata="${lastOrder['sku']}" date="${lastOrder['ordered_date']}">
                        <div class="status_bar_bordered">
                            <div class="bordered ${classValue}"></div>
                            <div style="width: 100%;">
                                <div class="title">
                                    <div class="name">${orderData["account_no"]}</div>
                                    <div class="arrow">
                                        <img src="/assets/images/svg/right.svg" />
                                    </div>
                                </div>
                                <div class="info">Order No: ${orderData["order_no"]}</div>
                            </div>
                        </div>
                        <div class="info outer"><span class=${classValue}>${orderData["status"]}</span>${orderData["delivery_date"] ? " | Delivery On: " : ""}${orderData["delivery_date"]}</div>
                    </div>
                    <div class="order_cart history hide">
                        <div class="title">
                            <div class="name">Order Details</div>
                        </div>
                        <div class="detail">
                            <table class="ui very basic table" skudata=${orderData["sku"]}>
                                <thead>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">Est. Price</td>
                                        <td class="info_data" colspan="1">Units</td>
                                        <td class="info_data" colspan="1">Free Goods</td>
                                        <td class="info_data" colspan="2">${Boolean(lastOrder["on_invoice"]) ? "On Invoice Discount" : "Off Invoice Discount"}</td>
                                        <td class="info_data" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody id="order_card_tablebody" skudata=${orderData["sku"]} date="${orderData["ordered_date"]}"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `);
    
            $(".card_click").click(function (e) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                let currentElementData = $(this).attr("data");
                let previousSelectedSku = $(this).attr("skudata");
                let previousSelectedSkuDate = $(this).attr("date");
                let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                let childElement = $(this).parent().children(".order_cart");
                let additionalDetails = parsedCurrentElementData["product_details"];
                let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
                if (childElement.hasClass("hide")) {
                    childElement.removeClass("hide");
                    $("#progress_plan_main").addClass("hide");
                    $(this).siblings(".title.backbtn").removeClass("hide");
                    getTableBodyChildElement.empty();
                    additionalDetails && additionalDetails.map((item, index) => {
                        getTableBodyChildElement.append(`
                            <tr>
                                <td colspan="5">
                                    <div class="title">
                                        <div class="name" skudata=${item["sku"]} date="${orderData["ordered_date"]}">${item["name"]}</div>
                                        <div class="arrow edit quantityEdit">
                                            <img src="/assets/images/svg/edit.svg" key=${index} />
                                        </div>
                                        <div class="arrow edit quantitySave hide">
                                            <img src="/assets/images/svg/save.svg" key=${index} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="info_row key${index}">
                                <td class="info_data" colspan="1">£ ${item["price"]}</td>
                                <td class="info_data editable" colspan="1"><input value=${item["units"]} type="text" size="4" maxlength="4" autocomplete="off" disabled/></td>
                                <td class="info_data" colspan="1">+${item["free_goods"]}</td>
                                <td class="info_data" colspan="2">${item["discount"]}%</td>
                                <td class="info_data" colspan="1">${item["payterm"]} D</td>
                            </tr>
                        `);
                    })
    
                    $(".arrow.edit.quantityEdit").click(function (e) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        let index = $(this).children().attr("key");
                        $(this).addClass("hide");
                        $(this).siblings().removeClass("hide");
                        let getElement = $(this).parent().parent().parent().siblings(`.info_row.key${index}`).children(".editable");
                        getElement.attr("prev-value", $(getElement).children().val());
                        $(getElement).addClass("active")
                        $(getElement).children().attr("disabled", false);
                        PosEnd($(getElement).children()[0]);
                    });
    
                    $(".arrow.edit.quantitySave").click(function (e) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        let index = $(this).children().attr("key");
                        $(this).addClass("hide");
                        $(this).siblings().removeClass("hide");
                        let getElement = $(this).parent().parent().parent().siblings(`.info_row.key${index}`).children(".editable");
                        let getElementValue = $(getElement).children().val();
                        let getElementPrevValue = getElement.attr("prev-value");
                        $(getElement).removeClass("active");
                        $(getElement).children().attr("disabled", true);
                        let value = $(getElement).children().val();
                        let siblingElementDataSku = $(this).siblings(".name").attr("skudata");
                        let tableElement = $(this).parent().parent().parent().parent().parent();
                        let currentElementDataSku = $(tableElement).attr("skudata");

                        let parseData = getParsedData();
                        let prevEditedSku = parseData["previous_orders"]["orders"].filter(prorder => {
                            if(prorder["sku"] === previousSelectedSku && prorder["ordered_date"] === previousSelectedSkuDate) {
                                return prorder;
                            }
                        });

                        window.updateCartData = {
                            ...window.updateCartData,
                            [currentElementDataSku]: {
                                ...window.updateCartData[currentElementDataSku],
                                [siblingElementDataSku]: value
                            }
                        };

                        console.log("prevEditedSku -> ", prevEditedSku);
                        console.log("updateCartData --> ", updateCartData);
                        if (getElementValue !== getElementPrevValue) {
                            ToBot("update-order-data", prevEditedSku[0]);
                        }
                    });
    
                    $(this).css("pointer-events", "none");
                } else {
                    childElement.addClass("hide");
                    $(this).children(".title.backbtn").addClass("hide");
                }
            });
    
            $(".history_card_click").click(function (e) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                let currentElementData = $(this).attr("data");
                let previousSelectedSku = $(this).attr("skudata");
                let previousSelectedSkuDate = $(this).attr("date");
                let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                let childElement = $(this).parent().children(".order_cart");
                let additionalDetails = parsedCurrentElementData["product_details"];
                let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
                if (childElement.hasClass("hide")) {
                    childElement.removeClass("hide");
                    getTableBodyChildElement.empty();
                    additionalDetails && additionalDetails.map((item, index) => {
                        getTableBodyChildElement.append(`
                            <tr>
                                <td colspan="5">
                                    <div class="title">
                                        <div class="name" skudata=${item["sku"]} date="${orderData["ordered_date"]}">${item["name"]}</div>
                                        <div class="arrow edit quantityEdit">
                                            <img src="/assets/images/svg/edit.svg" key=${index} />
                                        </div>
                                        <div class="arrow edit quantitySave hide">
                                            <img src="/assets/images/svg/save.svg" key=${index} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="info_row key${index}">
                                <td class="info_data" colspan="1">£ ${item["price"]}</td>
                                <td class="info_data editable" colspan="1"><input value=${item["units"]} type="text" size="4" maxlength="4" autocomplete="off"/></td>
                                <td class="info_data" colspan="1">+${item["free_goods"]}</td>
                                <td class="info_data" colspan="1">${item["discount"]}%</td>
                                <td class="info_data" colspan="1">${item["payterm"]} D</td>
                            </tr>
                        `);
                    });
                    
                    $(".arrow.edit.quantityEdit").click(function (e) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        let index = $(this).children().attr("key");
                        $(this).addClass("hide");
                        $(this).siblings().removeClass("hide");
                        let getElement = $(this).parent().parent().parent().siblings(`.info_row.key${index}`).children(".editable");
                        $(getElement).addClass("active");
                        $(getElement).children().attr("disabled", false);
                        PosEnd($(getElement).children()[0]);
                    });

                    $(".arrow.edit.quantitySave").click(function (e) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        let index = $(this).children().attr("key");
                        $(this).addClass("hide");
                        $(this).siblings().removeClass("hide");
                        let getElement = $(this).parent().parent().parent().siblings(`.info_row.key${index}`).children(".editable");
                        let getElementValue = $(getElement).children().val();
                        let getElementPrevValue = getElement.attr("prev-value");
                        $(getElement).removeClass("active");
                        $(getElement).children().attr("disabled", true);
                        let value = $(getElement).children().val();
                        let siblingElementDataSku = $(this).siblings(".name").attr("skudata");
                        let tableElement = $(this).parent().parent().parent().parent().parent();
                        let currentElementDataSku = $(tableElement).attr("skudata");
                        let parseData = getParsedData();
                        let prevEditedSku = parseData["previous_orders"]["orders"].filter(prorder => {
                            if(prorder["sku"] === previousSelectedSku && prorder["ordered_date"] === previousSelectedSkuDate) {
                                return prorder;
                            }
                        });

                        window.updateCartData = {
                            ...window.updateCartData,
                            [currentElementDataSku]: {
                                ...window.updateCartData[currentElementDataSku],
                                [siblingElementDataSku]: value
                            }
                        };

                        console.log("prevEditedSku -> ", prevEditedSku);
                        console.log("updateCartData --> ", updateCartData);
                        if (getElementValue !== getElementPrevValue) {
                            ToBot("update-order-data", prevEditedSku[0]);
                        }
                    });
                } else {
                    childElement.addClass("hide");
                }
            })
        })
    } else {
        $("#last_order_history").append(`<div class="progress_plan" id="progress_plan_main"></div>`);
    }

    $(".place_new_order").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let data = localStorage.getItem("data");
        let parsedData = JSON.parse(data);
        // let currentElementData = $(this).parent().attr("data");
        // let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        ToApp("choosebrands-screen", parsedData);
        ToBot("place-new-order", {});
    });

    /* $("#last_order_history").mCustomScrollbar({
        theme: "dark-thin",
        scrollButtons: { enable: true },
        autoHideScrollbar: true
    }); */
}

function loadBrandSelectionUI(data) {
    let orginalData = JSON.parse(JSON.stringify(data));
    $(".header").removeClass('hide');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="choosebrands" id="loadBrandSelectionUI">
            <div class="menu_header">
                <div class="label">
                    <img class="back-arrow" src="/assets/images/svg/right.svg"/>
                    Choose Brands
                </div>
                <div class="icon">
                    <img src="/assets/images/svg/basket.svg" class="view_checkout" />
                    <div class="count_wrapper hide"></div>
                </div>
            </div>
            <div class="sub_detail"><span class="bold highlight">Start Date:</span> ${data["start_date"]} <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span class="bold highlight">End Date:</span> ${data["last_date"]}</div>
            ${loadProgressCards(data["plan_progress"])}
        </div> 
        <div class="bottom">
            <div class="btn_wrapper disabled">
                <div class="place_order checkout">
                    <button class="btn solid checkout view_checkout">Checkout</button>
                </div>
            </div>
        </div>
    `);

    /* $("#loadBrandSelectionUI").mCustomScrollbar({
        theme: "dark-thin",
        scrollButtons: { enable: true },
        autoHideScrollbar: true
    }); */

    // let total = calculateSumAmount(window.cartData);
    
    let parseData = getParsedData();
    let total = 0;
    parseData && parseData?.["new_orders"] && parseData?.["new_orders"]?.["orders"] && parseData?.["new_orders"]?.["orders"].map((ordr, index) => {
        ordr["product_details"].map(product => {
            let quantity = product["quantity"] ? Number(product["quantity"]) : 0;
            total = total + quantity;
        });
    });

    if (total) {
        $(".count_wrapper").removeClass("hide");
        $(".place_order.checkout").parent().removeClass("disabled");
        $(".count_wrapper").parent(".icon").addClass("cursor");
        $(".count_wrapper").text(total);
    }

    $(".view_checkout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (total) {
            // loadOrderCart(data);
            ToBot("view-checkout", data);
        }
    });

    $(".back-arrow").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = getParsedData()
        loadUserWelcomeUI(parseData);
        ToBot('back-brand-select', parseData);
    });

    $(".progressbar_wrapper.addproduct").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentElementSkuData = $(this).attr("skudata");
        const parsedData = getParsedData();
        if(window.dataStore && Object.keys(window.dataStore).length !== 0) {
            window.dataStore["selected_brand"] = currentElementSkuData;
        }
        parsedData["selected_brand"] = currentElementSkuData;
        saveParsedData(parsedData);
        // let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        // let products = data["brands"]["products"];
        // let filteredProducts = products.filter(product => {
        // return product["name"] === parsedCurrentElementData["name"];
        // })
        // data["brands"]["products"] = filteredProducts;
        const filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === currentElementSkuData);
        const isBrandSku = filteredBrand[0]["isSku"];
        ToBot("select-brand", parsedData);
        isBrandSku ? showSkuLevelDetailsBrand(parsedData, currentElementSkuData) : showBrandLevelDetails(parsedData, currentElementSkuData);
    });
}

function loadBrandSelectionUIByBrandName(data, name) {
    const currentElementSkuData = data["selected_brand"];
    if(window.dataStore && Object.keys(window.dataStore).length !== 0) {
        window.dataStore["selected_brand"] = currentElementSkuData;
    }
    const filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === currentElementSkuData);
    const isBrandSku = filteredBrand[0]["isSku"];
    isBrandSku ? showSkuLevelDetailsBrand(data, currentElementSkuData) : showBrandLevelDetails(data, currentElementSkuData);
}

function switchTab(tab) {
    document.getElementById(tab).click();
}