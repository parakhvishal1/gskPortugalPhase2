
function loadPlanProgress(data, basicProgress) {
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

function loadProgressCards(data, detailed, hideAdd) {
    console.log(data);
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
    console.log(item)
    let progressPercent = Math.ceil((item["purchased"] / item["max_limit"]) * 100);
    let progressPercentSelected = Math.ceil((item["selected"] / item["max_limit"]) * 100);
    let addBtn = `
        ${basicProgress ?
            ""
            :
            `
                <label style="font-size: 12px;">${parseInt(item["purchased"]) + parseInt(item["selected"])}</label>
                <div class="progressbar_wrapper addproduct" data=${encodeURIComponent(JSON.stringify(item))}>
                    <div class="main reset" style="cursor: pointer;">
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
                    
                    
                    
                    ${getInvertedProgress(item, progressPercent)}
                    ${getInvertedProgress(item, progressPercentSelected)}
                </div>
                ${detailed ? getProgressHeaderFooterLabels(item, "footer") : ""}
            </div>
            <div class="wrapper_brand_progress" style="width: ${detailed ? '10' : basicProgress ? '0' : '5'}%; padding-right: ${hideAdd ? "0px" : basicProgress ? '0px' : "12px"}; font-size: 12px;">
                ${hideAdd ? `<div><div style='margin-top: -20px;'>On Invoice</div><div style='margin-top: 10px;'><strong> ${parseInt(item["purchased"]) + parseInt(item["selected"])}</strong></div></div>` : addBtn}
            </div>
        </div>
    `;
}

function getInvertedProgress(item, progressPercent) {
    if(progressPercent) {
        return `
            <div class="progressbar_ratio inverted" style="width:${progressPercent}%;">
                <div class="ratio_wrapper">
                    <div class="ratio">${item["purchased"]}</div>
                </div>
            </div>
        `;
    } else {
        return ``;
    }
}

function getSelectedProgress(item, progressPercentSelected) {
    if(progressPercentSelected) {
        return `
            <div class="progressbar_ratio" style="width:${progressPercentSelected}%;">
                <div class="ratio_wrapper">
                    <div class="ratio">+ ${item["selected"] - item["purchased"]}</div>
                </div>
            </div>
        `;
    } else {
        return ``;
    }
}