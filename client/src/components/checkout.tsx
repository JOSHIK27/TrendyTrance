import { useRecoilState } from "recoil";
import { checkoutAtom } from "../store/states.tsx";
import { useNavigate } from "react-router-dom";
import { userId } from "../store/states.tsx";
import { useEffect } from "react";
export default function CheckOut() {
  const [items, setItems] = useRecoilState(checkoutAtom);
  const [id, setId] = useRecoilState(userId);
  const Navigate = useNavigate();

  if (window.localStorage.getItem("token") == null)
    return <h1>Unauthorised</h1>;
  useEffect(() => {

    fetch(`${import.meta.env.VITE_SERVER}user`, {
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
        setItems(y.products);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="pl-20	font-atak font-medium	text-[40px]">Your cart</h1>
        <h1
          onClick={() => {
            Navigate("/");
          }}
          className="pr-20 pt-6 font-atak font-normal text-[16px] cursor-pointer"
        >
          Continue shopping
        </h1>
      </div>
      <div className="flex justify-between mt-12 mb-6">
        <div className="font-atak pl-20 font-normal text-[10px] leading-3	">
          PRODUCT
        </div>
        <div className="flex">
          <h1 className="font-atak pr-80 font-normal text-[10px] leading-3	">
            QUANTITY
          </h1>
          <h1 className="font-atak pr-20 font-normal text-[10px] leading-3">
            TOTAL
          </h1>
        </div>
      </div>
      <div className="h-px pl-20 border-[0.1px] pr-20"></div>
      <div>
        {items.map((x) => {
          if (x.imageUrl == "") return null;
          return (
            <div className="flex justify-between">
              <img
                src={x.imageUrl}
                className="h-[140px] w-[128px] ml-12 mb-2"
              ></img>
              <div className="flex">
                <div className="flex font-atak pr-80 font-normal text-[14px] leading-3 pt-16">
                  <div
                    onClick={() => {
                      fetch(`${import.meta.env.VITE_SERVER}user/decrement`, {
                        method: "post",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          id: id,
                          url: x.imageUrl,
                        }),
                      })
                        .then((resp) => {
                          return resp.json();
                        })
                        .then((x) => {
                          setItems(x.products);
                        });
                    }}
                    className="mr-2 cursor-pointer"
                  >
                    -
                  </div>
                  {x.itemCount}{" "}
                  <div
                    className="ml-2 cursor-pointer"
                    onClick={() => {
                      fetch(`${import.meta.env.VITE_SERVER}user/increment`, {
                        method: "post",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          id: id,
                          url: x.imageUrl,
                        }),
                      })
                        .then((resp) => {
                          return resp.json();
                        })
                        .then((x) => {
                          setItems(x.products);
                        });
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="ont-atak pr-20 font-normal text-[16px] leading-3 pt-16">
                  {x.itemCount * 20}£
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
