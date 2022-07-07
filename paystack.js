Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
  
  function payWithPaystack() {
      let handler = PaystackPop.setup({
        key: 'pk_test_32907531c2bf152bf00ee7685383b9d32c05f543', // Replace with public key for test or live mode
        name: document.getElementById("payment-firstName").value + document.getElementById("payment-lastName").value,
        email: document.getElementById("payment-email").value,
        number: document.getElementById("payment-phone").value,
        // country: document.getElementById("payment-country").value,
        // city: document.getElementById("payment-city").value,
        // amount: document.querySelector("input[type='radio'][name=amount]:checked").value * 100,
        currency: "NGN",
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference.
        onClose: function() {
          alert('Window closed.');
        },
        callback: function(response) {
          window.location = "https://theaf.org/?reference=https://e-novate-bootcamp.netlify.app/" + response.reference;
        }
        // On the redirected page, you can call Paystack's verify endpoint.
      });
      handler.openIframe();
  }