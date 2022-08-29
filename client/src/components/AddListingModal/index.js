import Modal from 'react-modal';

const AddListingModal = ({ modalIsOpen, setModalOpen }) => {
    const customStyles = {
        content: {
          top: '50%',
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
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <div className=" ">
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title">Product Title:</label>
               <input name="title" />
            </div>
            <div>
               <input type="file" id="file" />
               <button type="submit" className="btn btn-dark">
                  Submit
               </button>
            </div>
         </form>
         <button onClick={() => setModalOpen(false)}>X</button>
      </div>
    </Modal>
   );
};

export default AddListingModal;
