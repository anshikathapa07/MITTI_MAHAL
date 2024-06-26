import React from 'react'
import useCartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartItemsCount,
    } = useCartContext();

    const displayCartItems = () => {
        if (getCartItemsCount() === 0) return (
            <div className="text-center">
                {/* <p alt="login form" className='rounded-start mt-4 w-25 text-center' /> */}
                <h3>Your Cart is Currently Empty!</h3>
                <p className="text-muted">Before proceed to checkout you must add some products to your shopping cart. <br />You will fill a lot of interesting products on our "Product" page.</p>
                <Link to="/product" className="btn rounded-pill" style={{ backgroundColor: "#4BCCF2", color: "#fff" }} >Return To Shop</Link>
            </div>
        );
        return cartItems.map((item) => (
            <div key={item._id} className=" mb-4">
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                {" "}
                                {/* product */}
                                <div className="w-20">
                                    <img
                                        className="h-24"
                                        src={'http://localhost:3000/' + item.image}
                                        alt=""
                                    />
                                </div>
                                <div className=" ml-4 my-auto">
                                    <span className="font-bold text-lg mb-3">{item.name}</span><br />
                                    <span className="text-red-500 text-md">{item.category}</span>
                                 
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                             <button className="bg-black text-white px-2 text-xl" onClick={e => removeItemFromCart(item)}>-</button>
                              
                                <input
                                    className="mx-2 border text-center w-8"
                                    type="text"
                                    value={item.quantity}
                                />
                             <button className="bg-black text-white px-2 text-xl" onClick={e => addItemToCart(item)}>+</button>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-md">
                              ${item.price}
                            </span>
                           
                        </div>

                <hr className="my-4" />

            </div>

        ));
    }
    return (
        <div>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-bold text-3xl text-orange-600 font-serif">Shopping Cart</h1>
                            <h2 className="font-semibold text-3xl text-orange-600 font-serif">Total Items : {getCartItemsCount()}</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-bold text-balck text-sm uppercase w-2/5 font-serif">
                                Product Details
                            </h3>
                            <h3 className="font-bold text-center text-black text-sm uppercase w-1/5 text-center font-serif">
                                Quantity
                            </h3>
                            <h3 className="font-bold text-center text-bkack text-sm uppercase w-1/5 text-center font-serif">
                                Price
                            </h3>
                          
                        </div>
                    
                       {displayCartItems()}
                     
                        <Link
                            to="/Main/ProductListing"
                            className="flex font-bold text-indigo-600 text-base mt-10"
                        >
                            <svg
                                className="fill-current mr-2 text-indigo-600 w-4 "
                                viewBox="0 0 448 512"
                            >
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                            
                        </Link>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-bold text-2xl border-b pb-8 text-orange-600 font-serif">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items : {getCartItemsCount()}</span>
                            <span className="font-semibold text-sm">Total : {getCartTotal()}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">
                                Shipping
                            </label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label
                                htmlFor="promo"
                                className="font-semibold inline-block mb-3 text-sm uppercase"
                            >
                                Promo Code
                            </label>
                            <input
                                type="text"
                                id="promo"
                                placeholder="Enter your code"
                                className="p-2 text-sm w-full"
                            />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                            Apply
                        </button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{getCartTotal()}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            <Link to="/Main/Checkout">Checkout</Link> 

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart