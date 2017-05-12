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
    $("#mainData").html(drawSavedData(loadSavedData()));
    $("#date").val(currentDate());
    console.log("ready!");
});


$('[data-action=clear]').click(function () {
    signaturePad.clear();
});

$('[data-action=reset-form]').click(function () {
    signaturePad.clear();
    $("#dataDiv").html('');
    $('#dataDivWrapper').hide();
    setTimeout(function(){
        $("#date").val(currentDate());
    },0)

});

$('[data-action=preview]').click(function () {
    if (formIsValid()) {
        $("#dataDiv").html(buildPreview());
        $('#dataDivWrapper').show();
    }
});


$('[data-action=save]').click(function () {
    if (formIsValid()) {
        saveData(buildDataObject());
        $("#mainData").html(drawSavedData(loadSavedData()));
        $("#dataDiv").html('');
        $('#dataDivWrapper').hide();
    }
});


$('[data-action=clean-data]').click(function () {
    localStorage.clear();
    console.log('cleaned');
});