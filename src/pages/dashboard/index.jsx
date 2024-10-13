import { useState, useEffect } from 'react';
import Sidebar from "@/components/@page-components/sidebar";
import Categories from "@/components/@page-components/categories";
import ProductList from "@/components/@page-components/product-list";
import Navbar from "@/components/@page-components/nav-bar";
import Summary from "@/components/@page-components/order-summary";
import PaymentModal from "@/components/@page-components/payment-modal";
import Layout from '@/components/Layout';
import Invoice from "@/components/@page-components/invoice";

export default function POSPage() {
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [total, setTotal] = useState(0);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [showInvoice, setShowInvoice] = useState(false);

    // Load cart items from local storage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            setCartItems(storedCart);
            setTotal(storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
        }
    }, []);

    // Save cart items to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity += 1; // Increment quantity
            setCartItems(updatedCart);
            setTotal(total + item.price);
        } else {
            const newItem = { ...item, quantity: 1 };
            setCartItems([...cartItems, newItem]);
            setTotal(total + item.price);
        }
    };

    const handleRemoveFromCart = (index) => {
        const itemToRemove = cartItems[index];
        const newCart = cartItems.filter((_, i) => i !== index);
        setCartItems(newCart);
        setTotal(total - (itemToRemove.price * itemToRemove.quantity));
    };

    const handleCheckout = () => {
        console.log("Cart items at checkout:", cartItems); // Log cart items
        setShowPaymentModal(true);
    };

    const handlePaymentSuccess = (method) => {
        console.log("Cart items before showing invoice:", cartItems); // Log cart items before showing invoice
        setPaymentMethod(method);
        setShowPaymentModal(false);
        setShowInvoice(true);
    };

    const handleCloseInvoice = () => {
        setShowInvoice(false);
    };

    // Define your products
    const items = [
        { name: 'Tropical berries', price: 10, image: '/static/product1.jpg', description: 'Strawberries with blueberries and blackberries' },
        { name: 'Strawberry shake', price: 20, image: '/static/product2.jpg', description: 'Milkshake strawberry flavour' },
        { name: 'Christmas gift', price: 30, image: '/static/product3.jpg', description: 'Surprise gift for Christmas' },
        { name: 'Christmas gift for family', price: 30, image: '/static/product4.jpg', description: 'Surprise gift for Christmas' },
        { name: 'Gift for beloved', price: 30, image: '/static/product5.jpg', description: 'Surprise gift for Christmas' },
        { name: 'Christmas for you', price: 30, image: '/static/product6.jpg', description: 'Surprise gift for Christmas' },
    ];

    // Filter products based on search term
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>

        <>
            {/* <Sidebar /> */}
            <div className="flex flex-col flex-1 bg-white">
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <main className="flex flex-col md:flex-row flex-grow p-5">
                    <div className={`w-full ${cartItems.length === 0 ? 'w-full' : 'md:w-2/3'} `}>
                        <Categories />
                        <ProductList
                            items={filteredItems}
                            handleAddToCart={handleAddToCart}
                        />
                    </div>
                    {cartItems.length > 0 && (
                        <div className={`w-full ${cartItems.length > 0 ? 'mt-5 md:mt-0 md:w-1/3' : ''}`}>
                            <Summary
                                cartItems={cartItems}
                                total={total}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleCheckout={handleCheckout}
                            />
                        </div>
                    )}
                </main>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
                <PaymentModal
                    cartItems={cartItems}
                    total={total}
                    onSuccess={handlePaymentSuccess}
                    onClose={() => setShowPaymentModal(false)}
                />
            )}

            {/* Invoice Modal (if needed) */}
            {showInvoice && (
                <Invoice
                    cartItems={cartItems}
                    paymentMethod={paymentMethod}
                    onClose={handleCloseInvoice}
                />
            )}
        </>
        </Layout>
    );
}
