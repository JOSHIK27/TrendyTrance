import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../store/states";
import aim from "../../ui/illustrations/Milestones of business projects-bro.png";
import Footer from "../landing/footer";
import { useRecoilState } from "recoil";
export default function About() {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useRecoilState(isLoggedIn);
  return (
    <div>
      <div className="bg-temp h-10 max-w-[100%] flex justify-between items-center">
        <div className="flex text-center">
          <h1
            onClick={() => {
              navigate("/");
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            Home
          </h1>
          <h1 className="text-base text-white font-display mx-7 hover:underline cursor-pointer">
            About
          </h1>
          <h1
            onClick={() => {
              navigate("/contact");
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            Contact
          </h1>
        </div>
        <div className="flex justify-between">
          {logIn === true ? (
            <img
              width="20"
              height="5"
              src="https://img.icons8.com/ios/50/FFFFFF/shopping-cart--v1.png"
              alt="shopping-cart--v1"
              className="cursor-pointer"
              onClick={() => {
                navigate("/checkout");
              }}
            />
          ) : (
            <></>
          )}
          <h1
            onClick={() => {
              navigate("/login");
            }}
            className="text-base text-white font-display mr-3 hover:underline cursor-pointer"
          >
            {logIn === true ? "" : "Login"}
          </h1>
          <h1
            onClick={() => {
              navigate("/signup");
              setLogIn(false);
            }}
            className="text-base text-white font-display mx-7 hover:underline cursor-pointer"
          >
            {logIn === true ? "Logout" : "Signup"}
          </h1>
        </div>
      </div>
      <div className="bg-wave h-100 flex-col justify-center">
        <div className="text-4xl pt-10 font-medium text-center">About Us</div>
        <div className="text-2xl font-normal mt-10 flex justify-center">
          <p className="w-[800px] p-4">
            Welcome to TRENDYTRANCE! At TRENDYTRANCE, we are passionate about
            providing high-quality products and excellent service to our valued
            customers. Our commitment is to create an exceptional shopping
            experience, and we take pride in offering a wide range of products
            to meet your needs. Our Mission: "To bring joy and satisfaction to
            our customers by offering innovative and reliable products, backed
            by top-notch customer service. We aim to exceed expectations and
            build lasting relationships with our customers.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FAE7C3"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,106.7C672,75,768,53,864,69.3C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="flex flex-col sm:flex-row  justify-center flex-wrap">
        <img src={aim} width={450} height={450}></img>
        <div className="ml-40 w-80">
          <div className="text-4xl">Our Mission</div>
          <p className="text-lg mt-12">
            At the heart of TRENDYTRANCE's ethos lies a mission that transcends
            traditional business paradigms. Grounded in our unwavering
            commitment to [core belief or principle], we are fueled by the
            conviction that [reiterate the impact you want to make]. Our
            overarching mission encompasses [specific goals or outcomes], as we
            tirelessly work to surpass expectations and imprint a lasting
            positive influence on [industry/community/etc.].
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
