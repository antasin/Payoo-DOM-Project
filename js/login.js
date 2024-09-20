//console.log('button clicking file added')
//----structure-----//
//document.getElementById('id').addEventListener('click' , fun)
//document.getElementById("button-login").addEventListener('click' function(){});
//kar jaigai add kora hobe,,ki add kora hobe ,, add hoile ki hobe....click holo ki dhoron er event & function ta holo listener
//search : form submit reloading the page

//step -1 set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    //step-2 prevent default behaviour(prevent reloading browser).reload korbe default
    event.preventDefault(); //<----- vajal for biggeners
    console.log("Login button clicked");
    //step -3 get the phone number
    const PhoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    //previous line without .view id te ja likhi show korbe na
    console.log(PhoneNumber, pinNumber);
    //step-4 validate phone and pin
    //this is not the ideal way its just temporary.you shouldnot do like this
    if (PhoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = '/home.html'
      //step-5  allow user to use the website
    } else {
      alert("wrong number or pin");
    }
  });
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    console.log("Button Click");
  event.preventDefault();
  });
