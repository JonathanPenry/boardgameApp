import React, { useEffect, useState } from "react";

export default function Scrolltop() {
    const [isVisible, setIsVisible] = useState(false)

    //Set the visibility of the scroll 
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set top as 0
    const scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible &&
                <div onClick={scrollToTop}>
                    <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top' />
                </div>}
        </div>
    );
};

export default scrolltop;