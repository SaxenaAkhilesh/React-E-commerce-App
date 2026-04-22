import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../style/button";

const CartDrawer = ({ open, onClose }: any) => {
    const { cart, increaseQty, decreaseQty, removeItem } = useCart();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const total = cart.reduce(
        (acc: number, item: any) =>
            acc + item.price * (item.quantity || 1),
        0
    );

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={onClose}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-[92vh] w-[420px] lg:w-[500px] bg-[#111] text-white z-50 
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >

                <div className="flex justify-between items-center p-5 border-b border-gray-700 sticky top-0 bg-[#111] z-10">
                    <h2 className="text-xl font-bold">Cart</h2>

                    <button
                        onClick={onClose}
                        className="text-xl text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-140px)]">

                    {cart.length === 0 ? (
                        <div className="h-full flex items-center justify-center">
                            <p className="text-gray-400 text-lg">
                                Your cart is empty
                            </p>
                        </div>
                    ) : (
                        cart?.map((item: any) => (
                            <div
                                key={item?.id}
                                className="flex gap-3 border-b border-gray-700 pb-4"
                            >
                                <img
                                    alt=""
                                    src={item.images?.[0]}
                                    className="w-16 h-16 object-cover rounded"
                                />

                                <div className="flex-1">
                                    <h3 className="text-sm font-medium line-clamp-2">
                                        {item?.title}
                                    </h3>

                                    <p className="text-green-400">${item?.price}</p>

                                    <div className="flex items-center gap-3 mt-2">

                                        <button
                                            onClick={() => decreaseQty(item?.id)}
                                            className="px-2 bg-gray-800 rounded"
                                        >
                                            -
                                        </button>

                                        <span>{item?.quantity || 1}</span>

                                        <button
                                            onClick={() => increaseQty(item?.id)}
                                            className="px-2 bg-gray-800 rounded"
                                        >
                                            +
                                        </button>

                                    </div>
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-400 hover:text-red-600 bg-gr"
                                >
                                    Remove
                                </button>

                            </div>
                        ))
                    )}
                </div>

                <div className="p-5 border-t border-gray-700 bg-[#111]">

                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Items:</span>
                        <span>{cart.length || 0}</span>
                    </div>

                    <div className="flex justify-between mb-3">
                        <span>Total:</span>
                        <span className="text-green-400 font-semibold">
                            ${total}
                        </span>
                    </div>

                    <Button
                        title="Checkout"
                        variant="primary"
                        className="w-full"
                        size="md"
                    />
                </div>

            </div>
        </>
    );
};

export default CartDrawer;