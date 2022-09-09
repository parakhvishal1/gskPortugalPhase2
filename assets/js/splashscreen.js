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