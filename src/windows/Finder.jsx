import { WindowControlls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import useLocationStore from "#store/location"
import { Search } from "lucide-react"
import { locations } from "#constants/index.js"
import clsx from "clsx"
import useWindowStore from "#store/window"


const Finder = () => {  
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
      if (item.fileType === "pdf") return openWindow("resume");
      if(item.kind === "folder") return setActiveLocation(item);
      if(["url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");
       if (item.fileType === "txt") return openWindow("txtfile", item);
    }


    const renderList = (name, items) =>
        <div>
            <h3>{name}</h3>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id} className={clsx(item.id === activeLocation.id ? "active" : "not-active")} onClick={() => {
                            setActiveLocation(item);
                        }}>
                            <img src={item.icon} className="w-4" alt={item.name} />
                            <p className="text-sm font-medium truncate" >{item.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>

    return (
        <>
            <div id="window-header">
                <WindowControlls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("Favourites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>
                <ul className="content">
                    {activeLocation?.children.map((item) => {
                        return <li key={item.id} className={item.position} onClick={() => {
                            openItem(item)
                        }}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    })}
                </ul>
            </div>


        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow
