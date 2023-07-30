$(document).ready(function() {
    // Target the button with the ID "redirectButton"
    $('#redirectButton1').on('click', function() {
      // Replace 'newpage.html' with the URL of the HTML file you want to redirect to
      window.location.href = 'translator.html';
    });

    $('#redirectButton2').on('click', function() {
        // Replace 'newpage.html' with the URL of the HTML file you want to redirect to
        window.location.href = 'fortune.html';
      });
  });