function switchTab(tab) {
    document.getElementById(tab).click();
}

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