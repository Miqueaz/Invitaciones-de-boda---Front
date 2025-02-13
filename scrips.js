document.getElementById('download-btn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Seleccionar el contenido de la invitación
    const invitation = document.getElementById('invitation');
  
    // Convertir el contenido a una imagen en base64
    doc.html(invitation, {
      callback: function (doc) {
        // Guardar como PDF
        doc.save('invitacion-boda.pdf');
      },
      x: 10,
      y: 10,
      width: 180 // Ajustar al ancho del PDF
    });
  });
  