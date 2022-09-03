function addInputEventListener() {
    $('input[type=radio]').change(function () {
        $(`.block`).map((v) => {
            $($(`.block`)[v]).removeClass("active");
        });
        $(`.tab_body`).map((v) => {
            $($(`.tab_body`)[v]).removeClass("active");
        });
        $(`#${this.id}`).parent('.block').toggleClass('active');
        $(`#${this.id}`).parent('.block').siblings('.tab_body').toggleClass('active');

    });
}

function loadGeneralWelcome(data) {
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="splash_screen">
            <div class="branding">
                <div class="branding_info">
                    <div class="icon_wrapper">
                        <img src=${data["bg-img"]} />
                    </div>
                    <div class="branding_msg">${data["title"]}</div>
                    <div class="sub_info">${data["sub-title"]}</div>
                </div>
            </div>
            <div class="legal_tnc">
                <div class="legal_tnc_title">Legal Terms & Conditions</div>
                <div class="legal_tnc_body">${data["tnc"]}</div>
                <div class="readmore">Read More</div>
            </div>
        </div>
    `);
}

function loadClientList(data) {
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="client_list">
            <div class="space-bw">
                <div class="label">Client List</div>
                <div class="icon"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
            </div>
            <ul>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
                <li class="item">
                    <div class="space-bw">
                        <div class="detail">
                            <span class="bold">Client Code 1:</span>
                            <span>Valentin Buteler</span>
                        </div>
                        <div class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    </div>
                </li>
            </ul>
        </div>
    `);
}

function loadTermsUI(data) {
    $("#bodyContent").css('height', 'calc(100% - 76px - 14px)');
    $(".header").removeClass('hide');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="termsofuse bottom">
            <div class="main_content">
                <div class="heading">${data["heading"]}</div>
                <div class="termsofuse_content" id="termsofuse_content">
                    
                </div>
            </div>
            <div class="btn_wrapper">
                <div class="btnbox">
                    <button class="btn outline">${data["decline"]}</button>
                    <button class="btn solid">${data["accept"]}</button>
                </div>
            </div>
        </div>
    `);

    data && data["termsofuse"] && data["termsofuse"].map(terms => {
        $("#termsofuse_content").append(`
            <div class="block">
                <div class="title">${terms["title"]}</div>
                <div class="detail">${terms["desc"]}</div>
            </div>
        `);
    });
}

function callPlaceOrder() {
    ToApp("choosebrands-screen", {
        "title": "Choose Brand",
        "start_date": "Jan 01, 22",
        "last_date": "Jan 31, 22",
        "isSku": true,
        "products": [
            {
                "name": "Augmentin",
                "purchased": "125",
                "selected": "",
                "max_limit": "300"
            },
            {
                "name": "Ventolin",
                "purchased": "45",
                "selected": "",
                "max_limit": "200"
            },
            {
                "name": "Seretide",
                "purchased": "75",
                "selected": "",
                "max_limit": "600"
            }
        ],
        "cta": "Add Another Account or Deferral Date",
        "orders": [
            {
                "account_no": "Wholesaler A - Accoount: A0001",
                "order_no": "Order No: 6921030003",
                "status": "Invoiced",
                "delivery_date": "May 30 22",
                "additional_details": {
                    "product_details": [
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        },
                        {
                            "name": "Augmentin 125mcg Tabs",
                            "price": "4.01",
                            "units": "25",
                            "free_goods": "2",
                            "discount": "40",
                            "payterm": "30"
                        }
                    ]
                }
            }
        ]
    });
}

function loadUserWelcomeUI(data) {
    let lastOrder = data["order_history"]["orders"][0];
    $(".header").removeClass('hide');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_section">
            <div class="tabs">
                <div class="tab-2">
                    <div class="block active">
                        <input id="tab21" name="tabs-two" type="radio" checked="checked">
                        <label for="tab21" id="label">Last Order</label>
                    </div>
                    <div class="tab_body active">
                        <div class="order_card last_order" data=${encodeURIComponent(JSON.stringify(lastOrder))}>
                            <div class="title">
                                <div class="name">${lastOrder["account_no"]}</div>
                                <div class="arrow">
                                    <img src="/assets/images/svg/right.svg" />
                                </div>
                            </div>
                            <div class="info">Order No: ${lastOrder["order_no"]}</div>
                            <div class="info">${lastOrder["status"]}${lastOrder["delivery_date"] ? " | Delivery On: " : ""}${lastOrder["delivery_date"]}</div>
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
                            <div class="place_order">
                                <button class="btn outline" onclick="callPlaceOrder()"><span class="icon"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>Place New Order</button>
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

    data["order_history"]["orders"].map((orderData, index) => {
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
                                    <td class="info_data" colspan="1">On Invoice Discount</td>
                                    <td class="info_data" colspan="1">Pay Term</td>
                                </tr>
                            </thead>
                            <tbody id="order_card_tablebody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        `);

        $(".order_card.last_order").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            let currentElementData = $(this).attr("data");
            let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
            let childElement = $(this).children(".order_cart");
            let additionalDetails = parsedCurrentElementData["additional_details"]["product_details"];
            let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
            if (childElement.hasClass("hide")) {
                childElement.removeClass("hide");
                getTableBodyChildElement.empty();
                additionalDetails.map(item => {
                    getTableBodyChildElement.append(`
                        <tr>
                            <td colspan="5">
                                <div class="title">
                                    <div class="name">${item["name"]}</div>
                                    <div class="arrow edit">
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
                    `);
                })
            } else {
                childElement.addClass("hide");
            }
        });

        $(".order_card.history.clickToOpen").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            let currentElementData = $(this).attr("data");
            let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
            let childElement = $(this).children(".order_cart");
            let additionalDetails = parsedCurrentElementData["additional_details"]["product_details"];
            let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
            if (childElement.hasClass("hide")) {
                childElement.removeClass("hide");
                getTableBodyChildElement.empty();
                additionalDetails.map(item => {
                    getTableBodyChildElement.append(`
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
                    `);
                })
            } else {
                childElement.addClass("hide");
            }
        })
    })
}

function loadOrderCart(data) {
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">${data["title"]}</div>
                <div class="icon"><img src="/assets/images/svg/plus.svg" /></div>
            </div>
            ${loadProgressCards(data, true, true)}
            ${getAccordianAccounts(data["orders"])}
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
                        <div class="accordion-item-body-content">
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
                        <div class="arrow">
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