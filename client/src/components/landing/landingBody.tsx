import women from "../../images/women/product_2.png";
import men from "../../images/men/product_21.png";
import kid from "../../images/kids/product_28.png";
import earphone from "../../images/earphones/earphones_b_3.png";
import headphone from "../../images/headphones/headphones_b_4.png";
import watch from "../../images/watches/watch_3.png";
import Review from "../subComponents/reviewCard";
import { animated } from "@react-spring/web";
import { useInView } from "@react-spring/web";
function LandingBody() {
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 1000 },
  }));

  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="font-display text-[40px] italic">
          Discover Your Style - Where Fashion Meets Elegance
        </h1>
      </div>
      <animated.div
        ref={ref}
        style={springs}
        className="flex flex-wrap justify-evenly my-20 sm:max-lg:flex-wrap"
      >
        <div className="flex flex-col">
          <img className="rounded-lg" src={women}></img>
          <h1 className="text-center text-[20px] mt-[10px]">Explore</h1>{" "}
        </div>

        <div>
          <img className="rounded-lg" src={men}></img>
          <h1 className="text-center text-[20px] mt-[10px]">Explore</h1>
        </div>
        <div>
          <img className="rounded-lg" src={kid}></img>
          <h1 className="text-center text-[20px] mt-[10px]">Explore</h1>
        </div>
      </animated.div>

      <div className="flex flex-col items-center justify-center sm:flex-col lg:flex-row">
        <img className="h-[600px] w-[600px]" src={earphone}></img>
        <h1 className="mr-8 font-display text-[40px] italic">
          Experience Sound in Style: Unleash the Beat of Innovation
        </h1>
      </div>

      <div className="flex flex-row-reverse items-center sm: flex-col lg:flex-row-reverse">
        <img className="h-[600px] w-[600px]" src={headphone}></img>
        <h1 className="ml-40 font-display text-[40px] italic">
          Unplug and Elevate Your Audio Experience
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center sm: flex-col lg:flex-row">
        <img className="h-[600px] w-[600px]" src={watch}></img>
        <h1 className="mr-8 font-display text-[40px] italic">
          Timeless Elegance, Right at Your Wrist
        </h1>
      </div>
      <div className="bg-rev">
        <Review />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9A67E"
          fill-opacity="1"
          d="M0,160L80,160C160,160,320,160,480,133.3C640,107,800,53,960,58.7C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
export default LandingBody;
