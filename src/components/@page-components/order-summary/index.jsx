import { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md'; // Import the delete icon
import PaymentModal from "@/components/@page-components/payment-modal";

export default function Summary({ cartItems, total, handleRemoveFromCart }) {
    console.log("Cart items in summary:", cartItems);
    const discountPercentage = 0; // Set your discount logic here
    const taxPercentage = 0.1; // Example tax rate of 10%

    // State to manage the quantity of each item
    const [quantities, setQuantities] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success

    // Initialize quantities based on cartItems
    useEffect(() => {
        const initialQuantities = cartItems.map(item => item.quantity || 1);
        setQuantities(initialQuantities);
    }, [cartItems]);

    // Function to increment quantity
    const incrementQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    // Function to decrement quantity
    const decrementQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] = Math.max(1, newQuantities[index] - 1);
        setQuantities(newQuantities);
    };

    // Calculate subtotal, discount, tax, and final total
    const subtotal = cartItems.reduce((acc, item, index) => {
        return acc + (item.price * (quantities[index] || 1));
    }, 0);
    const discount = (subtotal * discountPercentage) / 100;
    const tax = (subtotal * taxPercentage);
    const finalTotal = subtotal - discount + tax;

    // Handle checkout (open modal)
    const handleCheckout = () => {
        setIsModalOpen(true); // Open the payment modal
    };

    // Simulate payment success and close modal
    const handlePaymentSuccess = () => {
        setPaymentSuccess(true);
        setIsModalOpen(false); // Close modal after successful payment
    };

    return (
        <div className="p-6 bg-white shadow rounded-lg text-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Current Order</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
                <ul className="mb-4 space-y-4">
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2 space-x-2">
                                        <button
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition"
                                            onClick={() => decrementQuantity(index)}
                                            disabled={quantities[index] === 1}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold">{quantities[index] || 1}</span>
                                        <button
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition"
                                            onClick={() => incrementQuantity(index)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(index)}
                                className="text-red-600 hover:bg-red-200 transition p-2 rounded-lg mt-2 sm:mt-0"
                            >
                                <MdDelete size={24} /> {/* Render the delete icon */}
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between mb-2 text-gray-700">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-700">
                    <span>Discount ({discountPercentage}%):</span>
                    <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-700">
                    <span>Tax (10%):</span>
                    <span>+${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${finalTotal.toFixed(2)}</span>
                </div>
            </div>

            {cartItems.length > 0 && (
                <>
                    <button
                        className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition"
                        onClick={handleCheckout}  // Trigger modal on checkout
                    >
                        Checkout
                    </button>

                    {isModalOpen && (
                        <PaymentModal
                            finalTotal={finalTotal}
                            cartItems={cartItems}
                            onClose={() => setIsModalOpen(false)}
                            onSuccess={handlePaymentSuccess}
                        />
                    )}

                    {paymentSuccess && (
                        <div className="mt-4 text-green-500 text-center">
                            Payment successful! Thank you for your purchase.
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
