import { useState } from 'react';
// import Auth from '../utils/auth';
import AddListingModal from '../components/AddListingModal';

const Profile = () => {
    const [modalIsOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

   return (
      <div>
        <h1 className='text-center'>(username)'s profile</h1>
        {modalIsOpen && 
            <AddListingModal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen} />
        }
        <button onClick={openModal}>Add New Listing</button>
      </div>
   );
};

export default Profile;
