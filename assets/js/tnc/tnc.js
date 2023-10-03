function loadTermsUI(data) {
    $("#header").addClass('tnc');
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="termsofuse bottom">
            <div class="main_content">
                <h2 class="heading">${data["heading"]}</h2>
                <div class="termsofuse_content" id="termsofuse_content"></div>
            </div>
        </div>
    `);

    data && data["termsofuse"] && data["termsofuse"].map(terms => {
        $("#termsofuse_content").append(`
            <div class="block">
                <h3 class="title">${terms["title"]}</h3>
                <p class="detail">${terms["desc"]}</p>
            </div>
        `);
    });
}