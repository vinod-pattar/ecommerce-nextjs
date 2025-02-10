'use client'

import { Button } from "@/components/ui/button";
import { useRazorpay } from "react-razorpay";

export default function Page() {
    const { error, isLoading, Razorpay } = useRazorpay();

    const handlePayment = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          amount: 337491, // Amount in paise
          currency: "INR",
          name: "eCommerce",
          description: "Test Transaction",
          order_id: "order_PsSwK7CKv0XUEI", // Generate order_id on server
          handler: (response) => {
            console.log(response);
            alert("Payment Successful!");
            
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };
    
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      };

    return (
        <div>
            <h1>Cart</h1>
            <Button onClick={handlePayment}>Pay</Button>
            <p>Cart Page</p>
        </div>
    )
}