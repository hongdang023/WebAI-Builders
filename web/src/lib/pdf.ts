import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function generateCompetencyPDF(elementId: string, filename: string) {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Không tìm thấy thành phần có ID: ${elementId}`);
  }

  try {
    console.log("Khởi tạo quá trình tạo PDF cho:", elementId);
    
    // Improved configuration for html2canvas to handle SVGs better
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      logging: true,
      backgroundColor: "#ffffff",
      allowTaint: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: 800,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          clonedElement.style.display = "block";
          clonedElement.style.position = "relative";
          clonedElement.style.left = "0";
          clonedElement.style.visibility = "visible";
          clonedElement.style.opacity = "1";
          
          // Fix for some SVG issues in html2canvas
          const svgs = clonedElement.querySelectorAll("svg");
          svgs.forEach(svg => {
            svg.setAttribute("width", svg.getBoundingClientRect().width.toString());
            svg.setAttribute("height", svg.getBoundingClientRect().height.toString());
          });
        }
      }
    });

    console.log("Đã chụp được Canvas. Kích thước:", canvas.width, "x", canvas.height);

    const imgData = canvas.toDataURL("image/jpeg", 0.9);
    const pdf = new jsPDF("p", "mm", "a4");
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    let heightLeft = pdfHeight;
    let position = 0;
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
    console.log("Lưu file thành công:", filename);
    return true;
  } catch (error: any) {
    console.error("Chi tiết lỗi PDF:", error);
    // Return the specific error message to be displayed in the UI
    throw new Error(error.message || "Lỗi không xác định trong quá trình xử lý Canvas");
  }
}
