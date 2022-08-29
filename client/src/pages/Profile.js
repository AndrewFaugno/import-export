import Auth from '../utils/auth';
import AddListingModal from '../components/AddListingModal';

const Profile = () => {
   return (
      <div>
        <h1 className='text-center'>(username)'s profile</h1>
        {Auth.loggedIn() && 
            <AddListingModal />
        }
      </div>
   );
};

export default Profile;
