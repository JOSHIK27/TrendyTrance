import Nav from "./landing/nav";
import Footer from "./landing/footer";
export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="h-[600px] flex flex-wrap bg-temp justify-evenly mb-24 sm:h-[300px] sm:flex-nowrap">
        <div className="mt-12">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/FFFFFF/address--v1.png"
            alt="address--v1"
            className="mx-auto"
          />
          <h1 className="text-white mt-4">
            <br />
            LHHB 218 Heriot-Watt University
            <br />
            <br /> Edinburgh, United Kingdom
          </h1>
        </div>
        <div className="mt-12">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
            alt="phone"
            className="mx-auto"
          />
          <h1 className="text-white mt-4">
            <br />
            +44 7393581307
            <br /> <br /> +91 8688450833
          </h1>
        </div>
        <div className="mt-12">
          <img
            className="mx-auto"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/mail.png"
            alt="mail"
          />
          <h1 className="text-white mt-4">
            <br />
            JOSHIKROSHAN4021@GMAIL.COM <br />
            <br /> JN2044@HW.AC.UK
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
