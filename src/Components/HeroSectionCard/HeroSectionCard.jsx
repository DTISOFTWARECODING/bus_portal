

const HeroSectionCard = ({logo,title,subTitle}) => {
    return (
        <section className="flex gap-3  justify-between   rounded-3xl bg-white border-primary border-b-[3px] py-8 pl-8 pr-13.25">
           <p>{logo}</p>
           <div>
            <p className="font-inter font-bold text-4xl text-secondary">{title}</p>
            <p className="font-inter text-lg text-secondary/60">{subTitle}</p>
            </div>
        </section>
    );
};

export default HeroSectionCard;