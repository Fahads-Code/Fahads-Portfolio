// React ka useRef hook ek special hook hai jo kisi value ya DOM element ka reference (address) store karta hai — aur component re-render bhi nahi karta.
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => {
    return <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
      {char === '' ? '\u00A0' : char} 
      {/*{/*fontVariationSettings CSS property hai jo variable fonts ko control karti hai.*/}
    </span>
  })
} 

const FONT_WEIGHTS = {
  subTitle: {min: 100, max:400, default:100},
  title: {min: 400, max:900, default:400},
}

const setUpTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
  return gsap.to(letter, {
    duration,
    ease: "power2.out",
    overwrite: "auto",
    fontVariationSettings: `'wght' ${weight}`,
  });
};

  const handleMouseMove = (event) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = event.clientX - left;

    letters.forEach(letter => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach(letter => {
      animateLetter(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(()=>{
    setUpTextHover(titleRef.current, "title");
    setUpTextHover(subTitleRef.current, "subTitle");
  },[]);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>{renderText("Hey, I'm Fahad! Welcome to my", "text-3xl font-georama", 100)}</p> {/*yahan pr p ka content subTitleRef main store ho gaya hai, re-rendering pr bhi remove nahi hoga*/}
      <h1 ref={titleRef} className="mt-7">{renderText("Portfolio", "text-9xl italic font-georama")}</h1>  {/*yahan pr h1 ka content titleRef main store ho gaya hai, re-rendering pr bhi remove nahi hoga*/}

      <div className="small-screen">
        <p>This portfolio is specially designed for desktop/tablet screens only.</p>
      </div>
    </section>
  )
}

export default Welcome
