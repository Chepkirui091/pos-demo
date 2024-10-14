import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

export default function Invoice({
                                    cartItems = [],
                                    total = 0,
                                    tax = 0,
                                    paymentMethod,
                                    onClose,
                                    invoiceNumber,
                                    invoiceDate,
                                    billingInfo,
                                }) {
    console.log("Cart items in Invoice:", cartItems); // This should show the correct cartItems

    const handleDownload = () => {
        const input = document.getElementById('invoice');
        const buttons = document.querySelectorAll('.pdf-hide'); // Selecting the buttons by class

        // Hide the buttons before generating PDF
        buttons.forEach(button => button.style.display = 'none');

        html2canvas(input, { scale: 2 })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`invoice_${invoiceNumber || '0001'}.pdf`);

                // Show the buttons again after generating PDF
                buttons.forEach(button => button.style.display = 'flex');
            })
            .catch((err) => {
                console.log(err);
                // Ensure buttons are visible again in case of an error
                buttons.forEach(button => button.style.display = 'flex');
            });
    };

    // Calculate subtotal if not provided
    const calculatedSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const calculatedTotal = total || calculatedSubtotal + tax;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-gray-900 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-3xl overflow-auto" id="invoice">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <img
                        src="https://www.shutterstock.com/shutterstock/photos/1472127647/display_1500/stock-vector-p-o-s-letter-logo-design-vector-1472127647.jpg"
                        alt="Logo"
                        className="h-16"
                    />
                    <h2 className="text-4xl font-bold">Invoice</h2>
                </div>

                {/* Invoice Details */}
                <div className="flex justify-between mb-6">
                    <div>
                        <p><strong>Invoice Number:</strong> {invoiceNumber || 'INV-0001'}</p>
                        <p><strong>Invoice Date:</strong> {invoiceDate || new Date().toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p><strong>Payment Method:</strong> {paymentMethod || 'Not specified'}</p>
                        <p><strong>Due Date:</strong> {new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Billing Information */}
                {billingInfo && (
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Billing Information:</h3>
                        <p>{billingInfo.name}</p>
                        <p>{billingInfo.address}</p>
                        <p>{billingInfo.email}</p>
                        <p>{billingInfo.phone}</p>
                    </div>
                )}

                {/* Items Table */}
                <table className="w-full table-auto mb-6">
                    <thead>
                    <tr className="border-b-2">
                        <th className="text-left py-2">Product</th>
                        <th className="text-center py-2">Quantity</th>
                        <th className="text-right py-2">Price</th>
                        <th className="text-right py-2">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.name} className="h-12 w-12 mr-4 object-cover rounded" />
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td className="text-center py-2">{item.quantity}</td>
                                <td className="text-right py-2">${item.price.toFixed(2)}</td>
                                <td className="text-right py-2">${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center text-gray-500 py-4">No items in the cart</td>
                        </tr>
                    )}
                    </tbody>
                </table>

                {/* Dotted Line Separator */}
                <hr className="border-dotted mb-4" />

                {/* Totals Section */}
                <div className="flex flex-col items-end mb-6">
                    <div className="w-full ">
                        <div className="flex justify-between py-2">
                            <span className="font-semibold">Subtotal:</span>
                            <span>${calculatedSubtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="font-semibold">Tax (10%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-t-2">
                            <span className="font-bold text-lg">Total:</span>
                            <span className="font-bold text-lg">${calculatedTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Download and Close Buttons */}
                <div className="flex justify-between space-x-4">
                    <button
                        onClick={handleDownload}
                        className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition pdf-hide"
                    >
                        <FaDownload className="mr-2" />
                        Download
                    </button>
                    <button
                        onClick={onClose}
                        className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition pdf-hide"
                    >
                        <FaTimes className="mr-2" />
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
