//add money to the account
//s-1 add event handlr
//prevent page reload after form submit
//s-2   get money to be added to the account balance
//step-1 add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    //prevent page reload after form submit
    event.preventDefault();
    //console.log("money add button clicked");
    const addMoneyInput = document.getElementById("input-add-money").value;

    //ekhon value paua jabe na ,just input paua jabe...(.value) add korle value output hobe
    console.log(addMoneyInput);
    //get the pin number
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);
  });
