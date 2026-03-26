import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, WindowKey) => {
    const Wrapped = (props) => {
        const { windows, focusWindow } = useWindowStore();
        const windowState = windows[WindowKey];
        const { zIndex, isOpen, isMinimized, isMaximized } = windowState;
        const ref = useRef(null);

        // Open animation
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;
            el.style.display = "block";
            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
            );
        }, [isOpen]);

        // Draggable
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            const [instance] = Draggable.create(el, { onPress: () => focusWindow(WindowKey) });
            return () => instance.kill();
        }, []);

        // isOpen + isMinimized — display control
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen && !isMinimized ? "block" : "none";
        }, [isOpen, isMinimized]);

        // isMaximized — size control
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            if (isMaximized) {
                el.style.width = "100vw";
                el.style.height = "100vh";
                el.style.top = "0";
                el.style.left = "0";
                el.style.borderRadius = "0";
            } else {
                el.style.width = "";
                el.style.height = "";
                el.style.top = "";
                el.style.left = "";
                el.style.borderRadius = "";
            }
        }, [isMaximized]);

        return (
            <section
                id={WindowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};

export default WindowWrapper;