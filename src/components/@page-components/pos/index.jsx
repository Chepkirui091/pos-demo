import { useState } from 'react';

export default function POSPage() {
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [total, setTotal] = useState(0);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotal(total + item.price);
    };

    const handleRemoveFromCart = (index) => {
        const itemToRemove = cartItems[index];
        const newCart = cartItems.filter((_, i) => i !== index);
        setCartItems(newCart);
        setTotal(total - itemToRemove.price);
    };

    const items = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
        { name: 'Product 3', price: 30 },
    ];

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-5">POS System</h1>

            {/* Search Bar */}
            <div className="mb-5">
                <input
                    type="text"
                    className="p-2 border w-full md:w-1/2"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                {items
                    .filter((item) =>
                        item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow-lg">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-gray-500">${item.price}</p>
                            <button
                                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
            </div>

            {/* Cart */}
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-xl font-semibold mb-3">Cart Summary</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center mb-2"
                            >
                <span>
                  {item.name} - ${item.price}
                </span>
                                <button
                                    className="text-red-500"
                                    onClick={() => handleRemoveFromCart(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="text-lg font-bold mt-4">
                    Total: ${total.toFixed(2)}
                </div>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                    Checkout
                </button>
            </div>
        </div>
    );
}
