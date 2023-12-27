import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "../../store/states";
export default function Nav() {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useRecoilState(isLoggedIn);
  return (
    <>
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
          <h1
            onClick={() => {
              navigate("/contact");
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
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
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            {logIn === true ? "" : "Login"}
          </h1>
          <h1
            onClick={() => {
              if (logIn) {
                setLogIn(false);
                window.localStorage.setItem("token", "");
              }
              navigate("/signup");
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
        <h1
          onClick={() => {
            navigate("/headphones");
          }}
          className="text-base text-black font-display mx-7 hover:underline cursor-pointer"
        >
          Headphones
        </h1>
        <h1
          onClick={() => {
            navigate("/earphones");
          }}
          className="text-base text-black font-display mx-7 hover:underline cursor-pointer"
        >
          Earphones
        </h1>
      </div>
    </>
  );
}
