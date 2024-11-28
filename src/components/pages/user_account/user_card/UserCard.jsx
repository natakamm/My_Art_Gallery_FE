import Avatar from "../user_card/Avatar";
import Details from "../user_card/Details";

const UserCard = () => {
  return (
    <div className="rounded-3xl bg-slate-900 p-8">
      <Avatar />
      <Details />
    </div>
  );
};

export default UserCard;
