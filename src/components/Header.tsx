import Icon from "../assets/icon.png";

const Header = () => {
  return (
    <header className="flex justify-center p-5 m-0 w-full mb-4">
      <div className="flex items-center justify-center gap-3 ">
        <h2 className="text-3xl font-bold text-sky-600 ">Memory Game</h2>
        <img src={Icon} alt="Icon" className="w-10 " />
      </div>
    </header>
  );
};

export default Header;
