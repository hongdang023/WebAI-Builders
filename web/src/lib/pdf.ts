import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function generateCompetencyPDF(elementId: string, filename: string) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  try {
    console.log("Starting PDF generation for:", elementId);
    
    // Use html2canvas with better options for hidden elements and SVGs
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      logging: true,
      backgroundColor: "#ffffff",
      // Force element to be visible during cloning process
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          clonedElement.style.display = "block";
          clonedElement.style.position = "relative";
          clonedElement.style.left = "0";
          clonedElement.style.visibility = "visible";
          clonedElement.style.zIndex = "1";
        }
      }
    });

    console.log("Canvas captured successfully, size:", canvas.width, "x", canvas.height);

    const imgData = canvas.toDataURL("image/jpeg", 0.9); // Use JPEG for smaller size and faster PDF generation
    const pdf = new jsPDF("p", "mm", "a4");
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    let heightLeft = pdfHeight;
    let position = 0;
    const pageHeight = pdf.internal.pageSize.getHeight();

    // First page
    pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pageHeight;

    // Subsequent pages if content is long
    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
    console.log("PDF saved successfully:", filename);
    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
