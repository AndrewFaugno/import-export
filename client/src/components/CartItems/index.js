import { useMutation } from "@apollo/client";
import { REMOVE_FROM_CART } from "../../utils/mutations";

const CartItems = ({ item }) => {
    const [removeFromCart] = useMutation(REMOVE_FROM_CART)

    const remove = async (id) => {
        try {
            removeFromCart({
                variables: { id: id },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="border mb-2">
            <div></div>
            <div className="p-2">
                <div>
                    <img src={item.image} alt={item.description} className="cartImg" />
                    {item.name}, ${item.price}
                </div>
            </div>
            <div className="text-right">
                <span className="material-symbols-outlined trashcan" onClick={() => remove(item._id)}>
                    delete
                </span>
            </div>
        </div>
    );
};

export default CartItems;
