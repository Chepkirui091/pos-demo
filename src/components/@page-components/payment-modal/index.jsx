import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa'; // Importing the icons
import Invoice from "@/components/@page-components/invoice";

export default function PaymentModal({ finalTotal, cartItems, onClose }) {

    const [isPaid, setIsPaid] = useState(false); // Track payment state
    const [paymentMethod, setPaymentMethod] = useState(''); // State for selected payment method

    // Handle the payment and show invoice
    const handlePayment = () => {
        setIsPaid(true); // Update state to show the invoice
    };

    const selectPaymentMethod = (method) => {
        setPaymentMethod(method); // Set the selected payment method
    };

    // Function to determine button classes based on selected payment method
    const buttonClass = (method) => {
        return `flex items-center py-2 px-4 rounded-lg mb-2 transition 
            ${paymentMethod === method ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                {!isPaid ? (
                    // Show payment options
                    <>
                        <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>
                        <p className="text-gray-600 mb-4">Total to Pay: <strong>${finalTotal.toFixed(2)}</strong></p>

                        <div className="flex flex-col mb-6">
                            <button
                                className={buttonClass('Credit Card')}
                                onClick={() => selectPaymentMethod('Credit Card')}
                            >
                                <FaCcVisa className="mr-2" /> Credit Card
                            </button>
                            <button
                                className={buttonClass('PayPal')}
                                onClick={() => selectPaymentMethod('PayPal')}
                            >
                                <FaPaypal className="mr-2" /> PayPal
                            </button>
                            <button
                                className={buttonClass('Cash')}
                                onClick={() => selectPaymentMethod('Cash')}
                            >
                                <FaMoneyBillWave className="mr-2" /> Cash
                            </button>
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                                onClick={handlePayment}  // Trigger invoice display
                            >
                                Pay
                            </button>
                        </div>
                    </>
                ) : (
                    // Show invoice after payment
                    <Invoice
                        cartItems={cartItems}
                        total={finalTotal}
                        paymentMethod={paymentMethod} // Pass the selected payment method
                        onClose={onClose}
                    />
                )}
            </div>
        </div>
    );
}
