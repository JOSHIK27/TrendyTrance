import { checkoutAtom } from "../../store/states.tsx";
import Nav from "../landing/nav.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import w1 from "../../images/women/product_1.png";
import w2 from "../../images/women/product_2.png";
import w3 from "../../images/women/product_3.png";
import w4 from "../../images/women/product_4.png";
import w5 from "../../images/women/product_5.png";
import w6 from "../../images/women/product_6.png";
import w7 from "../../images/women/product_7.png";
import w8 from "../../images/women/product_8.png";
import w9 from "../../images/women/product_9.png";
import w10 from "../../images/women/product_10.png";
import w11 from "../../images/women/product_11.png";
import w12 from "../../images/women/product_12.png";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../store/states.tsx";
import { userId } from "../../store/states.tsx";

export default function Women() {
  const login = useRecoilValue(isLoggedIn);
  const navigate = useNavigate();
  const uId = useRecoilValue(userId);
  const setCheckOutValue = useSetRecoilState(checkoutAtom);
  const women = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12];
  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center">
        {women.map((x) => {
          return (
            <div className="mx-16">
              <img src={x}></img>
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
                    fetch(`http://localhost:3000/user/cart`, {
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
