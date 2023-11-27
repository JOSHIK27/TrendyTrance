import temp from "../../ui/illustrations/Login.gif";
import Nav from "./nav";
import { loginPasswordAtom, loginUserAtom } from "../../store/states";
import { isLoggedIn } from "../../store/states";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userId } from "../../store/states";
export default function Login() {
  const [user, setUser] = useRecoilState(loginUserAtom);
  const [password, setPassword] = useRecoilState(loginPasswordAtom);
  const [login, isLogin] = useRecoilState(isLoggedIn);
  const [id, setId] = useRecoilState(userId);
  console.log(user, password);
  const navigate = useNavigate();
  console.log(id);
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
                  if (token[0] !== "auth failed") {
                    window.localStorage.setItem("token", token);
                    isLogin(true);
                    setId(token[1]);
                    navigate("/");
                  } else {
                    alert("loggin failed");
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
