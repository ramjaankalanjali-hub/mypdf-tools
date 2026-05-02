function showMessage() {

    let fileInput = document.getElementById("pdfFile");

    if(fileInput.files.length > 0){

        alert(fileInput.files.length + " PDF File Selected");

    } else {

        alert("Please Select PDF File");

    }

}
