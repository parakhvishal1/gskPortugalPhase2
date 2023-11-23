function loadPharmacyQues() {
    
    $("#logout_option").empty();
    $(`#logout_option`).append(`
        <div class="logout_screen_overlay">
            <div class="dialog_box">
                <div class="modal_content">
                    <div class="modal-content">
                        <div class="modal_header">
                            <h4>Pharmacy</h4>
                        </div>
                        <div class="modal_body">How many pharmacies are you ordering for ?</div>
                        <div class="modal_footer">
                            <button id="modal_yes" class="btn btn-primary btn-block">1</button>
                            <button id="modal_no" class="btn btn-primary btn-block">4</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    $("#modal_yes").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#logout_option").empty();
        CallScreen(2);
    });

    $("#modal_no").click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#logout_option").empty();
        CallScreen(3);
    });
}