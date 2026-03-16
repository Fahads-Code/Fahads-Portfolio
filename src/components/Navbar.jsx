import { navLinks, navIcons } from "#constants/index"
import dayjs from "dayjs"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="" />
        <p className="font-bold">Fahad's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => ( // yahan pr round bracket is liye lagae hain taake return keyword ka use na karna padde, auto return ho jayee
            <li key={id}>
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
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar
