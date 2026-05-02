function showMessage() {

    let fileInput = document.getElementById("pdfFile");

    if(fileInput.files.length > 0){

        document.getElementById("fileName").innerText =
        fileInput.files[0].name;

    } else {

        alert("Please Select PDF File");

    }

}

async function mergePDF() {

    alert("Merge PDF Button Working");

}
