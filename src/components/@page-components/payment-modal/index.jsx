import React, { useState } from 'react';

// Modal component
function PaymentModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded shadow-lg p-6 w-80">
                <h3 className="text-lg font-bold mb-4">Select Payment Method</h3>
                <ul>
                    <li>
                        <button className="block w-full text-left py-2 hover:bg-gray-100" onClick={() => console.log('PayPal selected')}>
                            PayPal
                        </button>
                    </li>
                    <li>
                        <button className="block w-full text-left py-2 hover:bg-gray-100" onClick={() => console.log('Credit Card selected')}>
                            Credit Card
                        </button>
                    </li>
                    <li>
                        <button className="block w-full text-left py-2 hover:bg-gray-100" onClick={() => console.log('Bank Transfer selected')}>
                            Bank Transfer
                        </button>
                    </li>
                </ul>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
