import logo from "../assets/logo.png";
import moon from "../assets/moon.png";
function Header() {
  return (
    <header className=" top-0 z-50 w-full shadow">
      <div className="flex justify-between">
        <img className="ml-6 w-36" src={logo} alt="shop-tendance" />

        <h1 className="font-header text-xl text-center mt-10 lg:text-4xl ">
          Un magasin qui vend tendance
        </h1>
        <img className="h-6 mt-14 mr-6" src={moon} alt="dark-light" />
      </div>
    </header>
  );
}

export default Header;
