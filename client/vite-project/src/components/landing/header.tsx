import coverpic from "../../../browsing-clothing.jpg";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../store/states";
import { useRecoilState } from "recoil";
function Header() {
  const [logIn, setLogIn] = useRecoilState(isLoggedIn);
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-temp h-10 max-w-[100%] flex justify-between items-center">
        <div className="flex text-center">
          <h1
            onClick={() => {
              navigate("/");
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            Home
          </h1>
          <h1
            onClick={() => {
              navigate("/about");
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            About
          </h1>
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            Contact
          </h1>
        </div>
        <div className="flex justify-between">
          {logIn === true ? (
            <img
              width="20"
              height="5"
              src="https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png"
              alt="shopping-cart--v1"
              className="cursor-pointer"
              onClick={() => {
                navigate("/checkout");
              }}
            />
          ) : (
            <></>
          )}
          <h1
            onClick={() => {
              navigate("/login");
            }}
            className="text-base text-white font-display mr-3 hover:underline cursor-pointer"
          >
            {logIn === true ? "" : "Login"}
          </h1>
          <h1
            onClick={() => {
              navigate("/signup");
              setLogIn(false);
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            {logIn === true ? "Logout" : "Signup"}
          </h1>
        </div>
      </div>
      <div className="h-16 max-w-[100%] flex justify-center items-center">
        <h1
          onClick={() => {
            navigate("/men");
          }}
          className="text-base text-black font-display mx-7 hover:underline cursor-pointer"
        >
          Men
        </h1>
        <h1
          onClick={() => {
            navigate("/women");
          }}
          className="text-base text-black font-display mx-7 hover:underline cursor-pointer"
        >
          Women
        </h1>
        <h1
          onClick={() => {
            navigate("/kids");
          }}
          className="text-base text-black font-display mx-7 hover:underline cursor-pointer"
        >
          Kids
        </h1>
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Brands
        </h1>
        <h1 className="text-base text-black font-display mx-7 hover:underline cursor-pointer">
          Sale
        </h1>
      </div>
      <div className="relative">
        <img src={coverpic}></img>
        <button className="bg-yellow rounded-full w-40 h-14 font-display font-bold absolute top-1/3 right-[600px] hover:scale-125 duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Header;
