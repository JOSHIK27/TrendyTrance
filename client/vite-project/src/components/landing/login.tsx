import temp from "../../ui/illustrations/Login.gif";
import Nav from "./nav";
import { loginPasswordAtom, loginUserAtom } from "../../store/states";
import { isLoggedIn } from "../../store/states";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userId } from "../../store/states";
import { checkoutAtom } from "../../store/states";
export default function Login() {
  const [user, setUser] = useRecoilState(loginUserAtom);
  const [checkout, setCheckOut] = useRecoilState(checkoutAtom);
  const [password, setPassword] = useRecoilState(loginPasswordAtom);
  const [login, isLogin] = useRecoilState(isLoggedIn);
  const [id, setId] = useRecoilState(userId);
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <img src={temp}></img>
        <div className="mt-44 relative">
          <div className="flex flex-col">
            <div className="mb-2 flex flex-col">
              <input
                placeholder="enter your email here"
                className="border-2 w-72 h-[52px] px-4 my-2 rounded"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              ></input>
            </div>
            <div className="mb-1 flex flex-col">
              <input
                placeholder="enter your password here"
                className="border-2 w-72 h-[52px] px-4 my-2 rounded"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <button
            onClick={() => {
              fetch("http://localhost:3000/user/login", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  user: user,
                  password: password,
                }),
              })
                .then((resp) => {
                  return resp.json();
                })
                .then((token) => {
                  if (
                    token[0] !== "auth failed" &&
                    token[0] != "ENTER A VALID INPUT"
                  ) {
                    console.log(token[0], token[1], token[2][0].products);
                    window.localStorage.setItem("token", token[0]);
                    isLogin(true);
                    setId(token[1]);
                    setCheckOut(token[2][0].products);
                    navigate("/");
                  } else if (token[0] == "ENTER A VALID INPUT") {
                    alert("ENTER A VALID INPUT");
                  } else {
                    alert("Login Failed");
                  }
                });
            }}
            className="absolute left-[65px] mt-4 rounded-full px-12 py-2 bg-temp hover:border-0 text-white hover:bg-cur hover:scale-110 duration-300"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
