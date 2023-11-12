import temp from "../../ui/illustrations/Login.gif";
import Nav from "./nav";
export default function Login() {
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
              ></input>
            </div>
            <div className="mb-1 flex flex-col">
              <input
                placeholder="enter your password here"
                className="border-2 w-72 h-[52px] px-4 my-2 rounded"
              ></input>
            </div>
          </div>
          <button className="absolute left-[65px] mt-4 rounded-full px-12 py-2 bg-temp hover:border-0 text-white hover:bg-cur hover:scale-110 duration-300">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
