import coverpic from "../../../browsing-clothing.jpg";
function Header() {
  return (
    <div>
      <div className="bg-temp h-10 max-w-[100%] flex justify-between items-center">
        <div className="flex text-center">
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            Home
          </h1>
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            About
          </h1>
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            Contact
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            Login
          </h1>
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            Sign Up
          </h1>
        </div>
      </div>
      <div className="h-16 max-w-[100%] flex justify-center items-center">
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Men
        </h1>
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Women
        </h1>
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Kids
        </h1>
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Brands
        </h1>
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Sale
        </h1>
      </div>
      {/* <div className="relative">
        <img src={coverpic}></img>
        <button className="bg-yellow rounded-full w-40 h-14 font-display font-bold absolute top-1/3 right-[600px] hover:scale-125 duration-300">
          SHOP NOW
        </button>
      </div> */}
    </div>
  );
}

export default Header;
