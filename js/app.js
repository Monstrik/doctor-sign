'use strict';


var wrapper = document.getElementById("signature-pad"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;


signaturePad = new SignaturePad(canvas);

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();


$(document).ready(function () {
    $("#dataDivWrapper").hide();
    console.log("ready!");
    $("#date").val(currentDate());
});


$('[data-action=clear]').click(function () {
    signaturePad.clear();
});


$('[data-action=preview]').click(function () {
    if (formIsValid()) {
        var dataDiv = document.getElementById("dataDiv")
        dataDiv.innerHTML = buildPreview()
        $('#dataDivWrapper').show();
    }
});


$('[data-action=save]').click(function () {
    if (formIsValid()) {
        saveData(buildDataObject());
    }
});
