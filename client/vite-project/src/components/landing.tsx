import Header from "./landing/header";
import LandingBody from "./landing/landingBody";
import Footer from "./landing/footer";
import { useEffect } from "react";
import { checkoutAtom } from "../store/states";
import { useRecoilState } from "recoil";

export default function Landing() {
  const [getCheckOut, setCheckOut] = useRecoilState(checkoutAtom);
  return (
    <>
      <Header />
      <LandingBody />
      <Footer />
    </>
  );
}
