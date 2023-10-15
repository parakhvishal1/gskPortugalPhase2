function loadUserWelcomeUI(data) {
    const locale = data["locale"];
    const prevOrderLength = data?.["previous_orders"]?.["orders"].length;
    const lastOrder = data?.["previous_orders"]?.["orders"]?.[prevOrderLength - 1];

    $("#content_box").empty();
    $("#content_box").append(`<div class="order_section">${showTabs(data)}</div>`);

    addInputEventListener();
    if (prevOrderLength) {
        $("#last_order_history").append(`
            <div class="order_card last_order" data=${encodeURIComponent(JSON.stringify(lastOrder))} skudata="${lastOrder['sku']}" date="${lastOrder['ordered_date']}" orderid=${lastOrder["order_no"]}>
                <div class="title backbtn hide">
                    <div class="title inner" style="padding-left: 0; margin-bottom:0;">
                        <div class="name highlight">${lastOrder["account_no"]}</div>
                    </div>
                    <div class="arrow name flex back_button" style="font-weight: 400; font-size: 14px; color: #151515;">
                        <img src="/assets/images/svg/right.svg" style="transform: rotate(180deg);" />
                        <span style="margin-left: 5px;">${locale["buttons"]["back"]}</span>
                    </div>
                    <div class="arrow hide">
                        <img src="/assets/images/svg/edit.svg" style="height: 20px; width: 20px;"/>
                    </div>
                </div>
                <div class="card_click" data=${encodeURIComponent(JSON.stringify(lastOrder))} skudata="${lastOrder['sku']}" date="${lastOrder['ordered_date']}" orderid=${lastOrder["order_no"]}>
                    <div class="title outer">
                        <div class="name highlight">${lastOrder["account_no"]}</div>
                        <div class="arrow">
                            <img src="/assets/images/svg/right.svg" />
                        </div>
                    </div>
                    <div class="flex">
                        <div class="order_status">
                            <div class="info"><span class="light-colored">${locale["labels"]["orderNo"]}:</span> <span class="bold">${lastOrder["order_no"]}</span></div>
                            <div class="info"><span class="light-colored">${locale["labels"]["status"]}:</span> <span class="bold">${lastOrder["status"]}</span></div>
                        </div>
                        <div class="order_status">
                            <div class="info"><span class="light-colored">${locale["labels"]["orderDate"]}:</span> <span class="bold">${lastOrder["ordered_date"]}</span></div>
                            <div class="info"><span class="light-colored">${locale["labels"]["statusDate"]}:</span> <span class="bold">${lastOrder["delivery_date"]}</span></div>
                        </div>
                        <div class="order_on_date">
                            <div class="info"><span class="light-colored">${locale["labels"]["orderedOn"]}:</span></div>
                            <div class="info textAlignRight">${lastOrder["ordered_date"]}</div>
                        </div>
                    </div>
                </div>
                <div class="order_cart history hide">
                    <div class="title">
                        <div class="name">${locale["labels"]["orderDetails"]}</div>
                    </div>
                    <div class="detail">
                        <table class="ui very basic table" style="width: 100%;" skudata=${lastOrder["sku"]} date="${lastOrder["ordered_date"]}" orderid=${lastOrder["order_no"]}>
                            <thead>
                                <tr class="info_row">
                                    <td class="info_data" colspan="2">${locale["labels"]["estPrice"]}</td>
                                    <td class="info_data" colspan="1">${locale["labels"]["units"]}</td>
                                    <td class="info_data" colspan="1">${locale["labels"]["freeGoods"]}</td>
                                    <td class="info_data" colspan="1">${Boolean(lastOrder["on_invoice"]) ? "On Invoice Discount" : "Off Invoice Discount"}</td>
                                    <td class="info_data" colspan="1">${locale["labels"]["payTerm"]}</td>
                                </tr>
                            </thead>
                            <tbody id="order_card_tablebody"></tbody>
                        </table>
                        
                    </div>
                </div>
            </div>
            <div class="progress_plan" id="progress_plan_main"></div>
        `);

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
                    <div class="history_card_click close" data=${encodeURIComponent(JSON.stringify(orderData))} skudata="${orderData['sku']}" date="${orderData['ordered_date']}" orderid=${orderData["order_no"]}>
                        <div class="status_bar_bordered">
                            <div class="bordered ${classValue}"></div>
                            <div style="width: 100%;">
                                <div class="title">
                                    <div class="name">${orderData["account_no"]}</div>
                                    <div class="arrow">
                                        <img src="/assets/images/svg/right.svg" />
                                    </div>
                                </div>
                                <div class="flex">
                                    <div>
                                        <div class="info">${locale["labels"]["orderNo"]}: ${orderData["order_no"]}</div>
                                        <div class="info outer" style="align-self: flex-start;"><span class=${classValue}>${orderData["status"]}</span>${orderData["delivery_date"] ? ` | ${locale["labels"]["deliveryOn"]}: ` : ""}${orderData["delivery_date"]}</div>
                                    </div>
                                    <div class="order_on_date">
                                        <div class="info" style="font-weight: 600;white-space: nowrap;">${locale["labels"]["orderedOn"]}:</div>
                                        <div class="info">${lastOrder["ordered_date"]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order_cart history hide">
                        <div class="title">
                            <div class="name">${locale["labels"]["orderDetails"]}</div>
                        </div>
                        <div class="detail">
                            <table class="ui very basic table" skudata=${orderData["sku"]} orderid=${orderData["order_no"]}>
                                <thead>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">${locale["labels"]["estPrice"]}</td>
                                        <td class="info_data" colspan="1">${locale["labels"]["units"]}</td>
                                        <td class="info_data" colspan="1">${locale["labels"]["freeGoods"]}</td>
                                        <td class="info_data" colspan="2">${Boolean(lastOrder["on_invoice"]) ? "On Invoice Discount" : "Off Invoice Discount"}</td>
                                        <td class="info_data" colspan="1">${locale["labels"]["payTerm"]}</td>
                                    </tr>
                                </thead>
                                <tbody id="order_card_tablebody" skudata=${orderData["sku"]} date="${orderData["ordered_date"]}" orderid=${orderData["order_no"]}></tbody>
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
                let previousSelectedOrderId = $(this).attr("orderid");
                let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                let childElement = $(this).parent().children(".order_cart");
                let additionalDetails = parsedCurrentElementData["product_details"];
                let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
                if (childElement.hasClass("hide")) {
                    childElement.removeClass("hide");
                    $("#progress_plan_main").addClass("hide");
                    $(this).children(".title.outer").addClass("hide");
                    $(this).siblings(".title.backbtn").removeClass("hide");
                    getTableBodyChildElement.empty();
                    additionalDetails && additionalDetails.map((item, index) => {
                        getTableBodyChildElement.append(`
                            <tr>
                                <td colspan="5">
                                    <div class="title">
                                        <div class="name" skudata=${item["sku"]} date="${orderData["ordered_date"]}" orderid=${orderData["order_no"]}>${item["name"]}</div>
                                        ${item["internalOrderStatus"] === "OPEN" ? `
                                            <div class="arrow edit quantityEdit">
                                                <img src="/assets/images/svg/edit.svg" key=${index} />
                                            </div>
                                            <div class="arrow edit quantitySave hide">
                                                <img src="/assets/images/svg/save.svg" key=${index} />
                                            </div>
                                        ` : ""}
                                    </div>
                                </td>
                            </tr>
                            <tr class="info_row key${index}">
                                <td class="info_data" colspan="1">€ ${item["price"] && item["price"] !== "null" ? item["price"] : "-"}</td>
                                <td class="info_data" editable colspan="1"><input value=${item["quantity"] || item["units"]} type="text" size="4" maxlength="4" autocomplete="off" disabled/></td>
                                <td class="info_data" colspan="1">${item["free_goods"] && item["free_goods"] !== "null" ? item["free_goods"] : "-"}</td>
                                <td class="info_data" colspan="1">${item["discount"] && item["discount"] !== "null" ? (item["discount"] + '%') : "-"}</td>
                                <td class="info_data" colspan="1">${item["payterm"] && item["payterm"] !== "null" ? (item["payterm"] + 'D') : "-"}</td>
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
                        if (!(/^[0-9][0-9]*$/.test(Number(getElementValue)))) {
                            $(getElement).children().val(0);
                            $(getElement).children().change();
                            $(getElement).removeClass("active");
                            $(getElement).children().attr("disabled", true);
                            return;
                        }
                        $(getElement).removeClass("active");
                        $(getElement).children().attr("disabled", true);
                        let value = $(getElement).children().val();
                        let siblingElementDataSku = $(this).siblings(".name").attr("skudata");
                        let tableElement = $(this).parent().parent().parent().parent().parent();
                        let currentElementDataSku = $(tableElement).attr("skudata");

                        let parseData = getParsedData();
                        let shouldContinueOrder = false;
                        let prevEditedSku = parseData["previous_orders"]["orders"].filter(prorder => {
                            if (prorder["order_no"] === previousSelectedOrderId && prorder["ordered_date"] === previousSelectedSkuDate) {
                                prorder["product_details"].map(pd => {
                                    if (pd["sku"] === $(this).siblings(".name").attr("skudata")) {
                                        if (Number(value) > pd["maxLimit"]) {
                                            showSnackbar(true, locale["snackbars"]["exceedMaxLimit"]);
                                            $(getElement).children().val(value)
                                            $(getElement).children().change()
                                            return;
                                        }
                                        pd["units"] = value;
                                        shouldContinueOrder = true;
                                    }
                                })
                                return prorder;
                            }
                        });

                        if (shouldContinueOrder) {
                            window.updateCartData = {
                                ...window.updateCartData,
                                [currentElementDataSku]: {
                                    ...window.updateCartData[currentElementDataSku],
                                    [siblingElementDataSku]: value
                                }
                            };
                            if (getElementValue !== getElementPrevValue) {
                                ToBot("update-order-data", prevEditedSku[0]);
                            }
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
                let previousSelectedOrderId = $(this).attr("orderid");
                let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                let childElement = $(this).parent().children(".order_cart");
                let additionalDetails = parsedCurrentElementData["product_details"];
                let getTableBodyChildElement = $(childElement).children().children().children("#order_card_tablebody");
                if (childElement.hasClass("hide")) {
                    childElement.removeClass("hide");
                    console.log($(this));
                    $(this).removeClass("close");
                    getTableBodyChildElement.empty();
                    additionalDetails && additionalDetails.map((item, index) => {
                        getTableBodyChildElement.append(`
                            <tr>
                                <td colspan="5">
                                    <div class="title">
                                        <div class="name" skudata=${item["sku"]} date="${orderData["ordered_date"]}" orderid=${orderData["order_no"]}>${item["name"]}</div>
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
                                <td class="info_data" colspan="1">€ ${item["price"]}</td>
                                <td class="info_data editable" colspan="1"><input value=${item["units"]} type="text" size="4" maxlength="4" autocomplete="off"/></td>
                                <td class="info_data" colspan="1">+${item["free_goods"]}</td>
                                <td class="info_data" colspan="2">${item["discount"]}%</td>
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
                        if (!(/^[0-9][0-9]*$/.test(Number(getElementValue)))) {
                            $(getElement).children().val(0);
                            $(getElement).children().change();
                            $(getElement).removeClass("active");
                            $(getElement).children().attr("disabled", true);
                            return;
                        }
                        $(getElement).removeClass("active");
                        $(getElement).children().attr("disabled", true);
                        let value = $(getElement).children().val();
                        let siblingElementDataSku = $(this).siblings(".name").attr("skudata");
                        let tableElement = $(this).parent().parent().parent().parent().parent();
                        let currentElementDataSku = $(tableElement).attr("skudata");
                        let parseData = getParsedData();
                        let prevEditedSku = parseData["previous_orders"]["orders"].filter(prorder => {
                            if (prorder["order_no"] === previousSelectedOrderId && prorder["ordered_date"] === previousSelectedSkuDate) {
                                prorder["product_details"].map(pd => {
                                    if (pd["sku"] === $(this).siblings(".name").attr("skudata")) {
                                        if (Number(value) > pd["maxLimit"]) {
                                            showSnackbar(true, locale["snackbars"]["exceedMaxLimit"]);
                                            $(getElement).children().val(value)
                                            $(getElement).children().change()
                                            return;
                                        }
                                        pd["units"] = value;
                                    }
                                })
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

                        if (getElementValue !== getElementPrevValue) {
                            ToBot("update-order-data", prevEditedSku[0]);
                        }
                    });
                } else {
                    childElement.addClass("hide");
                    $(this).addClass("close");
                }
            })
        });

        $("#backbtnOh").click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
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
            siblingElement.siblings(".card_click").children(".title.outer").removeClass("hide");
            siblingElement.siblings(".card_click").css("pointer-events", "unset");
        });
    } else {
        $("#content_box").append(`<div class='empty_screen_msg'>${locale["labels"]["emptyOrder"]}`);
        $("#last_order_history").append(`<div class="progress_plan" id="progress_plan_main"></div>`);
    }
}
