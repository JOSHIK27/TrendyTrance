import { useRecoilValue } from "recoil";
import { checkoutAtom } from "../store/states.tsx";
export default function CheckOut() {
  const items = useRecoilValue(checkoutAtom);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="pl-20	font-atak font-medium	text-[40px]">Your cart</h1>
        <h1 className="pr-20 pt-6 font-atak font-normal text-[16px]">
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
          return <img src={x} className="h-[140px] w-[128px]"></img>;
        })}
      </div>
    </div>
  );
}
