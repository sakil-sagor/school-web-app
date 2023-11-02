import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./print.css";

const AdmitCardPrint = ({ studentResult }) => {
    // const { studentId, studentsName, fatherName, classRoll, shift, section, } = studentResult;
    console.log(studentResult);
    const handleDownloadPDF = () => {
        const element = document.getElementById('specific-area'); // Replace 'specific-area' with the ID of the element you want to download as PDF
        const a4Width = 210 * 2.83; // Approximately 595 points
        const a4Height = 297 * 2.83; // Approximately 842 points
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', [a4Width, a4Height]);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.addImage(imgData, 'JPEG', 0, 0, a4Width, a4Height);
            //donwload the pdf 
            // pdf.save('download.pdf');
            // Print the PDF directly
            pdf.autoPrint();

            // Open the print dialog
            pdf.output('dataurlnewwindow');
        });

        // html2canvas(element).then((canvas) => {
        //     const image = new Image();
        //     image.src = canvas.toDataURL('image/jpeg');

        //     const printWindow = window.open('', '', 'width=600,height=600');
        //     printWindow.document.open();
        //     printWindow.document.write('<html><body>');
        //     printWindow.document.write('<img src="' + image.src + '" onload="window.print(); window.close();" />');
        //     printWindow.document.write('</body></html>');
        //     printWindow.document.close();
        // });
    };
    return (
        <div>
            <div className="invoice border shadow-md p-4  " id="specific-area">
                <div className="border p-4 border-black">
                    <div className="text-center">
                        <h2>Piplakandi Govt Girls high school</h2>
                        <p>Admit Card</p>
                    </div>
                    <hr />
                    <div>
                        <div className="flex justify-between">
                            <p>Name: {studentResult?.studentsName}</p>
                            <p>STD Id:{studentResult?.studentId}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Class:{studentResult?.nameOfClass}</p>
                            <p>Roll:{studentResult?.classRoll}</p>
                            <p>Section:{studentResult?.section}</p>
                        </div>
                        <div className="flex justify-between mt-16">
                            <div>
                                <hr />
                                <p>Class Teacher</p>
                            </div>
                            <div>
                                <hr />
                                <p>Head Teacher</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <button onClick={handleDownloadPDF}>Print</button>
        </div>
    );
};

export default AdmitCardPrint;