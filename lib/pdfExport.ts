/**
 * PDF export using window.print() with a styled print stylesheet.
 * jspdf is not installed, so we use the browser's print dialog.
 */
export async function exportNotesAsPDF(moduleTitle: string, content: string): Promise<void> {
  if (typeof window === "undefined") return;

  const printWindow = window.open("", "_blank", "width=800,height=600");
  if (!printWindow) {
    alert("Permita popups para exportar o PDF.");
    return;
  }

  const escaped = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Notas — ${moduleTitle}</title>
  <style>
    body {
      font-family: Georgia, serif;
      max-width: 700px;
      margin: 40px auto;
      color: #1a1a1a;
      line-height: 1.7;
    }
    h1 { font-size: 1.6rem; color: #3B6D11; border-bottom: 2px solid #3B6D11; padding-bottom: 8px; }
    .meta { font-size: 0.85rem; color: #6b7280; margin-bottom: 24px; }
    .content { white-space: pre-wrap; font-size: 1rem; }
    @media print {
      body { margin: 20px; }
    }
  </style>
</head>
<body>
  <h1>📝 Notas — ${moduleTitle}</h1>
  <p class="meta">FitoStudy · Exportado em ${new Date().toLocaleDateString("pt-BR")}</p>
  <div class="content">${escaped}</div>
  <script>
    window.onload = function() { window.print(); };
  <\/script>
</body>
</html>`;

  printWindow.document.write(html);
  printWindow.document.close();
}
