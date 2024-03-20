import Nav from "../landing/nav";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkoutAtom } from "../../store/states";
import { isLoggedIn } from "../../store/states";
import { userId } from "../../store/states";
import { useNavigate } from "react-router-dom";
import m1 from "../../images/earphones/earphones_a_1.png";
import m2 from "../../images/earphones/earphones_a_2.png";
import m3 from "../../images/earphones/earphones_a_3.png";
import m4 from "../../images/earphones/earphones_a_4.png";
import m5 from "../../images/earphones/earphones_b_1.png";
import m6 from "../../images/earphones/earphones_b_2.png";
import m7 from "../../images/earphones/earphones_b_3.png";
import m8 from "../../images/earphones/earphones_b_4.png";
import m9 from "../../images/earphones/earphones_c_1.png";
import m10 from "../../images/earphones/earphones_c_2.png";
import m11 from "../../images/earphones/earphones_c_3.png";
import m12 from "../../images/earphones/earphones_c_4.png";

export default function Earphones() {
  const login = useRecoilValue(isLoggedIn);
  const uId = useRecoilValue(userId);
  const navigate = useNavigate();
  const setCheckOutValue = useSetRecoilState(checkoutAtom);
  const arr = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];
  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center">
        {arr.map((x) => {
          return (
            <div className="mx-16">
              <img src={x} className="h-[350px] w-[350px]"></img>
              <div className="bg-slate-600 w-[350px] h-96">
                <h1 className="!mt-4 mb-4">The Winter Hoodie</h1>
                <h1 className="text-xl">20.0£ GBP</h1>
                <select
                  className="border-[1px] border-green-900 w-[350px] h-10 mt-4"
                  name="cars"
                  id="cars"
                >
                  <option value="volvo">small</option>
                  <option value="saab">medium</option>
                  <option value="mercedes">large</option>
                </select>
                <button
                  onClick={() => {
                    if (!login) {
                      alert("Please Login");
                      return;
                    }
                    fetch(`${import.meta.env.VITE_SERVER}user/cart`, {
                      method: "post",
                      headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                      body: JSON.stringify({ id: uId, imageUrl: x }),
                    })
                      .then((x) => {
                        return x.json();
                      })
                      .then((y) => {
                        if (y.auth) {
                          alert("UNAUTHORISED");
                          return;
                        }
                        setCheckOutValue(y.products);
                        navigate("/checkout");
                      });
                  }}
                  className="bg-temp text-white mt-6 w-[350px] rounded-full w-40 h-14 font-display font-bold hover:bg-temp2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
