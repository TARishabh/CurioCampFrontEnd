import React, { useEffect, useState} from 'react'
import useRazorpay from "react-razorpay";
import axios from "axios";
import Course1 from "../assets/course1.png";


const PaymentCard = ({price}) => {
  const Razorpay = useRazorpay();
  const [amount, setAmount] = useState(price); 
  const url = import.meta.env.VITE_BASE_URL
  useEffect(() => {
    setAmount(price);
  }, [price]);
  // console.log(amount);
  // complete order
  const complete_order = (paymentID, orderID, signature)=>{
      axios({
          method: 'post',
          url: `${url}verifySignature/`,
          data: {
              "payment_id": paymentID,
              "order_id": orderID,
              "signature": signature,
              "amount": amount
          }
      })
      .then((response)=>{
          console.log(response.data);
      })
      .catch((error)=>{
          console.log(error.response.data);
      })
  }

  const razorPay = () => {
      // Get the authentication token from localStorage or wherever it's stored
      const authToken = localStorage.getItem('token');
  
      // Create the axios instance with the authentication token
      const axiosInstance = axios.create({
          headers: {
              'Authorization': `Bearer ${authToken}`
          }
      });
  
      // Make the API request with the axios instance
      axiosInstance({
          method: 'post',
          url: `${url}createOrder/`,
          data: {
              user: 1,
              course: 1,
              total_amount: amount,
              amount_paid: amount,
              currency: "INR"
          }
      }).then((response)=>{
        // console.log(amount);

          console.log(response.data.results.order_id)
          // get order id
          const order_id = response.data.results.order_id
          console.log(order_id);
          
          // handle payment
          const options = {
              key: import.meta.env.VITE_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
              name: "CurioCamp",
              description: "Test Transaction",
              image: "https://example.com/your_logo",
              order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
              handler: function (response) {

                  //complete order
                  complete_order(
                      response.razorpay_payment_id,
                      response.razorpay_order_id,
                      response.razorpay_signature
                  )
              },
              prefill: {
              name: import.meta.env.VITE_NAME,
              email: import.meta.env.VITE_NUMBER,
              contact: import.meta.env.VITE_EMAIL,
              },
              notes: {
              address: "Razorpay Corporate Office",
              },
              theme: {
              color: "#3399cc",
              },
          };

          const rzp1 = new Razorpay(options);
          rzp1.on("payment.failed", function (response) {
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.order_id);
              alert(response.error.metadata.payment_id);
          });
          rzp1.open();
      })
      .catch((error)=>{
        console.log(amount);
          console.log(error);
      })
  } 
  return (
    // <div>
        
    //   <button type="button" className="btn btn-light fw-semibold py-3" onClick={razorPay}>Upgrad now</button>
    // </div>

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={Course1}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

  )
}

export default PaymentCard;
