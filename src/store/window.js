// Zustand:
// Zustand React apps me data (state) ko global level par manage karne ka easy tareeqa hai.

import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";
import { immer } from "zustand/middleware/immer"; // Immer ek library hai jo immutable state update ko simple banati hai aur tumhe direct mutation jaisa syntax use karne deti hai.
import { create } from "zustand"; // Immudatble means: Original data ko modify nahi karte, balki uska naya copy bana kar change karte hain.

const useWindowStore = create(immer((set) => ({

    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.isMinimized = false;  // ← yeh add karo
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
    }),
    minimizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.isMaximized = false;
        if (!win) return;
        
        win.zIndex = INITIAL_Z_INDEX;
    }),

    maximizeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMaximized = !win.isMaximized; // toggle maximize/restore
        win.zIndex = state.nextZIndex++;
    }),

})))

export default useWindowStore