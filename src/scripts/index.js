//Toggle Email Clipboard
document.getElementById('email').addEventListener('click', function() {
    var emailText = this.innerText;
    var tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Email copied to clipboard: ' + emailText);
});

// Toggle Menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbarToggle');
    const dropdownMenu = document.querySelector('.navbarMenu');
  
    toggleButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
    });
  });