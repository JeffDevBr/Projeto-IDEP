// components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log('Pathname changed to:', pathname);
        window.scrollTo(0, 0);
        console.log('Scrolled to top');
    }, [pathname]);

    return null;
}

export default ScrollToTop;
