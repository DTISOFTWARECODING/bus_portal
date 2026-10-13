import { BusIcon } from "../../assets";
import { Navpath } from "../../Router/NavPath";
import Button from "../Button/Button";


const NavBar = () => {
     const navMenu=[
        {
            pathName:"Home",
            path:Navpath.Home
        },
        {
            pathName:"About",
            path:Navpath.About
        },
        {
            pathName:"Destination",
            path:Navpath.Destination
        },
        {
            pathName:"Search",
            path:Navpath.Search
        },
     ]
    return (
        <seciton  className=" font-raleway flex justify-between items-center max-w-6xl mx-auto my-14">
           <p className="font-extrabold text-4xl text-secondary">Shanti-Ticket</p>
           <div className="flex gap-14">
            {
                navMenu.map((item)=>
                <div key={item.path}>
                  <p className="font-medium text">{item.pathName}</p>
                </div>)
            }
           </div>
           <Button className="flex rounded-xl border-primary/40 bg-primary/10 border gap-2.5 px-7.5 py-[16.5px]" title="Bus" logo={<BusIcon style={{ color: "#1DD100" }} />} />
        </seciton>
    );
};

export default NavBar;