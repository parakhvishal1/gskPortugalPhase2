
function loadOrderCart(data) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    $("#header").addClass('tnc');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container checkoutpage">
            <div class="menu_header heading_block">
                <div class="label">${locale["labels"]["orderDetails"]}</div>
                <div class="icon goToBrandLevel cursor"  data-tooltip="Add More" data-tooltip-pos="right"><img src="/gskPortugalPhase2/assets/images/svg/plus.svg" /></div>
            </div>
            ${getAccordianAccounts(data["new_orders"]["orders"])}
            <div>
                ${data["rebates_orders"] && data["rebates_orders"]["orders"] && data["rebates_orders"]["orders"].length !== 0 ? `<div class="menu_header"><div class="category_label">${locale["labels"]["rebates"]}</div></div>`: ""}
                <div id="rebates_order">
                    ${data["rebates_orders"] && data["rebates_orders"]["orders"] && data["rebates_orders"]["orders"].length !== 0 ? getAccordianAccounts([data["rebates_orders"]["orders"][0]], true): ""}
                </div>
            </div>
        </div>
        <div class="btn_wrapper">
            <div class="place_order">
                <button class="btn solid cancel" id="cancel">${locale["buttons"]["cancel"]}</button>
                <button class="btn solid confirm" id="confirm">${locale["buttons"]["confirm"]}</button>
            </div>
        </div>
        <div class="periodrebates hide">
            <div class="rebates_list"></div>
        </div>
    `);

    data && data["rebates_orders"] && data["rebates_orders"]["orders"] && data["rebates_orders"]["orders"].map((rebates, index) => {
        $(".rebates_list").append(`<div class="item" skudata=${rebates["sku"]}>${rebates["account_no"]}</div>`);
    });

    $(".goToBrandLevel").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = JSON.parse(localStorage.getItem("data"));
        ToApp("choosebrands-screen", parseData);
        ToBot("checkout-add-brands", parseData);
        // showBrandLevelDetails(parseData, parseData["selected_brand"]);
    });

    $("#cancel").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = JSON.parse(localStorage.getItem("init"));
        ToBot("cancel-order", parseData);
        ToApp("userwelcome-screen", parseData);
        // showBrandLevelDetails(parseData, parseData["selected_brand"]);
    });

    $("#confirm").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        confirmOrder();
        /* data["plan_progress"]["brands"].map(progress => {
            progress["purchased"] = Number(progress["purchased"]) + Number(progress["selected"]);
        }); */
        // ToApp('userwelcome-screen', data);
        // ToApp("ordercart-final-screen", data);
        
    });

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

    if(data["rebates_orders"]["orders"].length) {
        $(".periodrebates").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            $(".periodrebates").addClass("hide");
        });

        $(".rebates_list .item").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            $(".periodrebates").addClass("hide");
            let currentElementData = $(this).attr("skudata");
            let filteredRebates = data["rebates_orders"]["orders"].filter((rebates, index) => rebates["sku"] === currentElementData)
            console.log("currentElementData checkout --> ", currentElementData);
            $('#rebates_order').empty();
            $('#rebates_order').append(getAccordianAccounts(filteredRebates, true));
            $('.switchWholesalerAccount').click(function (e) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                $(".periodrebates").removeClass("hide");
            });
        });

        $('.switchWholesalerAccount').click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            $(".periodrebates").removeClass("hide");
        });
    }

    /* $(".order_details_container.choosebrands").mCustomScrollbar({
        theme: "dark-thin",
        scrollButtons: { enable: false },
        autoHideScrollbar: true
    }); */

    
    /* $(".accordion-item-body-content").mCustomScrollbar({
        theme: "dark-thin",
        scrollButtons: { enable: false },
        autoHideScrollbar: true
    }); */

    $(".quantityEditBackToSelection").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = window.dataStore;
        let selectedBrand = $(this).attr("brand");
        // showBrandLevelDetails(parseData, selectedBrand);
        ToBot("checkout-to-brand-detailing", parseData);

        const filteredBrand = parseData["plan_progress"]["brands"].filter(brand => brand["sku"] === selectedBrand);
        const isBrandSku = filteredBrand[0]["isSku"];
        isBrandSku ? showSkuLevelDetailsBrand(parseData, selectedBrand, "from-checkout") : showBrandLevelDetails(parseData, selectedBrand, "from-checkout");
    });
}

function getAccordianAccounts(data, rebates) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    let parsedData = getParsedData();
    let newDataJoined = [];
    if(rebates) {
        newDataJoined = data || [];
    } else {
        newDataJoined = getJoinedCheckout(parsedData);
    }
    console.log("newDataJoined -> ", newDataJoined);
    let filteredBrand = parsedData["plan_progress"]["brands"].filter(brand => brand["sku"] === parsedData["selected_brand"]);
    const getRebatesSwitchOption = (rebates) => {
        if(rebates) {
            return `
                <div class="edit switchWholesalerAccount" style="height: auto; width: 16px; margin-right: 10px;" skudata=${data["sku"]}>
                    <img src="/gskPortugalPhase2/assets/images/svg/edit.svg" />
                </div>
            `
        } 
        return "";
    }

    let accordianAccounts = newDataJoined && newDataJoined.map(order => {
        console.log("data , ", order["product_details"]);
        return `
            <div class="accordion">
                <div class="accordion-item">
                    <!--  <div class="accordion-item-header account_detail active">
                        ${order["account_no"]}
                    </div> -->
                    <div class="accordion-item-header account_detail active">
                        <div class="flex">
                            ${getRebatesSwitchOption(rebates)}
                            ${order["account_no"]}
                        </div>
                    </div>
                    <div class="accordion-item-body parent opened">
                        <div class="accordion-item-body-content" style="max-height: 300px; overflow-y: auto;">
                            <div class="date-picker-value date_order ${order["ordered_date"] ? "" : "hide"}">
                                <div class="flex calendar-picker">
                                    <img class="picker" src="/gskPortugalPhase2/assets/images/svg/calendar.svg" />
                                    <div class="input_date_picker" readonly="readonly">${order["ordered_date"]}</div>
                                </div>
                            </div>
                            <div class="flex title label">${locale["labels"]["products"]}</div>
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row borderBottom">
                                        <td>
                                            <div class="checkout_item_container thead">
                                                <div class="checkout_item_name title">${locale["labels"]["products"]}</div>
                                                <div class="checkout_item_details">
                                                    <div class="item_data_wrapper_row title">
                                                        ${order["product_details"]?.[0]?.["units"] ? `<div class="item_data">${locale["labels"]["units"]}</div>` : ''}
                                                        ${order["product_details"]?.[0]?.["free_goods"] ? `<div class="item_data">${locale["labels"]["freeGoods"]}</div>` : ''}
                                                        ${order["product_details"]?.[0]?.["discount"] ? `<div class="item_data">${rebates ? locale["labels"]["offInvoiceDiscount"] : locale["labels"]["onInvoiceDiscount"]}</div>` : ''}
                                                        ${order["product_details"]?.[0]?.["payterm"] ? `<div class="item_data">${locale["labels"]["payTerm"]}</div>` : ''}
                                                    </div>
                                                    <div class="checkout_edit_icon">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${getAccordianAccountsData(order["product_details"], rebates)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    return accordianAccounts.join("");
}

function getAccordianAccountsData(data, rebates) {
    let parsedData = getParsedData();
    let brand = parsedData["plan_progress"]["brands"].filter(brand => brand["sku"] === parsedData["selected_brand"]);
    let filteredBrand = brand[0];
    let accordianAccountsData = data.map((item, index) => {
        if(rebates || item["quantity"]) {
            return `
                <tr>
                    <td>
                        <div class="checkout_item_container">
                            <div class="checkout_item_name">
                                <div class="item_name_text">
                                    ${item["name"]}
                                </div>
                                <div class="checkout_edit_icon">
                                    <div class="arrow edit quantityEditBackToSelection" brand="${item['brand']}">
                                        ${rebates ? "" : '<img src="/gskPortugalPhase2/assets/images/svg/edit.svg" key=${index} />'}
                                    </div>
                                </div>
                            </div>
                            <div class="checkout_item_details">
                                <div class="item_data_wrapper_row">
                                    ${item["units"] ? `<div class="item_data">${item["units"] && item["units"] !== "null" ? item["units"] : "-"}</div>` : ''}
                                    ${item["free_goods"] ? `<div class="item_data">${item["free_goods"] && item["free_goods"] !== "null" ? item["free_goods"] : "-"}</div>` : ''}
                                    ${item["discount"] ? `<div class="item_data">${item["discount"] && item["discount"] !== "null" ? (item["discount"] + '%') : "-"}</div>` : ''}
                                    ${item["payterm"] ? `<div class="item_data">${item["payterm"] && item["payterm"] !== "null" ? (item["payterm"] + 'D') : "-"}</div>` : ''}
                                </div>
                                <div class="checkout_edit_icon">
                                    <div class="arrow edit quantityEditBackToSelection" brand="${item['brand']}">
                                        ${rebates ? "" : '<img src="/gskPortugalPhase2/assets/images/svg/edit.svg" key=${index} />'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            `
        }
    });

    return accordianAccountsData.join("");
}

function loadOrderFinalCart(data) {
    let selectedBrand = data["selected_brand"];
    let filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === selectedBrand);

    let filteredBrandData = filteredBrand[0];

    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">${locale["labels"]["orderDetails"]}</div>
                <div class="icon"><img src="/gskPortugalPhase2/assets/images/svg/plus.svg" /></div>
            </div>
            ${loadProgressCards({ "brands": filteredBrand }, true, true)}
            ${getAccordianAccounts(data["new_orders"]["orders"])}
        </div>
        <div class="btn_wrapper">
            <div class="place_order">
                <button class="btn solid inverted" id="backFinalCheckout">${locale["buttons"]["cancel"]}</button>
                <button class="btn solid" id="continueFinalCheckout">${locale["buttons"]["continue"]}</button>
            </div>
        </div>
    `);

    $(".accordion-item-body-content").map(v => {
        let bodyContent = $(".accordion-item-body-content")[v];
        // $(bodyContent).parent().css("max-height", "unset");
    })

    $("#backFinalCheckout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let parseData = JSON.parse(localStorage.getItem("init"));
        ToBot("cancel-order-total-invoice", data);
        ToApp("userwelcome-screen", parseData);
    });

    $("#continueFinalCheckout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        // ToApp("choosebrands-screen-from-cart", data);
        ToBot("confirm-order-total-invoice", data);
    });

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

    /* $(".order_details_container.choosebrands").mCustomScrollbar({
        theme: "dark-thin",
        scrollButtons: { enable: true },
        autoHideScrollbar: true
    }); */

    
    /* $(".accordion-item-body-content").mCustomScrollbar({
        theme: "dark-thin",
        scrollButtons: { enable: false },
        autoHideScrollbar: true
    }); */
}

function goBack() {
    let parsedData = JSON.parse(localStorage.getItem("data"));
    const filteredBrand = parsedData["plan_progress"]["brands"].filter(brand => brand["sku"] === parsedData["selected_brand"]);
    const isBrandSku = filteredBrand[0]["isSku"];
    !isBrandSku ? showSkuLevelDetailsBrand(parsedData, parsedData["selected_brand"]) : showBrandLevelDetails(parsedData, parsedData["selected_brand"]);
};

function confirmOrder() {
    let data = getParsedData();
    let filteredBrand = data["plan_progress"]["brands"].filter(brand => brand["sku"] === data["selected_brand"]);
    if(filteredBrand && filteredBrand[0] && filteredBrand[0]["total_invoice_range"]) {
        ToApp("ordercart-final-screen", data);
    } else {
        let updatedData = getJoinedCheckout(data);
        console.log("updated data --> ", updatedData);
        ToBot("confirm-order", updatedData);
        /* loadUserWelcomeUI(data);
        data["plan_progress"] && loadPlanProgress(data["plan_progress"], true, true); */
    }
}
