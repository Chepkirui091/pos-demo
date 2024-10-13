// components/@page-components/Summary.js
export default function Summary({ cartItems, total, handleRemoveFromCart }) {
    const discountPercentage = 0; // Set your discount logic here
    const taxPercentage = 0.1; // Example tax rate of 10%

    // Calculate subtotal, discount, tax, and final total
    const subtotal = total;
    const discount = (subtotal * discountPercentage) / 100;
    const tax = (subtotal * taxPercentage);
    const finalTotal = subtotal - discount + tax;

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-bold mb-3">Current Order</h2>
            <ul className="mb-4">
                {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <button
                            onClick={() => handleRemoveFromCart(index)}
                            className="ml-2 text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Discount ({discountPercentage}%):</span>
                <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Tax (10%):</span>
                <span>+${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
            </div>
            <button
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-blue-600 transition"
                onClick={() => alert('Proceeding to Checkout')}
            >
                Checkout
            </button>
        </div>
    );
}
