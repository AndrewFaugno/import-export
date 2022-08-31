import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import CartItems from "../CartItems";
import "./style.css";

const Cart = () => {
    const { data } = useQuery(QUERY_ME);
    const user = data?.me || [];

    const [cartOpen, setCart] = useState(false);
    const toggleCart = function () {
        setCart(!cartOpen);
    };

    if (!cartOpen) {
        return (
            <span className="material-symbols-outlined profileIcon" onClick={toggleCart}>
                shopping_cart
            </span>
        );
    }

    function cartTotal() {
        let sum = 0;
        user.cart.forEach((item) => {
            sum += item.price;
        })
        return sum.toFixed(2);
    }

    return (
        <div className="cart">
            <div className="close pr-3" onClick={toggleCart}>
                X
            </div>
            <h2>Shopping Cart</h2>
            {user.cart.length ? 
            user.cart.map(item => ( 
                <CartItems item={item} key={item._id}/>
            )) : (
                <h3>Your Cart is Empty!</h3>
            )}
            <div></div>
            <div className="text-right">
                <div className="p-2">
                    <strong>Total: ${cartTotal()}</strong>
                </div>
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
