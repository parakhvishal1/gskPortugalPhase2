
function loadOrderCart(data, originalData) {
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">Order Details</div>
                <div class="icon hide"><img src="/assets/images/svg/plus.svg" /></div>
            </div>
            ${getAccordianAccounts(data["products"])}
        </div>
        <div class="bottom">
            <div class="btn_wrapper">
                <div class="place_order">
                    <button class="btn solid inverted" id="cancel">Cancel</button>
                    <button class="btn solid" id="confirm">Confirm</button>
                </div>
            </div>
        </div>
    `);

    $("#cancel").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        showBrandLevelDetails(data, originalData)
    });

    $("#confirm").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        ToApp("ordercart-final-screen", data, originalData);
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
}

function getAccordianAccounts(data) {
    let accordianAccounts = data.map(order => {
        return `
            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-item-header account_detail">${order["account_no"]}</div>
                    <div class="accordion-item-body parent">
                        <div class="accordion-item-body-content" style="height: 300px; overflow: auto;">
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row">
                                        <td class="info_data title" colspan="1">Est. Price</td>
                                        <td class="info_data title" colspan="1">Units</td>
                                        <td class="info_data title" colspan="1">Free Goods</td>
                                        <td class="info_data title" colspan="1">On Invoice Discount</td>
                                        <td class="info_data title" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${getAccordianAccountsData(order["additional_details"]["product_details"])}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    return accordianAccounts.join("");
}

function getAccordianAccountsData(data) {
    let accordianAccountsData = data.map(item => {
        return `
            <tr>
                <td colspan="5">
                    <div class="title">
                        <div class="name">${item["name"]}</div>
                        <div class="arrow hide">
                            <img src="/assets/images/svg/edit.svg" />
                        </div>
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
        `
    });
    return accordianAccountsData.join("");
}

function loadOrderFinalCart(data, originalData) {
    let pgData = JSON.parse(JSON.stringify(data));
    let brandData = {
        "products": [
            pgData["brands"]["products"][0]
        ]
    }
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">Order Details</div>
                <div class="icon"><img src="/assets/images/svg/plus.svg" /></div>
            </div>
            ${loadProgressCards(brandData, true, true)}
            ${getAccordianAccounts(data["products"])}
        </div>
        <div class="bottom">
            <div class="btn_wrapper">
                <div class="place_order">
                    <button class="btn solid inverted" id="backFinalCheckout">Cancel</button>
                    <button class="btn solid" id="continueFinalCheckout">Continue</button>
                </div>
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
    });

    $("#continueFinalCheckout").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        ToApp("choosebrands-screen-from-cart", data, originalData);
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
}