function showTabs(data) {
    const locale = data["locale"];
    const prevOrderLength = data?.["previous_orders"]?.["orders"].length;
    return `
        <div class="tabs">
            <div class="tab-2 active">
                <div class="block active ${prevOrderLength ? '' : 'hide'}">
                    <input id="tab21" name="tabs-two" type="radio" checked="checked">
                    <label for="tab21" id="label">${locale["labels"]["lastOrder"]}</label>
                </div>
                <div class="tab_body active">
                    <div class="order_history bottom">
                        <div class="upper_history_container last_order" id="last_order_history"></div>
                    </div>
                </div>
            </div>
            <div class="tab-2">
                <div class="block ${prevOrderLength ? '' : 'hide'}">
                    <input id="tab22" name="tabs-two" type="radio">
                    <label for="tab22" id="label">${locale["labels"]["orderHistory"]}</label>
                </div>
                <div class="tab_body">
                    <div class="order_history bottom">
                        <div class="upper_history_container order_history_container" id="order_history_container"></div>
                        <div class="btn_wrapper">
                            <div class="btnbox">
                                <button class="btn solid inverted" id="backbtnOh">${locale["buttons"]["back"]}</button>
                                <div id="download_file" class="btn outline" href=${data["download_url"]}>
                                    ${locale["labels"]["downloadOrderHistory"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}