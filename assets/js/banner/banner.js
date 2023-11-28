function loadGeneralWelcome(data) {
    $("#content_box").empty();
    $("#header").removeClass('tnc');
    $("#content_box").append(`
        <div class="splash_screen">
            <div class="branding">
                <img src=${data['bg-img']} alt='PharmAssist' />
            </div>
        </div>
    `);
}