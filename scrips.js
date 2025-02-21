  document.getElementById('confirm-button').addEventListener('click', () => {
      fetch('http://192.168.1.67:5000/registrar_asistencia', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: 1 })
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  });
