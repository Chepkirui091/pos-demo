import { useState, useEffect } from 'react';
import Sidebar from "@/components/@page-components/sidebar";
import Categories from "@/components/@page-components/categories";
import ProductList from "@/components/@page-components/product-list";
import Navbar from "@/components/@page-components/nav-bar";
import Summary from "@/components/@page-components/order-summary";

export default function POSPage() {
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [total, setTotal] = useState(0);

    // Load cart items from local storage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            setCartItems(storedCart);
            setTotal(storedCart.reduce((acc, item) => acc + item.price, 0));
        }
    }, []);

    // Save cart items to local storage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

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
        { name: 'Tropical berries', price: 10, image: '/static/product1.jpg', description: 'Strawberries with blueberries and blackberries' },
        { name: 'strawberry shake', price: 20, image: '/static/product2.jpg', description: 'milkshake strawberry flavour' },
        { name: 'Christmas gift', price: 30, image: '/static/product3.jpg', description: 'surprise gift for christmas' },
        { name: 'Tropical berries', price: 10, image: '/static/product4.jpg', description: 'Strawberries with blueberries and blackberries' },
        { name: 'Tropical berries', price: 10, image: '/static/product5.jpg', description: 'Strawberries with blueberries and blackberries' },
        { name: 'Tropical berries', price: 10, image: '/static/product6.jpg', description: 'Strawberries with blueberries and blackberries' },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <main className="flex flex-grow p-5">
                    <div className="w-2/3 pr-5"> {/* Categories and ProductList Section */}
                        <Categories />
                        <ProductList
                            items={filteredItems}
                            handleAddToCart={handleAddToCart}
                            cartItems={cartItems}
                            handleRemoveFromCart={handleRemoveFromCart}
                            total={total}
                        />
                    </div>
                    <div className="w-1/3"> {/* Summary Section */}
                        <Summary
                            cartItems={cartItems}
                            total={total}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
