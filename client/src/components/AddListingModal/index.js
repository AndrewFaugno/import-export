const AddListingModal = () => {
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
      <div className="container card ">
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
      </div>
   );
};

export default AddListingModal;
