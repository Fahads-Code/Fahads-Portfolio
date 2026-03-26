import { navLinks, navIcons } from "#constants/index";
import useWindowStore from "#store/window";
import dayjs from "dayjs";
import { useState, useEffect } from "react"; // React hooks add kiye

const Navbar = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  const { openWindow } = useWindowStore();



  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className="font-bold">Fahad's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={()=> openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        
        <time>{time.format("ddd MMM D h:mm:ss A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;