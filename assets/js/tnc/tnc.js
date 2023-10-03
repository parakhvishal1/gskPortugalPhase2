function loadTermsUI(data) {
    $("#header").addClass('tnc');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="termsofuse bottom">
            <div class="main_content">
                <div class="heading">${data["heading"]}</div>
                <div class="termsofuse_content" id="termsofuse_content"></div>
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