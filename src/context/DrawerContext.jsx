import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const SidebarContext = createContext();

function DrawerContext({ children }) {
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const [progress, setProgress] = useState(0);
    const toggleDrawer = () => setMobileDrawer(!mobileDrawer);

    const value = useMemo(
        () => ({ mobileDrawer, setProgress, progress, toggleDrawer }),
        [progress, mobileDrawer]);

    return (
        <SidebarContext.Provider value={value} > {children} </SidebarContext.Provider>
    )
}

DrawerContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DrawerContext;