import jsPDF from 'jspdf';

interface CaseStudyPDFData {
  title: string;
  industry: string;
  capability?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack?: string[];
  metrics?: { value: string; label: string }[];
  clientInfo?: {
    industry?: string;
    companySize?: string;
    revenue?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export function generateCaseStudyPDF(data: CaseStudyPDFData): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPos = margin;

  // Colors
  const primaryColor = '#0077B5';
  const darkColor = '#051C2C';
  const grayColor = '#666666';

  // Helper function to add text with word wrap
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number, fontSize: number, color: string = darkColor): number => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * lineHeight);
  };

  // Helper to check and add new page if needed
  const checkNewPage = (requiredSpace: number): void => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
  };

  // === COVER PAGE ===
  
  // Dark header band
  doc.setFillColor(5, 28, 44); // #051C2C
  doc.rect(0, 0, pageWidth, 80, 'F');

  // Company branding
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('NEXDYNE TECHNOLOGIES', margin, 25);
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(200, 200, 200);
  doc.text('Intelligence, Delivered.', margin, 32);

  // Case Study label
  doc.setFontSize(10);
  doc.setTextColor(0, 119, 181); // Primary blue
  doc.setFont('helvetica', 'bold');
  doc.text('CASE STUDY', margin, 50);

  // Industry badge
  if (data.industry) {
    doc.setFontSize(9);
    doc.setTextColor(180, 180, 180);
    doc.text(`${data.industry.toUpperCase()}${data.capability ? ` · ${data.capability.toUpperCase()}` : ''}`, margin, 58);
  }

  // Title
  yPos = 100;
  doc.setFontSize(28);
  doc.setTextColor(darkColor);
  doc.setFont('helvetica', 'bold');
  const titleLines = doc.splitTextToSize(data.title, contentWidth);
  doc.text(titleLines, margin, yPos);
  yPos += titleLines.length * 12 + 15;

  // Summary
  doc.setFontSize(12);
  doc.setTextColor(grayColor);
  doc.setFont('helvetica', 'normal');
  const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
  doc.text(summaryLines, margin, yPos);
  yPos += summaryLines.length * 6 + 20;

  // Key Metrics (if available)
  if (data.metrics && data.metrics.length > 0) {
    doc.setFillColor(245, 247, 250);
    doc.rect(margin, yPos - 5, contentWidth, 35, 'F');
    
    const metricWidth = contentWidth / Math.min(data.metrics.length, 4);
    data.metrics.slice(0, 4).forEach((metric, index) => {
      const metricX = margin + (index * metricWidth) + 10;
      
      doc.setFontSize(22);
      doc.setTextColor(primaryColor);
      doc.setFont('helvetica', 'bold');
      doc.text(metric.value, metricX, yPos + 12);
      
      doc.setFontSize(8);
      doc.setTextColor(grayColor);
      doc.setFont('helvetica', 'normal');
      const labelLines = doc.splitTextToSize(metric.label, metricWidth - 15);
      doc.text(labelLines, metricX, yPos + 22);
    });
    yPos += 45;
  }

  // Client Info Box (if available)
  if (data.clientInfo && (data.clientInfo.industry || data.clientInfo.companySize || data.clientInfo.revenue)) {
    checkNewPage(50);
    
    doc.setFillColor(5, 28, 44);
    doc.rect(margin, yPos, contentWidth, 30, 'F');
    
    const infoItems = [
      data.clientInfo.industry && { label: 'Industry', value: data.clientInfo.industry },
      data.clientInfo.companySize && { label: 'Company Size', value: data.clientInfo.companySize },
      data.clientInfo.revenue && { label: 'Revenue', value: data.clientInfo.revenue }
    ].filter(Boolean) as { label: string; value: string }[];
    
    const infoWidth = contentWidth / infoItems.length;
    infoItems.forEach((item, index) => {
      const infoX = margin + (index * infoWidth) + 10;
      
      doc.setFontSize(8);
      doc.setTextColor(0, 119, 181);
      doc.setFont('helvetica', 'bold');
      doc.text(item.label.toUpperCase(), infoX, yPos + 10);
      
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'normal');
      doc.text(item.value, infoX, yPos + 20);
    });
    yPos += 45;
  }

  // === CHALLENGE SECTION ===
  doc.addPage();
  yPos = margin;

  // Section header
  doc.setFillColor(0, 119, 181);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('THE CHALLENGE', margin, 25);
  
  doc.setFontSize(20);
  doc.text('Understanding the problem', margin, 38);

  yPos = 70;
  yPos = addWrappedText(data.challenge, margin, yPos, contentWidth, 7, 11, grayColor);
  yPos += 20;

  // === SOLUTION SECTION ===
  checkNewPage(80);
  
  // Section header
  doc.setFillColor(0, 119, 181);
  doc.rect(margin, yPos - 5, contentWidth, 40, 'F');
  
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('THE SOLUTION', margin + 10, yPos + 10);
  
  doc.setFontSize(18);
  doc.text('Our approach', margin + 10, yPos + 25);
  
  yPos += 50;
  yPos = addWrappedText(data.solution, margin, yPos, contentWidth, 7, 11, grayColor);
  yPos += 15;

  // Tech Stack
  if (data.techStack && data.techStack.length > 0) {
    checkNewPage(40);
    
    doc.setFillColor(245, 247, 250);
    doc.rect(margin, yPos - 5, contentWidth, 30, 'F');
    
    doc.setFontSize(10);
    doc.setTextColor(darkColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Technology Stack', margin + 10, yPos + 8);
    
    doc.setFontSize(9);
    doc.setTextColor(grayColor);
    doc.setFont('helvetica', 'normal');
    const techText = data.techStack.join('  •  ');
    const techLines = doc.splitTextToSize(techText, contentWidth - 20);
    doc.text(techLines, margin + 10, yPos + 18);
    yPos += 40;
  }

  // === RESULTS SECTION ===
  checkNewPage(80);
  
  // Section header
  doc.setFillColor(5, 28, 44);
  doc.rect(margin, yPos - 5, contentWidth, 40, 'F');
  
  doc.setFontSize(10);
  doc.setTextColor(0, 119, 181);
  doc.setFont('helvetica', 'bold');
  doc.text('THE RESULTS', margin + 10, yPos + 10);
  
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text('Key outcomes', margin + 10, yPos + 25);
  
  yPos += 50;

  // Results list
  data.results.forEach((result, index) => {
    checkNewPage(20);
    
    // Checkmark bullet
    doc.setFillColor(0, 119, 181);
    doc.circle(margin + 5, yPos - 2, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.text('✓', margin + 3, yPos);
    
    // Result text
    doc.setFontSize(10);
    doc.setTextColor(darkColor);
    doc.setFont('helvetica', 'normal');
    const resultLines = doc.splitTextToSize(result, contentWidth - 20);
    doc.text(resultLines, margin + 15, yPos);
    yPos += resultLines.length * 5 + 10;
  });

  // === TESTIMONIAL (if available) ===
  if (data.testimonial) {
    checkNewPage(60);
    yPos += 10;
    
    doc.setFillColor(5, 28, 44);
    doc.rect(margin, yPos - 5, contentWidth, 50, 'F');
    
    doc.setFontSize(11);
    doc.setTextColor(0, 119, 181);
    doc.setFont('helvetica', 'italic');
    const quoteLines = doc.splitTextToSize(`"${data.testimonial.quote}"`, contentWidth - 20);
    doc.text(quoteLines, margin + 10, yPos + 10);
    
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text(`— ${data.testimonial.author}`, margin + 10, yPos + 35);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(180, 180, 180);
    doc.text(data.testimonial.role, margin + 10, yPos + 42);
    
    yPos += 60;
  }

  // === FOOTER ON LAST PAGE ===
  doc.setFillColor(5, 28, 44);
  doc.rect(0, pageHeight - 25, pageWidth, 25, 'F');
  
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text('NEXDYNE TECHNOLOGIES', margin, pageHeight - 12);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(180, 180, 180);
  doc.text('www.nexdyne.com  |  contact@nexdyne.com', pageWidth - margin - 70, pageHeight - 12);

  // Generate filename and save
  const filename = `NexDyne_CaseStudy_${data.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50)}.pdf`;
  doc.save(filename);
}

export default generateCaseStudyPDF;
