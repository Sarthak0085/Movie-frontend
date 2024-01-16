import { createContext, useMemo, useState } from "react";


export const SidebarContext = createContext();

function DrawerContext({ children }) {
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [progress, setProgress] = useState(0);
    const toggleDrawer = () => setMobileDrawer(!mobileDrawer);

    const value = useMemo(
        () => ({ mobileDrawer, setProgress, progress, toggleDrawer }),
        [progress, mobileDrawer]);

    return (
        <SidebarContext.Provider value= { value } > { children } </SidebarContext.Provider>
    )
}

export default DrawerContext;