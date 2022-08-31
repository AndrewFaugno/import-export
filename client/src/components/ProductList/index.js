import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../../utils/mutations";

const ProductList = ({ listings }) => {
    const [addToCart] = useMutation(ADD_TO_CART);
    const addItem = async (productId) => {
      
        try {
            addToCart({
                variables: { id: productId },
            });
        } catch (e) {
            console.error(e);
        }
    };

    const checkListing = function (userId) {
        if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="row d-flex justify-content-around">
            {listings &&
                listings.map((listing) => (
                    <div className="card col-xl-5 column m-auto" key={listing.name}>
                        <img className="card-img-top productImage img-fluid mx-auto" src={listing.image} alt={listing.description} />
                        <div className="card-body my-2">
                            <h3 className="card-title">{listing.name}</h3>
                            <h5 className="card-text">${listing.price}</h5>
                            <p className="card-text">{listing.description}</p>
                            {checkListing(listing.userId) ? (
                                <button className="btn btn-danger">Delete Listing</button>
                            ) : (
                                <button className="btn btn-primary" onClick={() => addItem(listing._id)}>
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProductList;