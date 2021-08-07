export const displayRazorpay = async function(user) {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "Burntune Music and Media Pvt Ltd.",
      description: "Wallet Transaction",
      image: "http://localhost:1337/logo.png",
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: user.displayName,
        email: user.email,
        contact: user.phoneNumber,
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  