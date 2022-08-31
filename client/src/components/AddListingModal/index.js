import { useState } from "react";
import Modal from "react-modal";
// import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_LISTING } from "../../utils/mutations";

const AddListingModal = ({ modalIsOpen, setModalOpen }) => {
    const [formState, setFormState] = useState({ name: "", description: "", price: "", image: "" });
    const [addListing] = useMutation(ADD_LISTING);

    const customStyles = {
        content: {
            width: "60%",
            top: "35%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const apiUrl = "https://api.imgur.com/3/image";
    const apiKey = "08fbcc640c27bbb";

    const handleImage = () => {
        // define inputed file
        const input = document.getElementById("file");
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file);

        fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Client-ID ${apiKey}`,
            },
            body: formData,
        })
            .then((data) => data.json())
            .then((data) => {
                setFormState({
                    ...formState,
                    image: data.data.link,
                });
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addListing({
                variables: {
                    name: formState.name,
                    description: formState.description,
                    price: parseInt(formState.price),
                    image: formState.image,
                },
            });
            setModalOpen(false);
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
            <div className="m-auto text-center">
                <div className="text-right mb-2">
                    <button className="btn btn-danger" onClick={() => setModalOpen(false)}>
                        X
                    </button>
                </div>
                <div className="text-center pb-4">
                    <h3>Add New Listing</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="d-block">
                            Product Name:
                        </label>
                        <input name="name" placeholder="Large Blanket" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="price" className="d-block mt-2">
                            Product Price:
                        </label>
                        <input type="number" step="0.01" name="price" placeholder="29.99" onBlur={handleChange} />
                    </div>
                    <div className="my-3">
                        <label htmlFor="description" className="d-block">
                            Product Description:
                        </label>
                        <textarea name="description" type="text" placeholder="product description here" rows="3" onBlur={handleChange} />
                    </div>
                    <div className="text-center">
                        <input type="file" id="file" onChange={handleImage} />
                    </div>
                    <div className="pt-5">
                        <button type="submit" className="btn btn-dark">
                            Create Listing
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default AddListingModal;
