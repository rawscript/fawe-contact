
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = '../../index.html'; // redirect to homepage
      } else {
        alert('Sorry, something went wrong. Please try again.');
      }
    }).catch(error => {
      console.error('Form submission error:', error);
      alert('Network issue. Try again later.');
    });
  });

