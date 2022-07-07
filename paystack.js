function payWithPaystack() {

  var handler = PaystackPop.setup({ 
      key: 'your_public_key', //put your public key here
      email: 'customer@email.com', //put your customer's email here
      amount: document.querySelector("input[type='radio'][name=donation_amount]:checked").value * 100,
      ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference.
      currency: 'NGN',
      callback: function (response) {
          //after the transaction have been completed
          //make post call  to the server with to verify payment 
          //using transaction reference as post data
          $.post("verify.php", {reference:response.reference}, function(status){
              if(status == "success")
                  //successful transaction
                  alert('Transaction was successful');
              else
                  //transaction failed
                  alert(response);
          });
      },
      onClose: function () {
          //when the user close the payment modal
          alert('Transaction cancelled');
      }
  });
  handler.openIframe(); //open the paystack's payment modal
}

function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'your_public_key', //put your public key here
        email: 'customer@email.com', //put your customer's email here
        plan: 'gold',
        callback: function (response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            $.post("verify.php", {reference:response.reference}, function(status){
                if(status == "success")
                    //successful transaction
                    alert('Transaction was successful');
                else
                    //transaction failed
                    alert(response);
            });
        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
  }