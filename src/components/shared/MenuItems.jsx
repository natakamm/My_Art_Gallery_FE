import Button from "./buttons/Button";

const MenuItems = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-3 text-white">
      <li>
        <Button link="/blogs" text="Blogs" />
      </li>
      <li>
        <Button link="/artworks" text="Artworks" />
      </li>
    </ul>
  );
};

export default MenuItems;
