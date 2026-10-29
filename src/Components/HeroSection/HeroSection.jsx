import { HeroSectionImage, PeopleHero, StoppageHero, TablerHero } from "../../assets";
import Button from "../Button/Button";
import HeroSectionCard from "../HeroSectionCard/HeroSectionCard";

const HeroSection = () => {
    const heroBoldColor = "font-extrabold text-[64px] text-white "
    const heroSectionCardMenu = [
        {
            icon: <PeopleHero />,
            title: "500K+",
            subTitle: "Registered users"
        },
        {
            icon: <TablerHero />,
            title: "1.7 lacks",
            subTitle: "Tickets sold"
        },
        {
            icon: <StoppageHero />,
            title: "80K+",
            subTitle: "Rental partners"
        },
    ]
    return (
        <section className="relative max-w-6xl mx-auto" style={{ backgroundImage: `url(${HeroSectionImage})` }} >
            <div className={`  h-137.5 pt-17.5 px-53.5 pb-33.75 font-raleway text-center `}>

                <div className={`  ${heroBoldColor}`}>
                    <p >End-to-End Travel with</p>
                    <p className="text-primary">Shanti Paribahan</p>
                </div>
                <p className="font-inter text-lg leading-7.5 text-white mt-4
          ">Yes, you can run unit tests and view the results directly within the app. The integrated testing features allow for a streamlined .</p>
                <Button className="px-7.5 py-5.25 bg-primary rounded-xl font-bold text-xl" title="Buy Tickets" />
            </div>
            <div className="flex justify-center">

                <div className="flex gap-5.75 mt-10 absolute -bottom-17 ">
                    {
                        heroSectionCardMenu.map((item) => <HeroSectionCard logo={item.icon} title={item.title} subTitle={item.subTitle} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default HeroSection;