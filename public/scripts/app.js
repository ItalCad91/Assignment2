/*
  Author: Riccardo Reali
  Date: 2022-10-21
*/



//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener('load', Start);
})();

/* CONTACT PAGE SCRIPTS */


function Submit() {
    // Get the form element
    const form = document.getElementById("contact-form");

    // Check if any of the required fields are empty
    if (form.checkValidity()) {
      // If the form is valid, reset the fields and display a success message
      Erase();
      Swal.fire({
        title: "Thank you!" + " I will reach out to you asap ⌛",
        text: "",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      // If the form is invalid, display an error message
      Swal.fire({
        title: "Oops!",
        text: "Please fill out all the fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
  
  
  
  function Erase()
  {
      var form2 = document.getElementById("fname").value = "";
      var name2 = document.getElementById("lname").value = "";
      var email1 = document.getElementById("email").value = "";
      var email1 = document.getElementById("subject").value = "";
  }

  