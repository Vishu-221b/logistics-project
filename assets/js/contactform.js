document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get all input fields in the form
    var inputs = this.getElementsByTagName('input');
  
    // Check if all required fields are filled
    var allFilled = true;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        allFilled = false;
        break;
      }
    }
  
    if (!allFilled) {
      // If a required field is not filled, show a message and stop the function
      document.getElementById('formMessage').textContent = 'Please fill all the fields';
      document.getElementById('formMessage').classList.add('error');
      return;
    }
  
    var formData = new FormData(this);
  
    // Show the loading message
    var loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = 'block';
  
    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = '';
    formMessage.classList.remove('success', 'error');
  
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      // Hide the loading message
      loadingMessage.style.display = 'none';
  
      if (response.ok) {
        formMessage.textContent = 'Email sent successfully';
        formMessage.classList.add('success');
      } else {
        formMessage.textContent = 'Error: ' + response.statusText;
        formMessage.classList.add('error');
      }
    }).catch(error => {
      // Hide the loading message
      loadingMessage.style.display = 'none';
  
      formMessage.textContent = 'Error: ' + error;
      formMessage.classList.add('error');
    });
  });