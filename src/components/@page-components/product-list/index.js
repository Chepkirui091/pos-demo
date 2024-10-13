import React, { useState } from 'react';  // Import useState here

export default function ProductList({ items, handleAddToCart }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-3 text-gray-700">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, index) => {
                    // State to manage the quantity of the current item
                    const [quantity, setQuantity] = useState(1);

                    // Function to increment quantity
                    const incrementQuantity = () => {
                        setQuantity((prevQuantity) => prevQuantity + 1);
                    };

                    // Function to decrement quantity
                    const decrementQuantity = () => {
                        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
                    };

                    return (
                        <div key={index} className="bg-white p-4 rounded shadow-lg">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2 rounded" />
                            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-gray-500 mb-2">{item.description}</p>
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-lg font-bold mb-3 text-gray-900">${item.price}</p>
                                <span className="text-gray-700">
                                    <button
                                        className="border border-gray-400 rounded px-2 py-1 mr-2 hover:bg-gray-200 transition"
                                        onClick={decrementQuantity}
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-semibold">{quantity}</span>
                                    <button
                                        className="border border-gray-400 rounded px-2 py-1 ml-2 hover:bg-gray-200 transition"
                                        onClick={incrementQuantity}
                                    >
                                        +
                                    </button>
                                </span>
                            </div>
                            <div className="text-center">
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                                    onClick={() => handleAddToCart(item, quantity)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
