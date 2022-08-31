const ProductList = ({ listings }) => {
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
                     <button className="btn btn-primary">Add to Cart</button>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default ProductList;
