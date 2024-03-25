import coverpic from "../../ui/illustrations/browsing-clothing.jpg";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../store/states";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { checkoutAtom } from "../../store/states";
import { userId } from "../../store/states";
import { useSpring, animated } from "@react-spring/web";
function Header() {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const [logIn, setLogIn] = useRecoilState(isLoggedIn);
  const [, setuid] = useRecoilState(userId);
  const [, setC] = useRecoilState(checkoutAtom);
  useEffect(() => {
    if (window.localStorage.getItem("token") != "") {
      fetch(`http://ec2-13-49-228-98.eu-north-1.compute.amazonaws.com/user/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: window.localStorage.getItem("id"),
        }),
      })
        .then((x) => x.json())
        .then((y) => {
          setC(y.products);
          setLogIn(true);
          setuid(y._id);
        });
    }
  }, []);
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
            className="text-base text-white font-display mr-3 hover:underline cursor-pointer"
          >
            {logIn === true ? "" : "Login"}
          </h1>
          <h1
            onClick={() => {
              navigate("/signup");
              setLogIn(false);
              window.localStorage.setItem("token", "");
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
      <div className="relative">
        <animated.img style={springs} src={coverpic}></animated.img>
        <button className="bg-yellow rounded-full w-40 h-14 font-display font-bold absolute top-1/3 right-1/2 hover:scale-125 duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Header;
