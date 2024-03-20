import { checkoutAtom } from "../../store/states.tsx";
import Nav from "../landing/nav.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import k1 from "../../images/kids/product_25.png";
import k2 from "../../images/kids/product_26.png";
import k3 from "../../images/kids/product_27.png";
import k4 from "../../images/kids/product_28.png";
import k5 from "../../images/kids/product_29.png";
import k6 from "../../images/kids/product_30.png";
import k7 from "../../images/kids/product_31.png";
import k8 from "../../images/kids/product_32.png";
import k9 from "../../images/kids/product_33.png";
import k10 from "../../images/kids/product_34.png";
import k11 from "../../images/kids/product_35.png";
import k12 from "../../images/kids/product_36.png";
import { isLoggedIn } from "../../store/states.tsx";
import { userId } from "../../store/states.tsx";
import { useNavigate } from "react-router-dom";
export default function Kids() {
  const login = useRecoilValue(isLoggedIn);
  const uId = useRecoilValue(userId);
  const setCheckOutValue = useSetRecoilState(checkoutAtom);
  const arr = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12];
  const navigate = useNavigate();
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
