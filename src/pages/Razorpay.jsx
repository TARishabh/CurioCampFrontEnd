import axios from "axios";
import { useState } from "react";
import useRazorpay from "react-razorpay";

const Home = ()=>{

    const Razorpay = useRazorpay();
    const [amount, setAmount] = useState(500);

    // complete order
    const complete_order = (paymentID, orderID, signature)=>{
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/verifySignature/',
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
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MjQwMTcyLCJpYXQiOjE3MDc2MzUzNzIsImp0aSI6IjIxMDE1NzNhM2QwOTQ4NTM5MTNlMGExMDcwN2U1ZDJhIiwidXNlcl9pZCI6MX0.zBm4r385_WQl3g1QFAifg6xj7rsiGwK1Xt7yPqXWhlA';
    
        // Create the axios instance with the authentication token
        const axiosInstance = axios.create({
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    
        // Make the API request with the axios instance
        axiosInstance({
            method: 'post',
            url: 'http://127.0.0.1:8000/createOrder/',
            data: {
                user: 1,
                course: 1,
                total_amount: amount,
                amount_paid: amount,
                currency: "INR"
            }
        }).then((response)=>{
            console.log(response.data.results.order_id)
            // get order id
            const order_id = response.data.results.order_id
            console.log(order_id);
            
            // handle payment
            const options = {
                key: "rzp_test_5uFkpY7sQJWElt", // Enter the Key ID generated from the Dashboard
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
                name: "Rishabh Sharma",
                email: "rishabh.sharma110e@gmail.com",
                contact: "6268447609",
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
            console.log(error);
        })
    }

    return(
        <div className="container mt-5 text-center rounded bg-warning border p-5" style={{width:"28%"}}>
            <h1 className="fw-bolder display-2">₹500</h1>
            <p>per year</p>
            <div>
                <h3 className="fw-semibold">Basic</h3>
                <div className="text-start mt-3">
                    <ul style={{fontSize:"14px"}}>
                        <li>1 custom domain e.g. img.yourdomain.com</li>
                        <li>Media library backup</li>
                        <li>Automated image analysis reports with Performance Center</li>
                        <li>One-time 30 minute consultation with a media optimization expert</li>
                        <li>Live chat & 12-hr SLA support tickets</li>
                        <li>5 user accounts with role-based permissions</li>
                    </ul>
                </div>
                <div className="d-grid mt-3">
                    <button type="button" className="btn btn-light fw-semibold py-3" onClick={razorPay}>Upgrad now</button>
                </div>
            </div>
        </div>
    )
}

export default Home;