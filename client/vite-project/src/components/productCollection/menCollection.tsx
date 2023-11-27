import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import m1 from "../../images/men/product_13.png";
import m2 from "../../images/men/product_14.png";
import m3 from "../../images/men/product_15.png";
import m4 from "../../images/men/product_16.png";
import m5 from "../../images/men/product_17.png";
import m6 from "../../images/men/product_18.png";
import m7 from "../../images/men/product_19.png";
import m8 from "../../images/men/product_20.png";
import m9 from "../../images/men/product_21.png";
import m10 from "../../images/men/product_22.png";
import m11 from "../../images/men/product_23.png";
import m12 from "../../images/men/product_24.png";
import { userId } from "../../store/states.tsx";
import { checkoutAtom } from "../../store/states.tsx";
import { isLoggedIn } from "../../store/states.tsx";
import Nav from "../landing/nav.tsx";
export default function Men() {
  const checkOutValue = useRecoilValue(checkoutAtom);
  const login = useRecoilValue(isLoggedIn);
  const uId = useRecoilValue(userId);
  const navigate = useNavigate();
  const setCheckOutValue = useSetRecoilState(checkoutAtom);
  const arr = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];

  console.log(checkOutValue);
  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center">
        {arr.map((x) => {
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
                    setCheckOutValue([...checkOutValue, x]);
                    fetch("http://localhost:3000/user/cart", {
                      method: "post",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ id: uId, imageUrl: x }),
                    }).then((x) => {
                      console.log(x);
                    });
                    navigate("/checkout");
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
