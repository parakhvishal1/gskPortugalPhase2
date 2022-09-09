function loadUserWelcomeUI(data) {
    let lastOrder = data["order_history"]["orders"][0];
    $(".header").removeClass('hide');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_section">
            <div class="tabs">
                <div class="tab-2 active">
                    <div class="block active">
                        <input id="tab21" name="tabs-two" type="radio" checked="checked">
                        <label for="tab21" id="label">Last Order</label>
                    </div>
                    <div class="tab_body active">
                        <div class="order_card last_order" data=${encodeURIComponent(JSON.stringify(lastOrder))}>
                            <div class="title backbtn hide">
                                <div class="arrow name flex back_button" style="font-weight: 400; font-size: 14px; color: #151515;">
                                    <img src="/assets/images/svg/right.svg" style="transform: rotate(180deg);" />
                                    <span style="margin-left: 5px;">Back</span>
                                </div>
                                <div class="arrow">
                                    <img src="/assets/images/svg/edit.svg" style="height: 20px; width: 20px;"/>
                                </div>
                            </div>
                            <div id="last_order" data=${encodeURIComponent(JSON.stringify(lastOrder))}>
                                <div class="title">
                                    <div class="name">${lastOrder["account_no"]}</div>
                                    <div class="arrow">
                                        <img src="/assets/images/svg/right.svg" />
                                    </div>
                                </div>
                                <div class="info">Order No: ${lastOrder["order_no"]}</div>
                                <div class="info">${lastOrder["status"]}${lastOrder["delivery_date"] ? " | Delivery On: " : ""}${lastOrder["delivery_date"]}</div>
                            </div>
                            <div class="order_cart history hide">
                                <div class="title">
                                    <div class="name">Order Details</div>
                                </div>
                                <div class="detail">
                                    <table class="ui very basic table"  data=${encodeURIComponent(JSON.stringify(lastOrder))}>
                                        <thead>
                                            <tr class="info_row">
                                                <td class="info_data" colspan="1">Est. Price</td>
                                                <td class="info_data" colspan="1">Units</td>
                                                <td class="info_data" colspan="1">Free Goods</td>
                                                <td class="info_data" colspan="1">On Invoice Discount</td>
                                                <td class="info_data" colspan="1">Pay Term</td>
                                            </tr>
                                        </thead>
                                        <tbody id="order_card_tablebody"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="progress_plan" id="progress_plan_main">
                            <div class="place_order" data=${encodeURIComponent(JSON.stringify(data))}>
                                <button class="btn outline place_new_order"><span class="icon"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>Place New Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-2">
                    <div class="block">
                        <input id="tab22" name="tabs-two" type="radio">
                        <label for="tab22" id="label">Order History</label>
                    </div>
                    <div class="tab_body">
                        <div class="order_history bottom">
                            <div class="upper_history_container" id="order_history_container"></div>
                            <div class="btn_wrapper">
                                <div class="btnbox">
                                    <!-- <button class="btn solid">Back</button> -->
                                    <a class="btn outline" href=${data["order_history"]["download_url"]} download="ashish.csv"><span class="icon"><i class="fa fa-download" aria-hidden="true"></i></span>Download Order History</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    addInputEventListener();

    $(".back_button").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let siblingElement = $(this).parent().siblings(".order_cart.history")
        siblingElement.addClass("hide");
        $(this).parent().addClass("hide");
        siblingElement.siblings("#last_order").css("pointer-events", "unset");
    });

    $(".place_new_order").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let currentElementData = $(this).parent().attr("data");
        let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        ToApp("choosebrands-screen", parsedCurrentElementData);
    });

    data && data["order_history"] && data["order_history"]["orders"] && data["order_history"]["orders"].map((orderData, index) => {
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

        $("#order_history_container").append(`
            <div class="order_card history clickToOpen" data=${encodeURIComponent(JSON.stringify(orderData))}>
                <div id="order_card_history" data=${encodeURIComponent(JSON.stringify(orderData))}>
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
                        <table class="ui very basic table">
                            <thead>
                                <tr class="info_row">
                                    <td class="info_data" colspan="1">Est. Price</td>
                                    <td class="info_data" colspan="1">Units</td>
                                    <td class="info_data" colspan="1">Free Goods</td>
                                    <td class="info_data" colspan="2">On Invoice Discount</td>
                                    <td class="info_data" colspan="1">Pay Term</td>
                                </tr>
                            </thead>
                            <tbody id="order_card_tablebody" data=${encodeURIComponent(JSON.stringify(orderData))}></tbody>
                        </table>
                    </div>
                </div>
            </div>
        `);

        $("#last_order").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            let currentElementData = $(this).attr("data");
            let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
            let childElement = $(this).parent().children(".order_cart");
            let additionalDetails = parsedCurrentElementData["additional_details"]["product_details"];
            let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
            if (childElement.hasClass("hide")) {
                childElement.removeClass("hide");
                console.log($(this))
                $(this).siblings(".title.backbtn").removeClass("hide");
                getTableBodyChildElement.empty();
                additionalDetails && additionalDetails.map((item, index) => {
                    getTableBodyChildElement.append(`
                        <tr>
                            <td colspan="5">
                                <div class="title">
                                    <div class="name">${item["name"]}</div>
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
                    $(getElement).addClass("active")
                    // $(getElement).children().focus();
                });

                $(".arrow.edit.quantitySave").click(function (e) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    let index = $(this).children().attr("key");
                    $(this).addClass("hide");
                    $(this).siblings().removeClass("hide");
                    let getElement = $(this).parent().parent().parent().siblings(`.info_row.key${index}`).children(".editable");
                    let value = $(getElement).children().val();
                    let siblingElement = $(this).siblings(".name").text();
                    console.log(siblingElement)
                    let tableElement = $(this).parent().parent().parent().parent().parent();
                    let currentElementData = $(tableElement).attr("data");
                    let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                    let fieldName = parsedCurrentElementData["account_no"];
                    window.updateCartData = {
                        ...window.updateCartData,
                        [fieldName]: {
                            ...window.updateCartData[fieldName],
                            [siblingElement] : value
                        }
                    };
                    ToBot("update-order-data", window.updateCartData)
                });

                $(this).css("pointer-events", "none");
            } else {
                childElement.addClass("hide");
                $(this).children(".title.backbtn").addClass("hide");
            }
        });

        $("#order_card_history").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            let currentElementData = $(this).attr("data");
            let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
            let childElement = $(this).parent().children(".order_cart");
            let additionalDetails = parsedCurrentElementData["additional_details"]["product_details"];
            let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
            if (childElement.hasClass("hide")) {
                childElement.removeClass("hide");
                getTableBodyChildElement.empty();
                additionalDetails && additionalDetails.map((item, index) => {
                    getTableBodyChildElement.append(`
                        <tr>
                            <td colspan="5">
                                <div class="title">
                                    <div class="name">${item["name"]}</div>
                                    <div class="arrow edit quantityEdit hide">
                                        <img src="/assets/images/svg/edit.svg" key=${index} />
                                    </div>
                                    <div class="arrow edit quantitySave hide">
                                        <img src="/assets/images/svg/save.svg" />
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
                    $(getElement).addClass("active")
                    $(getElement).children().focus();
                });
            } else {
                childElement.addClass("hide");
            }
        })
    })
}

function loadBrandSelectionUI(data) {
    let orginalData = JSON.parse(JSON.stringify(data));
    $(".header").removeClass('hide');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="choosebrands">
            <div class="menu_header">
                <div class="label">${data["title"]}</div>
                <div class="icon">
                    <img src="/assets/images/svg/basket.svg" />
                    <div class="count_wrapper">
                        
                    </div>
                </div>
            </div>
            <div class="sub_detail"><strong>Start:</strong> ${data["start_date"]} <span></span> <strong>End:</strong> ${data["last_date"]}</div>
            ${loadProgressCards(data["brands"])}
        </div> 
    `);

    $(".progressbar_wrapper.addproduct").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        console.log("2", data);
        let currentElementData = $(this).attr("data");
        let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        let products = data["brands"]["products"];
        let filteredProducts = products.filter(product => {
            return product["name"] === parsedCurrentElementData["name"];
        })
        data["brands"]["products"] = filteredProducts;
        console.log("3", data)
        !data["isSku"] ? showSkuLevelDetails(data, orginalData) : showBrandLevelDetails(data, orginalData);
    });
}