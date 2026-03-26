import { WindowControlls } from "#components"
import { socials } from "#constants/index"
import WindowWrapper from "#hoc/WindowWrapper"


const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="contact"/>
         <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-3">
         <img src="/images/adrian.jpg" alt="Fahad" className="w-20 h-24 rounded-full" />
          <h3>Let's Connect</h3>
          <p>Got an idea? A bug to squash? Or just wanna talk tech? I,m in</p>
          <p>fahadmehmood.dev@gmail.com</p>
          <ul>
            {socials.map(({id, bg, link, icon, text})=>{
              return <li  key={id} style={{backgroundColor: bg}}>
                    <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>
                </li>
            })} 
          </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow
