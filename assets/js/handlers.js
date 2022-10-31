function showSkuLevelDetailsBrand(data, currentSku) {
    let lastOrder = data && data["previous_orders"] && data["previous_orders"] && data["previous_orders"]["orders"][0];
    let filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === currentSku);
    const isAdditionDiscountEligible = filteredBrand[0]["additional_discount"];

    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">${filteredBrand[0]["name"]}</div>
                <div class="icon"><i class="fa fa-shopping-cart"></i></div>
            </div>
            <div class="sub_detail_wrapper">
                <div class="sub_detail"><strong>Start:</strong> ${data["start_date"]} <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <strong>End:</strong> ${data["last_date"]}</div>
                <div class="sub_detail highlight">${isAdditionDiscountEligible ? "Additional Discount" : ""}</div>
            </div>
            
            <div class="new_orders"></div>

            <div class="place_order">
                <button class="btn outline" id="addanotheraccount" data=${encodeURIComponent(JSON.stringify(data))}>Add Another Account or Deferral Date</button>
            </div>
            <div id="previous-orders-accordion">
            </div>
        </div> 
        
        <div class="bottom">
            <div class="btn_wrapper">
                <div class="place_order">
                    <button class="btn solid inverted" id="back">Back</button>
                    <button class="btn solid" id="continue">Continue</button>
                </div>
            </div>
        </div>
        <div class="account_select hide">
            <div class="account_list"></div>
        </div>
    `);
    
    $("#previous-orders-accordion").empty();
    lastOrder && [lastOrder].map((order) => {
        $("#previous-orders-accordion").append(`
            <div class="accordion">
                <div class="accordion-item inverted">
                    <div class="accordion-item-header account_detail white active">${order["account_no"]}</div>
                    <div class="accordion-item-body parent opened orderbrandselection">
                        <div class="accordion-item-body-content" style="max-height: 300px; overflow: auto;">
                            <div class="date-picker-value pointernone">
                                ${showDatePickerWhite()}
                            </div>
                            <div class="flex">
                                <div class="order_status">
                                    <div class="info">Order No: ${lastOrder["order_no"]}</div>
                                </div>
                                <div class="order_on_date">
                                    <div class="info">Status: ${lastOrder["ordered_date"]}</div>
                                </div>
                            </div>
                            <div class="title">PRODUCTS</div>
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row bordered">
                                        <td class="info_data" colspan="1">Est. Price</td>
                                        <td class="info_data" colspan="1">Units</td>
                                        <td class="info_data" colspan="1">Free Goods</td>
                                        <td class="info_data" colspan="1">On Invoice Discount</td>
                                        <td class="info_data" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody id="previous_order_body">
                                    ${getPreviousOrderTableData(order["product_details"], currentSku)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    data && data["available_orders"] && data["available_orders"]["orders"] && data["available_orders"]["orders"].map((order, index) => {
        $(".account_list").append(`<div class="item" skudata=${order["sku"]}>${order["account_no"]}</div>`);
    });
    
    $("#back").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = getParsedData();
        loadBrandSelectionUI(parseData);
    });

    $("#continue").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        localStorage.setItem("data", JSON.stringify(window.dataStore));
        let parseData = getParsedData();
        if (parseData && parseData?.["new_orders"]?.["orders"] && parseData?.["new_orders"]?.["orders"].length > 0) {
            let totalSelectedQuantity = 0;
            parseData?.["new_orders"]?.["orders"].map(order => {
                order["product_details"].map(product => {
                    if(filteredBrand[0]["sku"] === product["brand"]) {
                        if(product["quantity"]) {
                            totalSelectedQuantity = totalSelectedQuantity + Number(product["quantity"]);
                        }
                    }

                });
            });
            
            window.dataStore["plan_progress"]["brands"].map(brand => {
                if(brand["sku"] === currentSku) {
                    brand["selected"] = totalSelectedQuantity;
                }
            });
            localStorage.setItem("data", JSON.stringify(window.dataStore));
            loadBrandSelectionUI(window.dataStore);
            ToBot("ordercart-continue", window.dataStore);
        }
    });

    $(".account_select").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".account_select").addClass("hide");
    });

    $(".account_list").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $("#addanotheraccount").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".account_select").removeClass("hide");
    });

    $('input[id$=tbDate]').datepicker({ dateFormat: 'M dd, y', minDate: 0 });
    $('input[id$=tbDate]').datepicker("setDate", "today");

    $(".accordion-item-header.account_detail").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });

    $(".account_list .item").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".account_select").addClass("hide");
        let currentElementData = $(this).attr("skudata");
        let filteredData = data["available_orders"]["orders"].filter((order, index) => order["sku"] === currentElementData)
        let orderData = filteredData[0];
        if (window.wholesalerAccountData && window.wholesalerAccountData.length !== 0) {
            window.wholesalerAccountData.map(v => {
                if (orderData["sku"] !== v["sku"]) {
                    window.wholesalerAccountData.push(orderData);
                    addWholeSalerAccordionSku(data, orderData, currentSku);
                    return;
                }
            });
        } else {
            window.wholesalerAccountData.push(orderData);
            addWholeSalerAccordionSku(data, orderData, currentSku);
            return;
        }
    });

    let parseData = getParsedData();

    if(window.cartData && Object.keys(window.cartData).length !== 0) {
        parseData && parseData?.["new_orders"] && parseData?.["new_orders"]?.["orders"] && parseData?.["new_orders"]?.["orders"].map((ordr, index) => {
            window[`shouldNewWholeSalerAccountAdd-${index}`] = true;
            ordr["product_details"].map(product => {
                let parentSku = window.cartData[ordr["sku"]];
                let skuproduct = parentSku[product["sku"]];
                if(window[`shouldNewWholeSalerAccountAdd-${index}`] && skuproduct && (product["brand"] === currentSku  && ordr["brandsku"].includes(currentSku))) {
                    addnewOrderBrand(ordr, currentSku, true);
                    window[`shouldNewWholeSalerAccountAdd-${index}`] = false;
                }
            });
        });
    }
}

function showBrandLevelDetails(data, currentSku) {
    const lastOrder = data && data["previous_orders"] && data["previous_orders"] && data["previous_orders"]["orders"][0];
    const filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === currentSku);
    const isAdditionDiscountEligible = filteredBrand[0]["additional_discount"];

    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">${filteredBrand[0]["name"]}</div>
                <div class="icon"><i class="fa fa-shopping-cart"></i></div>
            </div>
            <div class="sub_detail_wrapper">
                <div class="sub_detail"><strong>Start:</strong> ${data["start_date"]} <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <strong>End:</strong> ${data["last_date"]}</div>
                <div class="sub_detail highlight">${isAdditionDiscountEligible ? "Additional Discount" : ""}</div>
            </div>
            <div class="brand_level_progress">${loadProgressCards({ "brands": filteredBrand }, true, true)}</div>
            <div class="new_orders"></div>

            <div class="place_order">
                <button class="btn outline" id="addanotheraccount" data=${encodeURIComponent(JSON.stringify(data))}>Add Another Account or Deferral Date</button>
            </div>
            <div id="previous-orders-accordion">
            </div>
        </div> 
        
        <div class="bottom">
            <div class="btn_wrapper">
                <div class="place_order">
                    <button class="btn solid inverted" id="back">Back</button>
                    <button class="btn solid" id="continue">Continue</button>
                </div>
            </div>
        </div>
        <div class="account_select hide">
            <div class="account_list"></div>
        </div>
    `);
    
    $("#previous-orders-accordion").empty();
    lastOrder && [lastOrder].map((order) => {
        $("#previous-orders-accordion").append(`
            <div class="accordion">
                <div class="accordion-item inverted">
                    <div class="accordion-item-header account_detail white active">${order["account_no"]}</div>
                    <div class="accordion-item-body parent opened orderbrandselection">
                        <div class="accordion-item-body-content" style="max-height: 300px; overflow: auto;">
                            <div class="date-picker-value pointernone">
                                ${showDatePickerWhite()}
                            </div>
                            <div class="flex">
                                <div class="order_status">
                                    <div class="info">Order No: ${lastOrder["order_no"]}</div>
                                </div>
                                <div class="order_on_date">
                                    <div class="info">Status: ${lastOrder["ordered_date"]}</div>
                                </div>
                            </div>
                            <div class="title">PRODUCTS</div>
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row bordered">
                                        <td class="info_data" colspan="1">Est. Price</td>
                                        <td class="info_data" colspan="1">Units</td>
                                        <td class="info_data" colspan="1">Free Goods</td>
                                        <td class="info_data" colspan="1">On Invoice Discount</td>
                                        <td class="info_data" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody id="previous_order_body">
                                    ${getPreviousOrderTableData(order["product_details"], currentSku)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `);
    })

    data && data["available_orders"] && data["available_orders"]["orders"] && data["available_orders"]["orders"].map((order, index) => {
        $(".account_list").append(`<div class="item" skudata=${order["sku"]}>${order["account_no"]}</div>`);
    });

    $("#back").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = getParsedData();
        loadBrandSelectionUI(parseData);
    });

    $("#continue").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        localStorage.setItem("data", JSON.stringify(window.dataStore));
        let parseData = getParsedData();
        if (parseData && parseData?.["new_orders"]?.["orders"] && parseData?.["new_orders"]?.["orders"].length > 0) {
            if(!window.orderCartData.includes(filteredBrand[0]["sku"])) {
                window.orderCartData.push(filteredBrand[0]["sku"]);
            }
            loadBrandSelectionUI(parseData);
            ToBot("ordercart-continue", parseData);
            // ToApp("ordercart-screen", parseData)
        }
    });

    $(".account_select").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".account_select").addClass("hide");
    });

    $(".account_list").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $("#addanotheraccount").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".account_select").removeClass("hide");
    });

    $('input[id$=tbDate]').datepicker({ dateFormat: 'M dd, y', minDate: 0 });
    $('input[id$=tbDate]').datepicker("setDate", "today");

    $(".accordion-item-header.account_detail").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });

    $(".account_list .item").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".account_select").addClass("hide");
        let currentElementData = $(this).attr("skudata");
        let filteredData = data["available_orders"]["orders"].filter((order, index) => order["sku"] === currentElementData)
        let orderData = filteredData[0];
        if (window.wholesalerAccountData && window.wholesalerAccountData.length !== 0) {
            let shouldWholeSalerAccountAdd = false;
            if(!window.orderCartData.includes(filteredBrand[0]["sku"]) ) {
                window.orderCartData.push(filteredBrand[0]["sku"]);
                window.wholesalerAccountData.push({...orderData, "brandsku": `${orderData["sku"]}-${filteredBrand[0]["sku"]}`});
                addWholeSalerAccordion(data, orderData, currentSku);
            } else {
                window.wholesalerAccountData.every(v => {
                    if (v["brandsku"] === `${orderData["sku"]}-${filteredBrand[0]["sku"]}`) {
                        shouldWholeSalerAccountAdd = false;
                        return false;
                    } else {
                        shouldWholeSalerAccountAdd = true;
                        return true;
                    }
                });
                if (shouldWholeSalerAccountAdd) {
                    window.wholesalerAccountData.push({...orderData, "brandsku": `${orderData["sku"]}-${filteredBrand[0]["sku"]}`});
                    addWholeSalerAccordion(data, orderData, currentSku);
                }
            }
        } else {
            if(!window.orderCartData.includes(filteredBrand[0]["sku"])) {
                window.orderCartData.push(filteredBrand[0]["sku"]);
            }
            window.wholesalerAccountData.push({...orderData, "brandsku": `${orderData["sku"]}-${filteredBrand[0]["sku"]}`});
            addWholeSalerAccordion(data, orderData, currentSku);
            return;
        }
    });

    let parseData = getParsedData();
    parseData && parseData?.["new_orders"] && parseData?.["new_orders"]?.["orders"] && parseData?.["new_orders"]?.["orders"].map((ordr, index) => {
        window[`shouldNewWholeSalerAccountAdd-${index}`] = true;
        ordr["product_details"].map(product => {
            let parentSku = window.cartData[ordr["sku"]];
            let skuproduct = parentSku[product["sku"]];
            if(window[`shouldNewWholeSalerAccountAdd-${index}`] && skuproduct && (product["brand"] === currentSku && ordr["brandsku"].includes(currentSku))) {
                addnewOrder(ordr, currentSku);
                window[`shouldNewWholeSalerAccountAdd-${index}`] = false;
            }
        });
    });
}

function addWholeSalerAccordionSku(data, orderData, currentSku) {
    data["new_orders"] = {};
    data["new_orders"]["orders"] = window.wholesalerAccountData;
    localStorage.setItem("data", JSON.stringify(data));
    if (window.wholesalerAccountData.length > 1) {
        let openedAccContainers = [...$(".accordion-item-body.orderbrandselection")];
        openedAccContainers.forEach(openAcc => { $(openAcc).removeClass("opened") });
    }
    addnewOrderBrand(orderData, currentSku, true);
}

function addWholeSalerAccordion(data, orderData, currentSku) {
    data["new_orders"] = {};
    data["new_orders"]["orders"] = window.wholesalerAccountData;
    localStorage.setItem("data", JSON.stringify(data));
    if (window.wholesalerAccountData.length > 1) {
        let openedAccContainers = [...$(".accordion-item-body.orderbrandselection")];
        openedAccContainers.forEach(openAcc => { $(openAcc).removeClass("opened") });
    }
    addnewOrder(orderData, currentSku);
}

function getPreviousOrderTableData(data, currentSku) {
    let previousTableData = data && data.map((item, index) => {
        if(item["brand"] === currentSku) {
            return `
                <tr>
                    <td colspan="5">
                        <div class="title">
                            <div class="name">${item.name}</div>
                            <div class="arrow"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                        </div>
                    </td>
                </tr>
                <tr class="info_row bordered">
                    <td class="info_data" colspan="1">£ ${item.price}</td>
                    <td class="info_data" colspan="1">${item.units}</td>
                    <td class="info_data" colspan="1">+${item.free_goods}</td>
                    <td class="info_data" colspan="1">${item.discount}%</td>
                    <td class="info_data" colspan="1">${item.payterm} D</td>
                </tr>
            `;
        }
    });
    return previousTableData.join("");
}

function addnewOrder(data, currentSku) {
    $(".new_orders").prepend(`
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header orderdetail active">
                    <div class="flex">
                        <!-- 
                        <div class="edit switchWholesalerAccount" style="height: auto; width: 16px; margin-right: 10px;" skudata=${data["sku"]}>
                            <img src="/assets/images/svg/edit.svg" />
                        </div>
                        -->
                        ${data["account_no"]}
                    </div>
                </div>
                <div class="accordion-item-body parent opened orderbrandselection">
                    <div class="accordion-item-body-content" style="max-height: 270px; overflow: auto;">
                        <div class="date-picker-value">
                            ${showDatePicker()}
                        </div>
                        <table class="accordian table">
                            <tbody id="new_order_body" skudata=${data["sku"]}>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `);

    data["product_details"].map((productData, index) => {
        let uuid = create_UUID();
        if(productData["brand"] === currentSku) {
            $("#new_order_body").append(`
                <tr class="info_row">
                    <td class="info_data" style="vertical-align: middle; padding: 8px 0 0 0;">${productData["name"]}</td>
                    <td class="info_data" style="vertical-align: middle; padding: 8px 0 0 0;">
                        <div class="counter__wrapper">
                            <div class="counter__container" skudata="${productData["sku"]}" parentskudata=${data["sku"]} >
                                <div class="counter__box__container sub">
                                    <div class="counter__minus key${uuid}" id="minus" >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_138_2417)">
                                            <path d="M9 1.5C7.51664 1.5 6.0666 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4968 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98492 1.5 9 1.5ZM11.25 9.75H6.75C6.55109 9.75 6.36033 9.67098 6.21967 9.53033C6.07902 9.38968 6 9.19891 6 9C6 8.80109 6.07902 8.61032 6.21967 8.46967C6.36033 8.32902 6.55109 8.25 6.75 8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75Z" fill="#FDE0D6"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_138_2417">
                                                <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            
                                <input id="counter_input_${index}" class="counter__input home" type="text" value=${productData["units"]} size="4" maxlength="4" autocomplete="off" previous-value="1" />
                                <div class="counter__box__container add">
                                    <div class="counter__plus key${uuid}" id="plus">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_138_2422)">
                                            <path d="M9 1.5C7.51664 1.5 6.0666 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4968 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98492 1.5 9 1.5ZM11.25 9.75H9.75V11.25C9.75 11.4489 9.67099 11.6397 9.53033 11.7803C9.38968 11.921 9.19892 12 9 12C8.80109 12 8.61033 11.921 8.46967 11.7803C8.32902 11.6397 8.25 11.4489 8.25 11.25V9.75H6.75C6.55109 9.75 6.36033 9.67098 6.21967 9.53033C6.07902 9.38968 6 9.19891 6 9C6 8.80109 6.07902 8.61032 6.21967 8.46967C6.36033 8.32902 6.55109 8.25 6.75 8.25H8.25V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61033 6.07902 8.80109 6 9 6C9.19892 6 9.38968 6.07902 9.53033 6.21967C9.67099 6.36032 9.75 6.55109 9.75 6.75V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75Z" fill="#F36633"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_138_2422">
                                                <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            `);
        }
        
        $(`.counter__minus.key${uuid}`).click(function (e) {
            updateCounter(this, "minus", currentSku);
        });

        $(`.counter__plus.key${uuid}`).click(function (e) {
            updateCounter(this, "add", currentSku);
        });
    });

    $(".accordion-item-header.orderdetail").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });

    $('input[id$=tbDate]').datepicker({ dateFormat: 'M dd, y', minDate: 0 });
    $('input[id$=tbDate]').datepicker("setDate", "today");
}

function addnewOrderBrand(data, currentSku, skulevel) {
    let completeData = getParsedData();

    $(".new_orders").prepend(`
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header orderdetail active">${data["account_no"]}</div>
                <div class="accordion-item-body parent opened orderbrandselection">
                    <div class="accordion-item-body-content" style="max-height: 270px; overflow: auto;">
                        <div class="date-picker-value">
                            ${showDatePicker()}
                        </div>
                        
                        <table class="accordian table">
                            <tbody id="new_order_body" skudata=${data["sku"]}>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `);

    data["product_details"].map((productData, index) => {
        console.log(productData);
        // console.log(completeData["plan_progress"]["brands"][0]);
        let uuid = create_UUID();
        $("#new_order_body").append(`
            <tr class="info_row">
                <td class="info_data" style="vertical-align: middle; padding: 8px 0 0 0;" colspan="2">${productData["name"]}</td>
                <td class="info_data highlight" style="vertical-align: middle; padding: 8px 0 0 0; text-align: right;" colspan="2">
                    ${productData["discount"]["on_invoice_range"] ? "On Invoice" : "Off Invoice"}
                </td>
            </tr>
            <tr class="info_row brandscreen">
                <td class="info_data skuBrand_level_progress" id="skulevelprogress-${productData["sku"]}" colspan="4">
                    ${loadProgressCards({"brands": [productData["discount"]]}, true, true)}
                </td>
            </tr>
            <tr class="info_row brandscreen">
                <td class="info_data" style="vertical-align: middle; padding: 0px 0 0 0;" colspan="2">
                    Period Total:   125
                </td>
                <td class="info_data" style="vertical-align: middle; padding: 0px 0 0 0;" colspan="2">
                    <div class="counter__wrapper">
                        <div class="counter__container" skudata="${productData["sku"]}" parentskudata=${data["sku"]} >
                            <div class="counter__box__container sub">
                                <div class="counter__minus key${uuid}" id="minus" >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_138_2417)">
                                        <path d="M9 1.5C7.51664 1.5 6.0666 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4968 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98492 1.5 9 1.5ZM11.25 9.75H6.75C6.55109 9.75 6.36033 9.67098 6.21967 9.53033C6.07902 9.38968 6 9.19891 6 9C6 8.80109 6.07902 8.61032 6.21967 8.46967C6.36033 8.32902 6.55109 8.25 6.75 8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75Z" fill="#FDE0D6"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_138_2417">
                                            <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        
                            <input id="counter_input_${index}" class="counter__input home" type="text" value=${productData["units"]} size="4" maxlength="4" autocomplete="off" previous-value="1" />
                            <div class="counter__box__container add">
                                <div class="counter__plus key${uuid}" id="plus">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_138_2422)">
                                        <path d="M9 1.5C7.51664 1.5 6.0666 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4968 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98492 1.5 9 1.5ZM11.25 9.75H9.75V11.25C9.75 11.4489 9.67099 11.6397 9.53033 11.7803C9.38968 11.921 9.19892 12 9 12C8.80109 12 8.61033 11.921 8.46967 11.7803C8.32902 11.6397 8.25 11.4489 8.25 11.25V9.75H6.75C6.55109 9.75 6.36033 9.67098 6.21967 9.53033C6.07902 9.38968 6 9.19891 6 9C6 8.80109 6.07902 8.61032 6.21967 8.46967C6.36033 8.32902 6.55109 8.25 6.75 8.25H8.25V6.75C8.25 6.55109 8.32902 6.36032 8.46967 6.21967C8.61033 6.07902 8.80109 6 9 6C9.19892 6 9.38968 6.07902 9.53033 6.21967C9.67099 6.36032 9.75 6.55109 9.75 6.75V8.25H11.25C11.4489 8.25 11.6397 8.32902 11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033C11.6397 9.67098 11.4489 9.75 11.25 9.75Z" fill="#F36633"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_138_2422">
                                            <rect width="18" height="18" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="info_row paddingBottom"><td colspan="4"></td></tr>
            <tr class="info_row paddingTop"><td colspan="4"></td></tr>
        `);

        $(`.counter__minus.key${uuid}`).click(function (e) {
            updateCounter(this, "minus", currentSku, skulevel);
        });

        $(`.counter__plus.key${uuid}`).click(function (e) {
            updateCounter(this, "add", currentSku, skulevel);
            // let parsedata = getParsedData();
            // let filteredBrand = parsedata["plan_progress"]["brands"].filter(brand => brand["sku"] === parsedata["selected_brand"]);
            // let progressCards = loadProgressCards({ "brands": filteredBrand }, true, true)
            // $(this).parent(".counter__box__container.add").parent(".counter__container").parent(".counter__wrapper").parent(".info_data").parent(".info_row.brandscreen").prev(".info_row.brandscreen").children(".info_data.skuBrand_level_progress").empty();
            // $(this).parent(".counter__box__container.add").parent(".counter__container").parent(".counter__wrapper").parent(".info_data").parent(".info_row.brandscreen").prev(".info_row.brandscreen").children(".info_data.skuBrand_level_progress").append(progressCards);
        });
    });

    $(".accordion-item-header.orderdetail").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody = $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });

    $('input[id$=tbDate]').datepicker({ dateFormat: 'M dd, y', minDate: 0 });
    $('input[id$=tbDate]').datepicker("setDate", "today");
}

function updateCounter(counterInput, type, currentSku, skulevel) {
    let storeddata = localStorage.getItem("data");
    let parseStoredData = JSON.parse(storeddata);
    let siblingWrapper = $(counterInput).parent().siblings(".counter__input");
    if (type === "add") {
        var $input = $(siblingWrapper);
        siblingWrapper.siblings(".counter__box__container.sub").children().children().children().children().css("fill", "#f36633");
        let datepickedElement = $(counterInput).parent().parent().parent().parent().parent().parent().parent().siblings(".date-picker-value").children().children(".hasDatepicker");
        let formattedDate = datepickedElement.datepicker({ dateFormat: 'M dd, y' }).val();
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        let skuData = $(counterInput).parent().parent().attr("skudata");
        let parentSkuData = $(counterInput).parent().parent().attr("parentskudata");

        let brand = parseStoredData["plan_progress"]["brands"].filter(brand => brand["sku"] === currentSku);
        
        window.cartData = {
            ...window.cartData,
            [parentSkuData]: {
                ...window.cartData[parentSkuData],
                [skuData]: $input.val()
            }
        };

        parseStoredData && parseStoredData["new_orders"] && parseStoredData["new_orders"]["orders"] && parseStoredData["new_orders"]["orders"].forEach(order => {
            if (order["sku"] === parentSkuData) {
                order["product_details"].forEach(product => {
                    /* if(currentSku === product["brand"]) {
                        
                    } */
                    if (product["sku"] === skuData) {
                        order["ordered_date"] = formattedDate ? formattedDate : new Date();
                        product["quantity"] = $input.val();
                        product["units"] = $input.val();
                        product["discount"]["selected"] = $input.val();
                        if(skulevel) {
                            // let currentItemValue = calculateSumAmount({[parentSkuData]: {...window.cartData[parentSkuData]}});
                            let progressCards = loadProgressCards({ "brands": [product["discount"]] }, true, true)
                            $(`#skulevelprogress-${product["sku"]}`).empty();
                            $(`#skulevelprogress-${product["sku"]}`).append(progressCards);
                        }
                        // window.cartData[parentSkuData][skuData] = $input.val() - Number(product["units"]);
                    }
                });
            }
        });

        let totalCalculationTemporary = JSON.parse(JSON.stringify({
            [parentSkuData]: {
                ...window.cartData[parentSkuData]
            }
        }));

        for(key in totalCalculationTemporary[parentSkuData]) {
            if(!key.includes(brand[0]["name"]?.toUpperCase())) {
                delete totalCalculationTemporary[parentSkuData][key];    
            }
        }

        let total = calculateSumAmount(totalCalculationTemporary);

        parseStoredData && parseStoredData["plan_progress"] && parseStoredData["plan_progress"]["brands"].map(brandDataItem => {
            if (brandDataItem["sku"] === parseStoredData["selected_brand"]) {
                if(!skulevel) {
                    brandDataItem["selected"] = total;
                }
            }
        })

        window.dataStore = parseStoredData;
        let filteredBrand = window.dataStore["plan_progress"]["brands"].filter(brand => brand["sku"] === window.dataStore["selected_brand"]);
        if(!skulevel) {
            let progressCards = loadProgressCards({ "brands": filteredBrand }, true, true)
            $(".brand_level_progress").append(progressCards);
        }
        
        $input.attr("previous-value", $input.val());
        return false;
    }

    if (type === "minus") {
        var $input = $(siblingWrapper);
        var count = parseInt($input.val()) - 1;
        let datepickedElement = $(counterInput).parent().parent().parent().parent().parent().parent().parent().siblings(".date-picker-value").children().children(".hasDatepicker");
        let formattedDate = datepickedElement.datepicker({ dateFormat: 'M dd, y' }).val();
        let skuData = $(counterInput).parent().parent().attr("skudata");
        let parentSkuData = $(counterInput).parent().parent().attr("parentskudata");
        if (count >= 0) {
            if (count == 0) {
                $input.val(count);
                $input.change();
                $input.attr("previous-value", $input.val());
                siblingWrapper.siblings(".counter__box__container.sub").children().children().children().children().css("fill", "#FDE0D6");
            } else {
                $input.val(count);
                $input.change();
                $input.attr("previous-value", $input.val());
            }
            window.cartData = {
                ...window.cartData,
                [parentSkuData]: {
                    ...window.cartData[parentSkuData],
                    [skuData]: $input.val()
                }
            };
            parseStoredData && parseStoredData["new_orders"] && parseStoredData["new_orders"]["orders"] && parseStoredData["new_orders"]["orders"].forEach(order => {
                if (order["sku"] === parentSkuData) {
                    order["product_details"].forEach(product => {
                        /* if(currentSku === product["brand"]) {
                            
                        } */
                        if (product["sku"] === skuData) {
                            order["ordered_date"] = formattedDate ? formattedDate : new Date();
                            product["quantity"] = $input.val();
                            product["units"] = $input.val();
                            product["discount"]["selected"] = $input.val();
                            if(skulevel) {
                                // let currentItemValue = calculateSumAmount({[parentSkuData]: {...window.cartData[parentSkuData]}});
                                console.log(product);
                                console.log(`skulevelprogress-${product["sku"]}`);
                                let progressCards = loadProgressCards({ "brands": [product["discount"]] }, true, true)
                                $(`#skulevelprogress-${product["sku"]}`).empty();
                                $(`#skulevelprogress-${product["sku"]}`).append(progressCards);
                            }
                            // window.cartData[parentSkuData][skuData] = $input.val() - Number(product["units"]);
                        }
                    });
                }
            });

            let total = calculateSumAmount({
                [parentSkuData]: {
                    ...window.cartData[parentSkuData]
                }
            });
    
            parseStoredData && parseStoredData["plan_progress"] && parseStoredData["plan_progress"]["brands"].map(brandDataItem => {
                if (brandDataItem["sku"] === parseStoredData["selected_brand"]) {
                    if(!skulevel) {
                        brandDataItem["selected"] = total;
                    }
                }
            })
    
            window.dataStore = parseStoredData;
            let filteredBrand = window.dataStore["plan_progress"]["brands"].filter(brand => brand["sku"] === window.dataStore["selected_brand"]);
            if(!skulevel) {
                let progressCards = loadProgressCards({ "brands": filteredBrand }, true, true)
                $(".brand_level_progress").append(progressCards);
            }
            $input.attr("previous-value", $input.val());
            return false;
        }
        count = count < 1 ? 0 : count;
    }
}

function orderGroup(data) {
    let progresscards = data.map(orderData => {
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

        return `
            <div class="order_card" data=${encodeURIComponent(JSON.stringify(orderData))}>
                <div class="status_bar_bordered">
                    <div class="bordered ${classValue}"></div>
                    <div>
                        <div class="title">
                            <div class="name">${orderData["account_no"]}</div>
                            <div class="arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                        </div>
                        <div class="info">Order No: ${orderData["order_no"]}</div>
                    </div>
                </div>
                <div class="info outer"><span class=${classValue}>${orderData["status"]}</span>${orderData["delivery_date"] ? " | Delivery On: " : ""}${orderData["delivery_date"]}</div>

                <div class="order_cart">
                    <div class="detail">
                        <table class="ui very basic table">
                            <thead>
                                <tr class="info_row">
                                    <td class="info_data" colspan="1">Est. Price</td>
                                    <td class="info_data" colspan="1">Units</td>
                                    <td class="info_data" colspan="1">Free Goods</td>
                                    <td class="info_data" colspan="1">On Invoice Discount</td>
                                    <td class="info_data" colspan="1">Pay Term</td>
                                </tr>
                            </thead>
                            <tbody id="order_card_tablebody">
                                ${getProductItems(orderData)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    })
    return progresscards;
}

function getProductItems(data) {
    let iemsDetails = data["additional_details"]["product_details"];
    let productItems = iemsDetails.map(item => {
        return `
            <tr>
                <td colspan="5">
                    <div class="title">
                        <div class="name">${item["name"]}</div>
                        <div class="arrow"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </td>
            </tr>
            <tr class="info_row">
                <td class="info_data" colspan="1">£ ${item["price"]}</td>
                <td class="info_data" colspan="1">${item["units"]}</td>
                <td class="info_data" colspan="1">+${item["free_goods"]}</td>
                <td class="info_data" colspan="1">${item["discount"]}%</td>
                <td class="info_data" colspan="1">${item["payterm"]} D</td>
            </tr>
        `;
    });
    return productItems.join("");
}