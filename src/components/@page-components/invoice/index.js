export default function Invoice({ cartItems = [], total = 0, paymentMethod, onClose }) {
    console.log("Cart items in Invoice:", cartItems); // This should show the correct cartItems

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-gray-900">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/2 max-w-md"> {/* Reduced width */}
                <div className="flex justify-between items-center mb-4">
                    <img
                        src="https://www.shutterstock.com/shutterstock/photos/1472127647/display_1500/stock-vector-p-o-s-letter-logo-design-vector-1472127647.jpg"
                        alt="Logo"
                        className="h-12" // Set the logo height
                    />
                    <h2 className="text-2xl font-bold">Invoice</h2>
                </div>
                <div className="mb-4">
                    <p><strong>Payment Method:</strong> {paymentMethod || 'Not specified'}</p>
                </div>
                <table className="w-full table-auto mb-4">
                    <thead>
                    <tr>
                        <th className="text-left">Product</th>
                        <th className="text-right">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td className="text-right">${item.price.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center text-gray-500">No items in the cart</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td className="text-right font-bold">Total</td>
                        <td className="text-right font-bold">${total.toFixed(2)}</td>
                    </tr>
                    </tfoot>
                </table>
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
