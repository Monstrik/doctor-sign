/**
 * Created by Alexander on 5/11/2017.
 */
function currentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + mm + '-' + dd; //return mm+'/'+dd+'/'+yyyy;

}

function formIsValid() {

    //TODO: validation
    if ($('#fullName').val() == '') {
        alert("Please add Name");
        return false;
    }

    if ($('#doa').val() == '') {
        alert("Please select D.O.A.");
        return false;
    }

    if ($('input[name="test"]:checked').val() == undefined) {
        alert("Please select test type");
        return false;
    }


    if (signaturePad.isEmpty()) {
        alert("Please provide signature first.");
    }
    else
        return true;
}

function buildDataObject(){
    var dataObj = {};
    dataObj.date = $('#date').val();
    dataObj.office = $('#office').val();
    dataObj.name = $('#fullName').val();
    dataObj.doa = $('#doa').val();
    dataObj.test = $('input[name="test"]:checked').val();
    dataObj.signature = signaturePad.toDataURL();
    console.log(dataObj);
    return dataObj;
}

function buildPreview() {

    var dataPreview = buildDataObject();

    var html = '<table class="prvTable">' +
        '<tr>' +
        '<th>Date</th>' +
        '<td class="prvValue">' + dataPreview.date + '</td>' +
        '</tr>' +
        '<tr>' +
        '<th>Office</th>' +
        '<td class="prvValue">' + dataPreview.office + '</td>' +
        '</tr>' +
        '<tr>' +
        '<tr>' +
        '<th class="prvTitle">Name</th>' +
        '<td class="prvValue">' + dataPreview.name + '</td>' +
        '</tr>' +
        '<tr>' +
        '<tr>' +
        '<th>D.O.A.</th>' +
        '<td class="prvValue">' + dataPreview.doa + '</td>' +
        '</tr>' +
        '<tr>' +
        '<tr>' +
        '<th>Test</th>' +
        '<td class="prvValue">' + dataPreview.test + '</td>' +
        '</tr>' +
        '<tr>' +
        '<th>Signature</th>' +
        '<td class="prvSignature"><img style="width: 50%;" src="' + dataPreview.signature + '" /></td>' +
        '</tr>' +
        '</table>';
    return html;
};

function saveData(data) {
    //TODO SaveData
    console.log('Save',data)
}