import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types";

const ScrollOnTop = ({ children }) => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            {
                children
            }
        </>
    )
}

ScrollOnTop.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ScrollOnTop