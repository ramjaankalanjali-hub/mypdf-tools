async function mergePDF() {

    const { PDFDocument } = PDFLib;

    let fileInput = document.getElementById("pdfFile");

    if(fileInput.files.length < 2){

        alert("Select at least 2 PDF files");

        return;

    }

    const mergedPdf = await PDFDocument.create();

    for(let i = 0; i < fileInput.files.length; i++){

        const file = fileInput.files[i];

        const bytes = await file.arrayBuffer();

        const pdf = await PDFDocument.load(bytes);

        const copiedPages = await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
        );

        copiedPages.forEach((page) => {

            mergedPdf.addPage(page);

        });

    }

    const mergedBytes = await mergedPdf.save();

    const blob = new Blob([mergedBytes], {
        type: "application/pdf"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "merged.pdf";

    link.click();

}
