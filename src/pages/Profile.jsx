import UserMain from "../components/pages/user_account/user_main/UserMain";
import UserCard from "../components/pages/user_account/user_card/UserCard";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      <div className="sm:col-span-1 lg:col-span-1 ">
        <UserCard />
      </div>
      <div className="sm:col-span-2 lg:col-span-4 ">
        <UserMain />
      </div>
    </div>
  );
};

export default Profile;
