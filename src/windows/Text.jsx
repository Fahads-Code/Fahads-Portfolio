import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControlls } from "#components";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;  // ✅ .data lagao wapas

    if (!data) return null;

    const { name, subtitle, image, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControlls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-4 bg-white">
                {subtitle && (
                    <p className="text-sm text-gray-500 italic">{subtitle}</p>
                )}
                
                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;