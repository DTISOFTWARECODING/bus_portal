
import { OfferCard } from "../../assets";

const Offers = () => {
    const couponMenu = [
        { discount: "15%", expiryDate: "January 2024", couponCode: "NEW15", color: "#FFBF0F" },
        { discount: "20%", expiryDate: "February 2024", couponCode: "SAVE20", color: "#FF6B6B" },
        { discount: "10%", expiryDate: "March 2024", couponCode: "DEAL10", color: "#4CAF50" },
        { discount: "25%", expiryDate: "April 2024", couponCode: "FLAT25", color: "#2196F3" },
        { discount: "30%", expiryDate: "May 2024", couponCode: "MEGA30", color: "#9C27B0" },
        { discount: "12%", expiryDate: "June 2024", couponCode: "SAVE12", color: "#FF9800" },
        { discount: "18%", expiryDate: "July 2024", couponCode: "SHOP18", color: "#00BCD4" },
        { discount: "35%", expiryDate: "August 2024", couponCode: "BIG35", color: "#E91E63" },
        { discount: "40%", expiryDate: "September 2024", couponCode: "SALE40", color: "#795548" },
        { discount: "50%", expiryDate: "October 2024", couponCode: "HALF50", color: "#607D8B" }
    ];

    return (
        <section className="mt-47.5 max-w-6xl mx-auto">
            <p className="text-center font-bold text-[40px] text-secondary">
                Best offers for you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {couponMenu.map((item, index) => (
                    <div key={index} className="relative w-full">

                        <div className="absolute inset-0 p-8 flex justify-between items-center">
                            <div>
                                <p className="font-inter text-[40px] leading-9 text-secondary/80 font-bold">
                                    {item.discount} OFF
                                </p>

                                <p className="font-inter font-semibold text-xl leading-9 text-secondary/80">
                                    on your next purchase
                                </p>

                                <p className="font-inter font-medium text-lg leading-9 text-secondary/50">
                                    use by {item.expiryDate}
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-[32px] text-secondary">
                                    {item.couponCode}
                                </p>

                                <p className="font-medium text-lg text-secondary/40">
                                    Coupon Code
                                </p>
                            </div>
                        </div>

                        <OfferCard style={{ color: item.color }} />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Offers;
