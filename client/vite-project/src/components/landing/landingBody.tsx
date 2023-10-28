import women from "../../images/women/product_2.png";
import men from "../../images/men/product_21.png";
import kid from "../../images/kids/product_28.png";
import earphone from "../../images/earphones/earphones_b_3.webp";
import headphone from "../../images/headphones/headphones_b_4.webp";
import watch from "../../images/watches/watch_3.webp";
function LandingBody() {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="font-display text-[40px] italic">
          Discover Your Style - Where Fashion Meets Elegance
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly my-20 sm:max-lg:flex-wrap">
        <div className="flex flex-col">
          <img className="rounded-lg" src={women}></img>
          <h1 className="text-center text-[20px] mt-[10px]">Explore</h1>
        </div>

        <div>
          <img className="rounded-lg" src={men}></img>
          <h1 className="text-center text-[20px] mt-[10px]">Explore</h1>
        </div>
        <div>
          <img className="rounded-lg" src={kid}></img>
          <h1 className="text-center text-[20px] mt-[10px]">Explore</h1>
        </div>
      </div>
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
    </div>
  );
}
export default LandingBody;
