import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/cartDrawer";

interface NavbarProps {
    searchItem?: string;
    setSearchItem: any

}

const Navbar = (props: NavbarProps) => {
    const { searchItem, setSearchItem } = props;
    const [openCart, setOpenCart] = useState(false);

    const { cart } = useCart();
    return (
        <div className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between z-50">

            <div className="text-xl font-bold cursor-pointer">
                MyStore
            </div>

            <div className="w-[40%]">
                <input
                    type="search"
                    value={searchItem}
                    onChange={(e) => { setSearchItem(e.target.value) }}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
                />
            </div>

            <div className="relative cursor-pointer" onClick={() => setOpenCart(true)}>

                <span className="text-2xl">🛒</span>

                {cart.length > 0 && <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                    {cart.length}
                </span>}

            </div>
            <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
        </div>
    );
};

export default Navbar;