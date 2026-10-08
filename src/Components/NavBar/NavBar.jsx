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
        <seciton  className="border font-raleway flex justify-between max-w-6xl mx-auto my-14">
           <p>Shanti-Ticket</p>
           <div className="flex gap-14">
            {
                navMenu.map((item)=>
                <div key={item.path}>
                  <p>{item.pathName}</p>
                </div>)
            }
           </div>
           <Button/>
        </seciton>
    );
};

export default NavBar;