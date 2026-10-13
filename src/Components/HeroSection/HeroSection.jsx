import { HeroSectionImage } from "../../assets";
import Button from "../Button/Button";

const HeroSection = () => {
    const heroBoldColor = "font-extrabold text-[64px] text-white "
    return (
        <section style={{ backgroundImage: `url(${HeroSectionImage})` }} className={`max-w-6xl mx-auto border h-137.5 pt-17.5 px-53.5 pb-33.75 font-raleway text-center`}>
            <div className={`border  ${heroBoldColor}`}>
                <p >End-to-End Travel with</p>
                <p className="text-primary">Shanti Paribahan</p>
            </div>
          <p className="font-inter text-lg leading-7.5 text-white mt-4
          ">Yes, you can run unit tests and view the results directly within the app. The integrated testing features allow for a streamlined .</p>
          <Button className="px-7.5 py-5.25 bg-primary" title="Buy Tickets"/>
        </section>
    );
};

export default HeroSection;