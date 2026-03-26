import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import {Navbar,Welcome,Dock,Home} from "#components";
import {Terminal,Safari,Resume,Finder,TextWindow,Contact} from "#windows";



const App = () => {
  return (
    <main>
       <Navbar/>
       <Welcome/>
       <Dock/>
       <Terminal/>
       <Safari/>
       <Resume/>
       <Finder/>
       <TextWindow/>
       <Contact/>
       <Home/>
    </main>
  )
}

export default App
