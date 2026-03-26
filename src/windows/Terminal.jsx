import WindowControlls from "#components/WindowControlls";
import { techStack } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Check, Flag } from "lucide-react";


const Terminal = () => {
   return (
      <>
         <div id="window-header">
            <WindowControlls target="terminal"/>
            <h2>Skills Stack</h2> {/* Fixed typo 'Teck' */}
         </div>

         <div className="techstack">
            <p>
               <span className="font-bold">@Fahad % </span>
               show skill stack
            </p>
            <div className="label flex">
               <p className="w-32">Skills</p>
               <p>Technologies</p>
            </div>
            <ul className="content">
               {techStack.map(({ category, items }) => (
                  <li key={category} className="flex items-start">
                     <Check className="mr-2 mt-1" size={16} /> 
                     <h3 className="font-semibold w-32 shrink-0">{category}</h3>
                     <ul className="flex flex-wrap gap-x-2">
                        {items.map((item, i) => ( 
                           <li key={item}>
                              {item}{i < items.length - 1 ? "," : ""}
                           </li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>

            <div className="footnote">
               <p>
                  <Check size={20}/> 4 of 4 stacks loaded successfully
               </p>
               <p className="text-black">
                   <Flag size={15} fill="black"/> Render time: 6ms
               </p>
            </div>
         </div>
      </>
   )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;