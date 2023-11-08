function addLegalCopyright(data) {
    $(".legal_tnc").removeClass('hidden');
    $(".legal_tnc_title").text(data["tncHeading"]);
    $(".legal_tnc_body").text(data["tnc"]);
}