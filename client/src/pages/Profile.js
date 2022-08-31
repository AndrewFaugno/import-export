import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import AddListingModal from "../components/AddListingModal";
import ProductList from "../components/ProductList";

const Profile = () => {
   const { loading, data } = useQuery(QUERY_ME);
   const user = data?.me || [];
   const [modalIsOpen, setModalOpen] = useState(false);

   function openModal() {
      setModalOpen(true);
   }

   return (
      <div className="w-75 m-auto">
         <div className="text-center mb-5">
            {modalIsOpen && <AddListingModal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen} />}
            <h1 className="">{user.firstName}'s Profile</h1>
            <button onClick={openModal} className="btn btn-light mt-3">
               Add New Product
            </button>
         </div>
        {user.listings.length ? <h3 className="text-center py-2">Your Listings:</h3> : <h3 className="text-center py-2">Created listings will be displayed here:</h3>}
        {loading ? <h1 className="text-center">Loading...</h1> : <ProductList listings={user.listings} />}
      </div>
   );
};

export default Profile;
