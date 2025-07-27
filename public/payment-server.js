const express = require('express');
const axios = require('axios');
const app = express();

app.get('/pay', async (req, res) => {
  try {
    const response = await axios.post('https://test.instamojo.com/api/1.1/payment-requests/', {
      purpose: "Test Payment",
      amount: "100",
      buyer_name: "Test User",
      email: "pratikmorkar000@gmail.com",
      phone: "8369775954",
      redirect_url: "https://pagarpiyush347.com/payment-success"
    }, {
      headers: {
        'X-Api-Key': '9b9066f41a817005073f3a1e36582ed3',
        'X-Auth-Token': 'a6053cf745808968c1885a184a0359c9'
      }
    });

    // Redirect user to Instamojo payment page
    res.redirect(response.data.payment_request.longurl);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.send("Error initiating payment.");
  }
});

app.listen(3000, () => console.log("Payment server running on port 3000")); 