function addInputEventListener() {
    $('input[type=radio]').change(function () {
        $(`.block`).map((v) => {
            $($(`.block`)[v]).removeClass("active");
        });
        $(`.tab_body`).map((v) => {
            $($(`.tab_body`)[v]).removeClass("active");
        });
        $(`.tab-2`).map((item, index) => {
            $($(`.tab-2`)[item]).removeClass("active");
        });
        $(`#${this.id}`).parent('.block').parent(".tab-2").toggleClass('active');
        $(`#${this.id}`).parent('.block').toggleClass('active');
        $(`#${this.id}`).parent('.block').siblings('.tab_body').toggleClass('active');

    });
}

function removeHeader() {
    $(".header").empty();
    $(".header").addClass("hide");
}

function showDatePicker(id) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    return `
        <div class="inline-flex calendar-picker">
            <img class="picker" src="/gskPortugalPhase2/assets/images/svg/calendar.svg" />
            <input type='text' id='tbDate-${id}' placeholder='${locale["labels"]["pickDate"]}' readonly="readonly" class='dateSelectPicker' />
            <img class="arrow-down" src="/gskPortugalPhase2/assets/images/svg/down.svg" />
        </div>
    `;
}

function showDatePickerWhite(date) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    return `
        <div class="inline-flex calendar-picker">
            <img class="picker" src="/gskPortugalPhase2/assets/images/svg/calendar-white.svg" />
            <input type='text' id='tbDate' placeholder='${date ? date : locale["labels"]["pickDate"]}' readonly="readonly"></input>
            <!-- <img class="arrow-down" src="/gskPortugalPhase2/assets/images/svg/down-white.svg" /> -->
        </div>
    `;
}


function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function PosEnd(end) {
    var len = end.value.length;
    end.focus();
    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        var t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}

function getParsedData() {
    return JSON.parse(localStorage.getItem("data"));
}

function saveParsedData(data) {
    return localStorage.setItem("data", JSON.stringify(data));
}
function calculateSumAmount(data) {
    let sum = 0;
    
    let sumValues = obj => Object.values(obj).reduce((a, b) => {
        return Number(a) + Number(b);
    });
    
    

    for (let key in data) {
        sum = sum + Number(sumValues(data[key]));
    }
    return sum;
}

function orderCalculate() {
    
}

function getMonthName(data) {
    const monthNumber = new Date(data).getMonth() + 1;
    if (isNaN(monthNumber)) {
         console.error('Invalid month name.');
    }
  
    const months = {
        '1' : 'Jan',
        '2' : 'Feb',
        '3' : 'Mar',
        '4' : 'Apr',
        '5' : 'May',
        '6' : 'Jun',
        '7' : 'Jul',
        '8' : 'Aug',
        '9' : 'Sep',
        '10' : 'Oct',
        '11' : 'Nov',
        '12' : 'Dec',
    }

    return months[monthNumber];
}

function addInputListener(inputElement) {
    console.log("pppp ", $(`.${inputElement}`));
    window[inputElement] = $(`.${inputElement}`);
    
    window[inputElement].blur(function () {
        setTimeout(() => {
            console.log("blurred --> ", $(this).val());
            $(this).val(parseInt($(this).val()) - 1);
            $(this).change();
            let currentElementData = $(this).attr("skudata");
            let currentAvailableOrders = window.dataStore["available_orders"]["orders"];
            let filteredData = currentAvailableOrders.filter((order, index) => order["sku"] === currentElementData)
            let orderData = filteredData[0];
            let sibling = $(this).siblings(".counter__box__container.add").children('.counter__plus');

            const filteredBrand = window.dataStore["plan_progress"]["brands"].filter(brand => brand["sku"] === window.dataStore["selected_brand"]);
            const isBrandSku = filteredBrand[0]["isSku"];
            updateCounter(sibling[0], "add", window.dataStore["selected_brand"], isBrandSku, orderData, "blur");
        }, 500);
    });

    window[inputElement].keypress(function (e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            /* let dateDivWrapper = $(this).parent().parent().parent().parent().parent().parent().siblings('.date-picker-value').children().children(".hasDatepicker");
            let isDateSelected = dateDivWrapper.datepicker({ dateFormat: 'M dd, y' }).val()
            if(!isDateSelected) {
                showSnackbar(true, locale["snackbars"]["selectDate"]);
                return;
            } */
           $(this).blur();
        }
    });
}

// function addInputListener(inputElement) {
//     window[inputElement] = $(`.${inputElement}`);
    
//     window[inputElement].blur(function () {
//         setTimeout(() => {
//             console.log("this blur --> ", this);
//             console.log("blurred --> ", $(this).val());
            
//             $(this).val(parseInt($(this).val()) - 1);
//             $(this).change();
//             let currentElementData = $(this).attr("skudata");
//             let currentAvailableOrders = window.dataStore["available_orders"]["orders"];
//             let filteredData = currentAvailableOrders.filter((order, index) => order["sku"] === currentElementData)
//             let orderData = filteredData[0];
//             let sibling = $(this).siblings(".counter__box__container.add").children('.counter__plus');
//             updateCounter(sibling[0], "add", window.dataStore["selected_brand"], false, orderData, "blur");
//         }, 500);
//     });

//     window[inputElement].keypress(function (e) {
//         var key = e.keyCode || e.which;
//         if (key == 13) {
//            $(this).blur();
//         }
//     });
// }


function getJoinedCheckout (data) {
    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            const curGroup = acc[key] ?? [];
    
            return { ...acc, [key]: [...curGroup, obj] };
        }, {});
    }
    
    let updatedData = data["new_orders"]["orders"].map(order => {
        let parsedProductDetails = order["product_details"].filter((product, index) => {
            product["_id"] = order["_id"];
            if(product["quantity"] && Number(product["quantity"])) {
                return product;
            }
        });
        order["product_details"] = parsedProductDetails;
        return order;
    });
    
    let groupByOrderedDate = groupBy(updatedData, "ordered_date");
    
    let groupBySku = [];
    let finalCartData = [];
    for (const key in groupByOrderedDate) {
        groupBySku.push(groupBy(groupByOrderedDate[key], "sku"));
    }
    
    function combine(objectArray, key) {
        return objectArray.reduce((accumulator, currentValue) => [...accumulator, ...currentValue[key]], []);
    }
     
    groupBySku.map(nr => {
        for (const key in nr) {
            let updatedDetails = combine(nr[key], "product_details");
            nr[key] = {
                ...nr[key][0],
                "product_details": updatedDetails
            }
        }
        return nr;
    });
    
    groupBySku.map(nr => {
        for (const key in nr) {
            finalCartData.push(nr[key])
        }
    });

    return finalCartData;
}

function downloadFile(url, fileName) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        var blob = new Blob([req.response], { type: "application/octetstream" });
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};