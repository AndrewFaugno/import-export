import Modal from 'react-modal';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_LISTING } from '../../utils/mutations';

const AddListingModal = ({ modalIsOpen, setModalOpen }) => {
    const customStyles = {
        content: {
         width: '60%',
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

   const apiUrl = "https://api.imgur.com/3/image";
   const apiKey = "08fbcc640c27bbb";

   const handleSubmit = (e) => {
      e.preventDefault();

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
            console.log(data);
         });
   };
   return (
    <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
      <div className="m-auto text-center">
         <div className='text-right mb-2'>
            <button className='btn btn-danger' onClick={() => setModalOpen(false)}>X</button>
         </div>
         <div className='text-center pb-4'>
            <h3>Add New Listing</h3>
         </div>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title" className='d-block'>Product Name:</label>
               <input name="title" placeholder='Large Blanket'/>
            </div>
            <div>
               <label htmlFor="price" className='d-block mt-2'>Product Price:</label>
               <input type="number" name="price" placeholder='29.99'/>
            </div>
            <div className='my-3'>
               <label htmlFor='description' className='d-block'>Product Description:</label>
               <textarea type="text" placeholder='product description here' rows="3" />
            </div>
            <div className='text-center'>
               <input type="file" id="file"/>
            </div>
            <div className='pt-5'>
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
