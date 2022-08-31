import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";
import ProductList from "../components/ProductList";

const Home = () => {
   const { loading, data } = useQuery(QUERY_LISTINGS);
   const listings = data?.listings || [];

   return (
      <div className="m-auto homepageWidth">
         {loading ? (
            <h1 className="text-center">Loading...</h1>
         ) : (
            <ProductList listings={listings} />
         )}
      </div>
   );
};

export default Home;
