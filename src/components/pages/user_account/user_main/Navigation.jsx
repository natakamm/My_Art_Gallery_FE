import UserFavorites from "./UserFavorites";
import UserPosts from "./UserPosts";
import UserGallery from "./UserGallery";

const Navigation = () => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab  [--tab-bg:#db2777] [--tab-border-color:transparent] text-white"
        aria-label="Gallery"
      />
      <div role="tabpanel" className="tab-content bg-slate-900 rounded-box p-6">
        <UserGallery />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:#db2777] [--tab-border-color:transparent] text-white"
        aria-label="Favorites"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content bg-slate-900 rounded-box p-6">
        <UserFavorites />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:#db2777] [--tab-border-color:transparent] text-white"
        aria-label="Posts"
      />
      <div role="tabpanel" className="tab-content bg-slate-900 rounded-box p-6">
        <UserPosts />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:#db2777] [--tab-border-color:transparent] text-white"
        aria-label="Settings"
      />
      <div role="tabpanel" className="tab-content bg-slate-900 rounded-box p-6">
        Tab content 3
      </div>
    </div>
  );
};

export default Navigation;
