function showSkuLevelDetails(data) {
    let item = "";
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">${data["title"]}</div>
                <div class="icon"><i class="fa fa-shopping-cart"></i></div>
            </div>
            <div class="sub_detail_wrapper">
                <div class="sub_detail">Start: ${data["start_date"]} <span></span> End: ${data["last_date"]}</div>
                <div class="sub_detail highlight">Additional Discount</div>
            </div>
            ${loadProgressCards(data, true)}
            <div class="new_orders"></div>

            <div class="place_order">
                <button class="btn outline" id="addanotheraccount" data=${encodeURIComponent(JSON.stringify(data))}>${data["cta"]}</button>
            </div>
            
            <div class="accordion">
                <div class="accordion-item inverted">
                    <div class="accordion-item-header account_detail">Associated Accounts</div>
                    <div class="accordion-item-body parent">
                        <div class="accordion-item-body-content">
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">Est. Price</td>
                                        <td class="info_data" colspan="1">Units</td>
                                        <td class="info_data" colspan="1">Free Goods</td>
                                        <td class="info_data" colspan="1">On Invoice Discount</td>
                                        <td class="info_data" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="5">
                                            <div class="title">
                                                <div class="name">weqwqew</div>
                                                <div class="arrow"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">£ s</td>
                                        <td class="info_data" colspan="1">as</td>
                                        <td class="info_data" colspan="1">+qe</td>
                                        <td class="info_data" colspan="1">3%</td>
                                        <td class="info_data" colspan="1">sad D</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div class="title">
                                                <div class="name">sdsa</div>
                                                <div class="arrow"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">£ s</td>
                                        <td class="info_data" colspan="1">as</td>
                                        <td class="info_data" colspan="1">+qe</td>
                                        <td class="info_data" colspan="1">3%</td>
                                        <td class="info_data" colspan="1">sad D</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
            <div class="account_list">
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
            </div>
        </div>
    `);

    $(".accordion-item-header.account_detail").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody =  $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });


    $(".account_list .item").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let currentElementData = $(this).attr("data");
        $(".account_select").addClass("hide");

        addnewOrder(currentElementData);
    });

    $("#addanotheraccount").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let currentElementData = $(this).attr("data");
        let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        $(".account_select").removeClass("hide");
    });
    
}

function showBrandLevelDetails(data) {
    console.log(data)
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="order_details_container choosebrands">
            <div class="menu_header">
                <div class="label">${data["products"][0]["name"]}</div>
                <div class="icon"><i class="fa fa-shopping-cart"></i></div>
            </div>
            <div class="sub_detail_wrapper">
                <div class="sub_detail"><strong>Start:</strong> ${data["start_date"]} <span></span> <strong>End:</strong> ${data["last_date"]}</div>
                <div class="sub_detail highlight">Additional Discount</div>
            </div>
            ${loadProgressCards(data, true, true)}
            <div class="new_orders"></div>

            <div class="place_order">
                <button class="btn outline" id="addanotheraccount" data=${encodeURIComponent(JSON.stringify(data))}>${data["cta"]}</button>
            </div>
            
            <div class="accordion">
                <div class="accordion-item inverted">
                    <div class="accordion-item-header account_detail">Associated Accounts</div>
                    <div class="accordion-item-body parent">
                        <div class="accordion-item-body-content">
                            <div class="date-picker-value pointernone">
                                ${showDatePicker()}
                            </div>
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">Est. Price</td>
                                        <td class="info_data" colspan="1">Units</td>
                                        <td class="info_data" colspan="1">Free Goods</td>
                                        <td class="info_data" colspan="1">On Invoice Discount</td>
                                        <td class="info_data" colspan="1">Pay Term</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="5">
                                            <div class="title">
                                                <div class="name">weqwqew</div>
                                                <div class="arrow"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">£ s</td>
                                        <td class="info_data" colspan="1">as</td>
                                        <td class="info_data" colspan="1">+qe</td>
                                        <td class="info_data" colspan="1">3%</td>
                                        <td class="info_data" colspan="1">sad D</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div class="title">
                                                <div class="name">sdsa</div>
                                                <div class="arrow"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="info_row">
                                        <td class="info_data" colspan="1">£ s</td>
                                        <td class="info_data" colspan="1">as</td>
                                        <td class="info_data" colspan="1">+qe</td>
                                        <td class="info_data" colspan="1">3%</td>
                                        <td class="info_data" colspan="1">sad D</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
            <div class="account_list">
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
                <div class="item" data="Wholesaler A - Account: A0006">Wholesaler A - Account: A0006</div>
            </div>
        </div>
    `);

    $("#back").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        callPlaceOrder();
    });

    $("#continue").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $(".accordion-item-header.account_detail").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody =  $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });


    $(".account_list .item").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let currentElementData = $(this).attr("data");
        $(".account_select").addClass("hide");

        addnewOrder(currentElementData);
    });

    $("#addanotheraccount").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let currentElementData = $(this).attr("data");
        let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        $(".account_select").removeClass("hide");
    });

    $('input[id$=tbDate]').datepicker({
        dateFormat: 'M dd, y',
        minDate: 0
    });
    $('input[id$=tbDate]').datepicker("setDate", "today");
    
}

function addnewOrder(data) {
    $(".new_orders").prepend(`
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header orderdetail">Associated Accounts</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content">
                        <div class="date-picker-value">
                            ${showDatePicker()}
                        </div>
                        <table class="accordian table">
                            <tbody>
                                <tr class="info_row">
                                    <td class="info_data">
                                        Augmentin 125mcg Tabs
                                    </td>
                                    <td class="info_data">
                                        <div class="counter__wrapper">
                                            <div class="counter__container">
                                                <div class="counter__box__container">
                                                    <div class="counter__minus" id="minus" product="${encodeURIComponent(JSON.stringify({}))}">
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
                                            
                                                <input id="counter_input_1" class="counter__input home" type="text" value="1" size="2" maxlength="2" autocomplete="off" previous-value="1" />
                                                <div class="counter__box__container">
                                                    <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify({}))}">
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
                                <tr class="info_row">
                                    <td class="info_data">
                                        Augmentin 125/50mcg Syrup
                                    </td>
                                    <td class="info_data">
                                        <div class="counter__wrapper">
                                            <div class="counter__container">
                                                <div class="counter__box__container">
                                                    <div class="counter__minus" id="minus" product="${encodeURIComponent(JSON.stringify({}))}">
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
                                            
                                                <input id="counter_input_1" class="counter__input home" type="text" value="1" size="2" maxlength="2" autocomplete="off" previous-value="1" />
                                                <div class="counter__box__container">
                                                    <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify({}))}">
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
                                <tr class="info_row">
                                    <td class="info_data">
                                        Augmentin 125mcg Tabs
                                    </td>
                                    <td class="info_data">
                                        <div class="counter__wrapper">
                                            <div class="counter__container">
                                                <div class="counter__box__container">
                                                    <div class="counter__minus" id="minus" product="${encodeURIComponent(JSON.stringify({}))}">
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
                                            
                                                <input id="counter_input_1" class="counter__input home" type="text" value="1" size="2" maxlength="2" autocomplete="off" previous-value="1" />
                                                <div class="counter__box__container">
                                                    <div class="counter__plus" id="plus" product="${encodeURIComponent(JSON.stringify({}))}">
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `);

    $(".accordion-item-header.orderdetail").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let accordionItemBody =  $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        } else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    });

    $('input[id$=tbDate]').datepicker({
        dateFormat: 'M dd, y',
        minDate: 0
    });
    $('input[id$=tbDate]').datepicker("setDate", "today");
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

function loadPlanProgress(data, basicProgress) {
    console.log("load", $("#progress_plan_main"))
    $("#progress_plan_main").prepend(`
        <div class="title">
            <div class="name">${data["title"]}</div>
            <div class="arrow calendar">
                <span>
                    <img src="/assets/images/svg/calendar.svg" />
                </span>
                Last Date: ${data["last_date"]}
            </div>
        </div>
        <div id="plan_items"></div>
    `);
    data && data["products"] && data["products"].map(item => {
        $("#plan_items").append(getProductsProgress(item, false, false, basicProgress));
    });
    
}

function loadBrandSelectionUI(data) {
    $(".header").removeClass('hide');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="choosebrands">
            <div class="menu_header">
                <div class="label">${data["title"]}</div>
                <div class="icon">
                    <img src="/assets/images/svg/basket.svg" />
                    <div class="count_wrapper">
                        50
                    </div>
                </div>
            </div>
            <div class="sub_detail"><strong>Start:</strong> ${data["start_date"]} <span></span> <strong>End:</strong> ${data["last_date"]}</div>
            ${loadProgressCards(data)}
        </div> 
    `);

    $(".progressbar_wrapper.addproduct").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let currentElementData = $(this).attr("data");
        let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
        let products = data["products"];
        let filteredProducts = products.filter(product => {
            return product["name"] === parsedCurrentElementData["name"];
        })
        data["products"] = filteredProducts;
        !data["isSku"] ? showSkuLevelDetails(data) : showBrandLevelDetails(data);
    });

}


function loadProgressCards(data, detailed, hideAdd) {
    let progresscards = data["products"].map(item => {
        return `
            <div class="progress_card ${detailed ? "transparent" : ""}">
                <div class="progress_plan">
                    <div class="grouped">
                        ${getProductsProgress(item, detailed, hideAdd)}
                        <div class="quantity_inc">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    return progresscards;
}

function getProgressHeaderFooterLabels(data, sourceContainer) {
    return `
        <div class="detail_bar">
            <div class="main">
                <div class="sub-block" style="border-color: "#fff">10%</div>
                <div class="sub-block" style="border-color: "#fff">11%</div>
                <div class="sub-block" style="border-color: "#fff">12%</div>
                <div class="sub-block" style="border-color: "#fff">13%</div>
                <div class="sub-block" style="border-color: "#fff">14%</div>
            </div>
            ${sourceContainer === "header" ? '<div class="progress_header_label">Disc.</div>' : ""}
            ${sourceContainer === "footer" ? '<div class="progress_footer_label">Value</div>' : ""}
        </div>
    `;
}

function getProductsProgress(item, detailed, hideAdd, basicProgress) {
    let progressPercent = Math.ceil((item["purchased"]/item["max_limit"]) * 100);
    let addBtn = `
        ${
            basicProgress ? 
            "" 
            : 
            `
                <label style="font-size: 12px;">125</label>
                <div class="progressbar_wrapper addproduct" data=${encodeURIComponent(JSON.stringify(item))}>
                    <div class="main reset">
                        <img src="/assets/images/png/Plus.png" class="icon_add"/>
                    </div>
                </div>
            `
        }
    `;
    
    return `
        <div class="progressbar flex">
            <div class="wrapper_brand_progress" style="width: ${detailed ? '5' : '0'}%;"></div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '75' : basicProgress ? '100' : '90'}%;">
                <label class="${detailed ? "abs" : ""}">${!hideAdd ? item["name"] : ""}</label>
                ${detailed ? getProgressHeaderFooterLabels(item, "header") : ""}
                <div class="progressbar_wrapper">
                    <div class="main">
                        <div class="sub-block" style="border-color: ${progressPercent < 20 ? "#959595" : "#fff"}"></div>
                        <div class="sub-block" style="border-color: ${progressPercent < 40 ? "#959595" : "#fff"}"></div>
                        <div class="sub-block" style="border-color: ${progressPercent < 60 ? "#959595" : "#fff"}"></div>
                        <div class="sub-block" style="border-color: ${progressPercent < 80 ? "#959595" : "#fff"}"></div>
                        <div class="sub-block" style="border-color: ${progressPercent < 100 ? "#959595" : "#fff"}"></div>
                    </div>
                    <div class="progressbar_ratio" style="width:${progressPercent}%;">
                        <div class="ratio_wrapper">
                            <div class="ratio">${item["purchased"]}</div>
                        </div>
                    </div>
                </div>
                ${detailed ? getProgressHeaderFooterLabels(item, "footer") : ""}
            </div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '10' : basicProgress ? '0' : '5'}%; padding-right: ${hideAdd ? "0px" : basicProgress ? '0px' : "12px"}; font-size: 12px;">
                ${hideAdd ? "<div><div style='margin-top: -20px;'>On Invoice</div><div style='margin-top: 10px;'><strong>$ 125</strong></div></div>" : addBtn}
            </div>
            
        </div>
    `;
}

function loadEditProfile() {
    loadProfileOptions();
    $("#content_box").empty();
    ToBot("fetch-user-details", { ...userData });
}

function loadUserProfile(data) {
    let profile_details = data["profile_details"];
    let associated_accounts = data["associated_accounts"];
    let notification = data["notification"];

    $("#content_box").append(`
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header parent">Profile Details</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content">
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header parent">Associated Accounts</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content">
                        
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-item-header parent">Notification</div>
                <div class="accordion-item-body parent">
                    <div class="accordion-item-body-content">
                        
                    </div>
                </div>
            </div>
        </div>
    `);
    
    $(".accordion-item-header.parent").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        let scrollHeightAccordion = "";
        let textContent = $(this).text();
        let accordionItemBody =  $(this).siblings(".accordion-item-body");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            if(textContent === "Profile Details") {
                let bodyContentNode = $(accordionItemBody).children(".accordion-item-body-content");
                bodyContentNode.empty();
                bodyContentNode.append(`
                    <div class="block">
                        <div class="label">First Name</div>
                        <div class="info">${profile_details["firstName"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">Last Name</div>
                        <div class="info">${profile_details["lastName"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">Mobile Number</div>
                        <div class="info">+${profile_details["countryDialCode"]} ${profile_details["phone"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">Email</div>
                        <div class="info">${profile_details["email"]}</div>
                    </div>
                `);
            }
            if(textContent === "Associated Accounts") {
                let bodyContentNode = $(accordionItemBody).children(".accordion-item-body-content");
                bodyContentNode.empty();
                bodyContentNode.append(`
                    <div class="accordian_upperwrapper"></div>
                    <div class="place_order">
                        <button class="btn outline">
                            <span class="icon">
                                <svg fill="none" height="14" viewBox="0 0 18 14" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="#f36633"><path d="m4.32952 6.79547c-.03747-.22227-.17111-.30138-.26229-.40938-.95176-1.13396-1.2153-2.41359-.72693-3.80247.49961-1.41148 1.51881-2.226479 2.98891-2.5228403 1.66495-.3352907 3.94939.7170443 4.38029 3.1469603.3473 1.97407-.84806 3.85145-2.85898 4.37008-.49961.12557-1.03045.11302-1.54754.16702-2.92646.3064-4.71131 2.81796-4.82248 4.74176.2011.157.43966.0779.65824.0791 2.49804.0067 4.99609.0067 7.49413 0 .20737-.017.41613-.0004.61823.049.326.1055.4909.3077.4996.6342.0128.1469-.0247.2938-.1062.4164s-.2022.2136-.3422.2579c-.1777.0593-.36513.0836-.55202.0716h-8.74316c-.103968.0069-.208281.0069-.312252 0-.479625-.0653-.68821142-.2976-.69445653-.7936-.01458937-1.3026.35909553-2.5798 1.07290853-3.66689.6926-1.10277 1.68288-1.98473 2.85527-2.54294.12865-.06278.25605-.12809.40093-.1959zm2.62295-.51863c.64019-.00363 1.25308-.26119 1.70542-.71668s.70757-1.07209.71019-1.71575c.00344-.48542-.13691-.96089-.40319-1.36583-.26627-.40494-.64641-.72102-1.092-.90798-.44558-.18696-.93643-.23633-1.41002-.14183s-.90848.3286-1.24927.67248-.57205.78196-.66433 1.25845c-.09227.47649-.04138.96981.14619 1.41711.18757.44731.50333.82836.90706 1.0946s.87714.40563 1.35994.40041z"/><path d="m12.7785 9.52553c0-.82265-.0099-1.59857 0-2.37081-.0084-.16614.0468-.32925.1545-.45638.1077-.12714.2599-.20882.4257-.22855.1533-.0234.3101.00569.4446.08253.1346.07684.239.19688.2962.34048.0366.13745.0516.27974.0444.42178v1.6576c0 .15986-.0358.32586.0642.55335h1.9185c.2047-.01509.4105.00192.6099.05042.1421.03076.2691.10977.3592.2235.09.11373.1376.25515.1346.39995.0111.348-.1518.5595-.4938.6788-.1787.0469-.364.0635-.5482.0492-.6568 0-1.3123 0-2.037 0v1.7916c0 .1844.0074.3689 0 .5521-.0235.4341-.2951.7243-.6728.7292-.3778.0049-.6753-.2877-.6877-.712-.016-.573 0-1.146-.0074-1.7215 0-.1992.0519-.407-.0667-.6394h-2.0148c-.1845.0113-.3696-.0095-.5469-.0615-.139-.0401-.26024-.1258-.34407-.2432-.08384-.1175-.1253-.2597-.11765-.4036 0-.31237.16296-.52387.47162-.637.1977-.05555.4038-.07554.6086-.05903.6519.00123 1.3037.00246 2.005.00246z"/></g></svg>
                            </span>
                            Add Account
                        </button>
                    </div>
                `);
                associated_accounts["accounts"].map(account => {
                    $(".accordian_upperwrapper").append(`
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class="accordion-item-header inner" data=${encodeURIComponent(JSON.stringify(account))}>${account["name"]}</div>
                                <div class="accordion-item-body inner">
                                    <div class="accordion-item-body-content inner">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);
                });
                $(".accordion-item-header.inner").click(function(e) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    let scrollHeightAccordionInner = "";
                    let currentElementData = $(this).attr("data");
                    let parsedCurrentElementData = JSON.parse(decodeURIComponent(currentElementData));
                    let accordionItemBodyInner =  $(this).siblings(".accordion-item-body.inner");
                    if (!$(this).hasClass("active")) {
                        $(this).addClass("active");
                        let bodyContentNodeInner = $(accordionItemBodyInner).children(".accordion-item-body-content.inner");
                        bodyContentNodeInner.empty();
                        bodyContentNodeInner.append(`
                            <table class="accordian table">
                                <thead>
                                    <tr class="info_row">
                                        <td class="info_data title" colspan="4">Account <br/>Number</td>
                                        <td class="info_data title" colspan="2">Legal <br/>ID</td>
                                        <td class="info_data title" colspan="1">Attach <br/>Invoice</td>
                                    </tr>
                                </thead>
                                <tbody class="accordian_account_detailed">
                                    
                                </tbody>
                            </table>
                        `);
                        parsedCurrentElementData["account_data"].map(accountDetails => {
                            let classValue = "success";
                            if (accountDetails["status"] === "Active") {
                                classValue = "success";
                            }
                            if (accountDetails["status"] === "In-Active") {
                                classValue = "failed";
                            }
                            if (accountDetails["status"] === "Pending Verification") {
                                classValue = "warning";
                            }
                            $(".accordian_account_detailed").append(`
                                <tr class="info_row">
                                    <td class="info_data" colspan="4">
                                        <span class="inline_block top">
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.2494 3.75583H1.13036C0.866163 3.75583 0.601781 3.75695 0.337399 3.75583C0.119288 3.75471 0.00286308 3.63829 0.00155703 3.42129C0.000250978 3.23789 0.00155703 3.05429 0.00155703 2.87089C0.00155703 2.61527 0.1094 2.50575 0.36352 2.50557C1.31507 2.50557 2.26662 2.50613 3.21818 2.50725C3.3027 2.50725 3.34244 2.48392 3.3749 2.40425C3.58331 1.89508 3.78537 1.38311 4.01356 0.882704C4.2619 0.337521 4.7039 0.0272405 5.30095 0.015486C6.34841 -0.00516201 7.39623 -0.00516201 8.44443 0.015486C9.02283 0.026121 9.46259 0.319609 9.70981 0.842963C9.95236 1.35661 10.1576 1.8878 10.3748 2.41377C10.4048 2.48654 10.4433 2.50706 10.5194 2.50706C11.4523 2.5047 12.3852 2.5042 13.3181 2.50557C13.3554 2.50557 13.3927 2.50557 13.43 2.50557C13.6179 2.51266 13.7334 2.62143 13.7382 2.80913C13.7438 3.02052 13.7435 3.2321 13.7382 3.4435C13.7339 3.64108 13.6181 3.75303 13.419 3.75508C13.1516 3.75788 12.8841 3.75508 12.6167 3.75508C12.4913 3.75508 12.4911 3.75508 12.4911 3.88289C12.4911 6.70943 12.4911 9.53598 12.4911 12.3625C12.4911 12.636 12.4967 12.9101 12.4833 13.1835C12.4566 13.7193 12.2579 14.186 11.8842 14.5737C11.6118 14.8561 11.2808 14.9972 10.884 14.9963C9.38815 14.9927 7.89253 14.9948 6.39692 14.9948C5.24013 14.9948 4.08334 14.9849 2.92655 14.9989C2.34555 15.006 1.92761 14.7513 1.61192 14.2899C1.36153 13.9244 1.25145 13.5135 1.25107 13.0747C1.24871 11.1313 1.24821 9.18789 1.24958 7.24448V3.75546L1.2494 3.75583ZM2.50134 3.75583V12.9168C2.50134 12.9635 2.50134 13.0101 2.50339 13.0566C2.51262 13.2468 2.56801 13.432 2.66478 13.596C2.72374 13.6958 2.79931 13.7453 2.92804 13.7453C5.55831 13.7412 8.18851 13.7412 10.8186 13.7453C10.9433 13.7453 11.0153 13.6967 11.0746 13.6003C11.1995 13.3977 11.2409 13.176 11.2407 12.9409C11.2396 9.92207 11.2396 6.90329 11.2407 3.88457C11.2407 3.75583 11.2407 3.75564 11.1075 3.75564H2.50209L2.50134 3.75583ZM4.69886 2.4953H9.04615C9.03701 2.4675 9.03216 2.44959 9.02525 2.43261C8.88507 2.09043 8.74476 1.74837 8.60433 1.40643C8.56123 1.30213 8.47727 1.25997 8.36738 1.25997C7.37291 1.25997 6.37838 1.25997 5.38379 1.25997C5.26401 1.25997 5.18621 1.31594 5.14124 1.42583C5.00224 1.76168 4.86137 2.0964 4.72051 2.43168C4.71155 2.4509 4.7067 2.47086 4.69886 2.4953Z" fill="#F36633"/>
                                            </svg>
                                        </span>
                                        <span class="inline_block">
                                            <div>${accountDetails["account_no"]}</div>
                                            <div class=${classValue}>${accountDetails["status"]}</div>
                                        </span>
                                    </td>
                                    <td class="info_data" colspan="2">${accountDetails["legal_id"]}</td>
                                    <td class="info_data" colspan="1">
                                        <span class="upload_icon">
                                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.96977 9.82795L8.94682 5.85017C9.09175 5.70227 9.32915 5.69984 9.47705 5.84482C9.625 5.98974 9.62738 6.22714 9.48245 6.37504C9.48067 6.37687 9.47888 6.37866 9.47705 6.3804L5.50005 10.3582C5.20781 10.6513 5.20781 11.1257 5.50005 11.4188C5.79672 11.7022 6.26387 11.7022 6.56059 11.4188L12.3943 5.58503C13.2729 4.70627 13.2728 3.28161 12.394 2.40303C11.5152 1.52444 10.0905 1.52458 9.21196 2.40339L2.84795 8.76741C1.38365 10.2319 1.38379 12.6062 2.84831 14.0705C4.31284 15.5348 6.68712 15.5347 8.15141 14.0701L12.6595 9.56282C12.8044 9.41491 13.0418 9.41253 13.1897 9.55746C13.3376 9.70244 13.34 9.93983 13.1951 10.0877C13.1933 10.0895 13.1915 10.0913 13.1897 10.0931L8.68169 14.6004C7.8399 15.4474 6.69417 15.9222 5.50005 15.9188C3.01476 15.9188 1 13.9041 1 11.4188C1 10.2255 1.47397 9.08102 2.31767 8.23713L8.68169 1.87312C9.85631 0.704633 11.7558 0.709622 12.9242 1.8842C14.0883 3.05433 14.0884 4.94499 12.9246 6.11531L7.09087 11.949C6.49733 12.5156 5.56331 12.5156 4.96977 11.949C4.38406 11.3636 4.38434 10.4137 4.96977 9.82795ZM4.96977 9.82795V9.82795Z" stroke="#F36633"/>
                                            </svg>
                                        </span>
                                    </td>
                                </tr>
                            `);
                        });
                        scrollHeightAccordionInner = accordionItemBodyInner.prop('scrollHeight') + "px";
                        accordionItemBodyInner.css("maxHeight", scrollHeightAccordionInner);
                        accordionItemBody.css("maxHeight", `${accordionItemBody.prop('scrollHeight') + accordionItemBodyInner.prop('scrollHeight')}px`);
                    } else {
                        $(this).removeClass("active");
                        accordionItemBodyInner.css("maxHeight", 0);
                    }
                });
            }
            if(textContent === "Notification") {
                let bodyContentNode = $(accordionItemBody).children(".accordion-item-body-content");
                bodyContentNode.empty();
                bodyContentNode.append(`
                    <div class="block">
                        <div class="label">First Name</div>
                        <div class="info">${profile_details["firstName"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">Last Name</div>
                        <div class="info">${profile_details["lastName"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">Mobile Number</div>
                        <div class="info">+${profile_details["countryDialCode"]} ${profile_details["phone"]}</div>
                    </div>
                    <div class="block">
                        <div class="label">Email</div>
                        <div class="info">${profile_details["email"]}</div>
                    </div>
                `);
            }
            scrollHeightAccordion = accordionItemBody.prop('scrollHeight') + "px";
            accordionItemBody.css("maxHeight", scrollHeightAccordion);
        }
        else {
            $(this).removeClass("active");
            accordionItemBody.css("maxHeight", "0");
        }
    })
}

function loadProfileOptions() {
    let elementIsActive = $("#profile_setting_card").hasClass("active");
    if (elementIsActive) {
        $("#profile_setting_card").removeClass("active");
        $("#profile_setting_card").empty();
    } else {
        $("#profile_setting_card").addClass("active");
        $("#profile_setting_card").append(`
            <div class="order_card">
                <div class="title">
                    <div class="name" onclick="loadEditProfile()">Profile Settings</div>
                </div>
                <div class="info cta">Logout</div>
            </div>
        `);
    }
}

function showHeader(data) {
    $(".header").removeClass('hide');

    function showUserCreds(user) {
        return `
            <div class="profile_section" onclick="loadProfileOptions()">
                <div class="block">
                    <div class="name">${user.name}</div>
                    <div class="icon"><i class="fa fa-angle-down"></i></div>
                </div>
                <div class="email">${user.email}</div>
            </div>
        `;
    }
    $(".header").append(`
        <div class="header_icon_wrapper">
            <div class="header_bar">
                <div class="svg_icon_wrapper">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.0178 18.0354C17.0178 14.509 17.0695 10.9858 17.0037 7.4578C16.9348 3.76535 19.7186 1.87134 22.5165 1.94184C27.2649 2.05933 32.0195 1.9716 36.7725 1.97317C39.9668 1.97317 42.0378 4.06143 42.0394 7.27764C42.0394 12.0818 42.0394 16.8861 42.0394 21.6903C42.0394 24.8955 39.9824 26.9759 36.7552 26.99C32.6304 27.0088 28.504 26.9806 24.3792 27.0151C23.899 27.0332 23.434 27.1875 23.0382 27.46C21.7755 28.3389 20.563 29.2882 19.3332 30.2141C18.8444 30.5822 18.351 30.9551 17.6993 30.6261C17.0476 30.2971 17.0178 29.6971 17.0178 29.0767C17.0199 25.3984 17.0199 21.7179 17.0178 18.0354ZM19.3677 27.2423C20.3703 26.4903 21.2178 25.8871 22.0309 25.2354C22.5384 24.8245 23.1784 24.6128 23.8309 24.6401C28.009 24.6589 32.1871 24.6495 36.3636 24.648C38.7714 24.648 39.6957 23.7331 39.6957 21.3581V7.56433C39.6957 5.25674 38.7699 4.31992 36.4889 4.31992H22.7029C20.2982 4.31992 19.3739 5.23168 19.3724 7.60976C19.3724 13.826 19.3724 20.0401 19.3724 26.2522L19.3677 27.2423Z"
                            fill="#F36633" />
                        <path
                            d="M13.2786 32.0032C15.1413 33.2142 16.4024 34.8826 16.7141 37.0915C16.9005 38.4231 16.8567 39.8001 16.7924 41.1521C16.7595 41.8508 16.1564 42.092 15.4765 42.092C12.8916 42.0842 10.3068 42.092 7.72189 42.092C6.26026 42.092 4.79707 42.092 3.33544 42.092C2.37042 42.092 1.89888 41.6659 1.94274 40.7213C2.01324 39.1907 1.98974 37.6257 2.32342 36.1452C2.72447 34.3593 3.94328 33.023 5.55843 31.9907C3.89002 30.5259 3.02683 28.7196 3.20855 26.5233C3.32355 24.9674 4.04473 23.5188 5.21692 22.4893C6.37709 21.432 7.89469 20.8534 9.46427 20.87C11.0339 20.8865 12.5389 21.497 13.6765 22.5786C16.3256 25.1259 16.1924 28.4267 13.2786 32.0032ZM14.4394 39.7014C14.7057 37.4158 14.2154 35.4497 12.2196 34.1463C10.3945 32.9541 8.45975 32.9353 6.62997 34.1102C4.60281 35.4074 4.07017 37.3907 4.32239 39.7014H14.4394ZM13.23 27.1468C13.2417 26.639 13.1522 26.134 12.9668 25.6611C12.7813 25.1883 12.5037 24.7571 12.15 24.3926C11.7963 24.0281 11.3736 23.7376 10.9065 23.5381C10.4395 23.3385 9.93737 23.2339 9.42948 23.2303C8.4167 23.2306 7.44379 23.625 6.71662 24.3299C5.98946 25.0348 5.5651 25.9951 5.53336 27.0073C5.5337 28.0337 5.93355 29.0195 6.64823 29.7562C7.3629 30.4928 8.33626 30.9222 9.36211 30.9536C11.4347 30.9724 13.2065 29.2319 13.23 27.1468Z"
                            fill="#F36633" />
                        <path
                            d="M28.3812 15.7253C28.3812 14.2762 28.4987 14.1321 29.9008 13.883C30.3645 13.7904 30.7805 13.5371 31.0754 13.1676C31.3704 12.7981 31.5253 12.3363 31.5128 11.8637C31.4767 11.3771 31.267 10.9197 30.922 10.5746C30.5769 10.2296 30.1195 10.0199 29.6329 9.98375C29.1604 9.96753 28.6975 10.1203 28.3274 10.4146C27.9573 10.7089 27.7042 11.1254 27.6136 11.5895C27.5836 11.8478 27.5339 12.1034 27.4648 12.354C27.2517 12.9681 26.7708 13.1906 26.1661 13.0872C25.5614 12.9838 25.2794 12.6015 25.2387 12.0015C25.0742 9.52317 27.5744 7.26258 30.0465 7.66049C32.1457 7.99888 33.5572 9.44641 33.8424 11.5488C34.0789 13.2955 32.987 15.0924 31.2042 15.9352C30.9896 16.0411 30.8196 16.2199 30.7248 16.4397C30.4209 17.2809 30.0355 17.6099 29.3337 17.4893C28.5614 17.3577 28.3515 16.8109 28.3765 16.1107C28.3859 15.9853 28.3812 15.8553 28.3812 15.7253Z"
                            fill="#F36633" />
                        <path
                            d="M30.716 20.1205C30.7147 20.4218 30.5975 20.7111 30.3887 20.9284C30.1798 21.1457 29.8954 21.2743 29.5943 21.2876C29.4391 21.3033 29.2823 21.2856 29.1345 21.2359C28.9866 21.1861 28.8511 21.1054 28.7369 20.9991C28.6227 20.8928 28.5325 20.7633 28.4724 20.6194C28.4122 20.4754 28.3835 20.3203 28.3881 20.1643C28.3774 20.0149 28.3974 19.8649 28.4469 19.7235C28.4964 19.5822 28.5743 19.4524 28.6759 19.3423C28.7775 19.2322 28.9005 19.1441 29.0375 19.0834C29.1744 19.0227 29.3224 18.9907 29.4721 18.9894C29.7867 18.9758 30.094 19.087 30.327 19.2988C30.5599 19.5107 30.6998 19.806 30.716 20.1205Z"
                            fill="#F36633" />
                    </svg>
                </div>
                ${data?.isLoggedIn ? showUserCreds(data) : ""}
            </div>
        </div>
    `);
}

function showDatePicker() {
    return `
        <div class="flex calendar-picker">
            <img class="picker" src="/assets/images/svg/calendar.svg" />
            <input type='text' id='tbDate' placeholder='select a date' readonly="readonly" />
            <img class="arrow-down" src="/assets/images/svg/down.svg" />
        </div>
    `;
}