function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (document.getElementById('clearCookies')) {
  document.getElementById('clearCookies').addEventListener('click',
      function () {
        delete_cookie('fp_sid');
        delete_cookie('ccid');
        delete_cookie('fp_ccid');
        console.log('Cookies cleared');
      });
}



(function (srcjs) {
  window._edrone = window._edrone || {};
  _edrone.app_id = '538ca015c571z';
  _edrone.platform = 'custom';
  var doc = document.createElement('script');
  doc.type = 'text/javascript';
  doc.async = true;
  doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:')
      + srcjs;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(doc, s);
})("//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js?app_id=538ca015c571z");


var addToCartButtons = document.querySelectorAll('.addToCart');

// Add a click event listener to each button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the data-id attribute value for the clicked button
    var productId = button.getAttribute('data-id');

    // Perform some action with the product ID, for example, log it to the console
    console.log('Product ID added to cart: ', productId);

    _edrone.product_titles = "(Product " + productId + ") Sample - Clothing And Accessory Boutiques For Sale";
    _edrone.product_urls = "https://www.krozum.github.io/product" + productId + ".html";
    _edrone.product_skus = productId;
    _edrone.product_images = "https://www.krozum.github.io/img/" + productId + ".png";
    _edrone.action_type = "add_to_cart";
    if (productId !== null) {
      _edrone.product_ids = productId;
    }
    _edrone.init();

    // You can add more code here to handle the button click event for each button
  });
});


var productViewButtons = document.querySelectorAll('.productView');

// Add a click event listener to each button
productViewButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the data-id attribute value for the clicked button
    var productId = button.getAttribute('data-id');

    // Perform some action with the product ID, for example, log it to the console
    console.log('Product ID viewed: ', productId);

    _edrone.product_titles = "(Product " + productId + ") Sample - Clothing And Accessory Boutiques For Sale";
    _edrone.product_urls = "https://www.krozum.github.io/product" + productId + ".html";
    _edrone.product_skus = productId;
    _edrone.product_images = "https://www.krozum.github.io/img/" + productId + ".png";
    _edrone.action_type = "product_view";
    if (productId !== null) {
      _edrone.product_ids = productId;
    }
    _edrone.init();

    // You can add more code here to handle the button click event for each button
  });
});

var orderButtons = document.querySelectorAll('.order');

// Add a click event listener to each button
orderButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the data-id attribute value for the clicked button
    var productId = button.getAttribute('data-id');
    var price = button.getAttribute('data-price');

    if (_edrone.email === null || _edrone.email === '' || _edrone.email === undefined) {
      alert('Please set an email address.');
      return;
    }

    var orderID  = Date.now();

    // Perform some action with the product ID, for example, log it to the console
    console.log('Product ID ordered: ', productId);
    console.log('Order ID: ', orderID)

    _edrone.product_titles = "(Product " + productId + ") Sample - Clothing And Accessory Boutiques For Sale";
    _edrone.product_urls = "https://www.krozum.github.io/product" + productId + ".html";
    _edrone.product_skus = productId;
    _edrone.product_images = "https://www.krozum.github.io/img/" + productId + ".png";
    _edrone.action_type = "order";
    _edrone.base_currency = "PLN";
    _edrone.order_currency = "PLN";
    _edrone.base_payment_value = price;
    _edrone.order_payment_value = price;
    _edrone.order_id = orderID;
    if (productId !== null) {
      _edrone.product_ids = productId;
    }
    _edrone.init();

    // You can add more code here to handle the button click event for each button
  });
});

if (document.getElementById('tag-submit')) {
  document.getElementById('tag-submit').addEventListener('click', function () {
    // Get input values
    var email = document.getElementById('tag-email').value;
    var tag = document.getElementById('tag-tag').value;
    var phone = document.getElementById('tag-phone').value;

    if (email === null || email === '') {
      alert('Please enter an email address.');
      return;
    }

    if (tag === null || tag === '') {
      alert('Please enter a tag.');
      return;
    }

    _edrone.email = email;
    _edrone.action_type = "other";
    _edrone.phone = phone;
    _edrone.customer_tags = tag;
    _edrone.init();
    console.log('Tag added: ', tag, email);
  });
}
if (document.getElementById('eref-submit')) {
  document.getElementById('eref-submit').addEventListener('click', function () {
    
    const inputs = document.querySelectorAll('#refer-a-friend-form input');
    const dataRef = {};
    inputs.forEach(input => {
        dataRef[input.getAttribute('name')] = input.value;
    });

    fetch("https://api.edrone.me/affiliation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(dataRef)
    })
    .then(response => {
      if (response.ok) {
        alert('Success!');
      } else {
        return response.text().then(text => { throw new Error(text); });
      }
    })
    .catch(error => {
      console.error('Error response:', error); // Debugging line
      alert('Error');
    });
  });
}
if (document.getElementById('subscribe-submit')) {
  document.getElementById('subscribe-submit').addEventListener('click',
      function () {
        // Get input values
        var email = document.getElementById('subscribe-email').value;
        var firstName = document.getElementById('subscribe-firstName').value;
        var lastName = document.getElementById('subscribe-lastName').value;

        if (email === null || email === '') {
          alert('Please enter an email address.');
          return;
        }

        if (firstName === null || firstName === '') {
          alert('Please enter a first name.');
          return;
        }

        if (lastName === null || lastName === '') {
          alert('Please enter a last name.');
          return;
        }

        _edrone.email = email;
        _edrone.first_name = firstName;
        _edrone.last_name = lastName;
        _edrone.customer_tags = "FromFooter";
        _edrone.subscriber_status = 1;
        _edrone.sms_subscriber_status = 1;
        _edrone.action_type = "subscribe";
        _edrone.init();
        console.log('Subscribed: ', email, firstName, lastName, 'FromFooter');
      });
}
