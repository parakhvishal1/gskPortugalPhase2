function loadTermsUI(data) {
    $(".header").removeClass('hide');
    $("#content_box").empty();
    
    $("#content_box").append(`
        <div class="termsofuse bottom">
            <div class="main_content">
                <div class="heading">${data["heading"]}</div>
                <div class="termsofuse_content" id="termsofuse_content"></div>
            </div>
            <div class="btn_wrapper">
                <div class="btnbox">
                    <button class="btn outline" id="terms_decline">${data["decline"]}</button>
                    <button class="btn solid" id="terms_accept">${data["accept"]}</button>
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

    $("#terms_accept").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        ToBot("terms-conditions", {
            "opted": "accept"
        });
    });

    $("#terms_decline").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        CallScreen(2);
        removeHeader();
        ToBot("terms-conditions", {
            "opted": "decline"
        });
    });
}