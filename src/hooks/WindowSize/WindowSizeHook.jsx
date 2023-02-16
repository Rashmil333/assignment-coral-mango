import { useEffect, useState } from 'react'

const WindowSizeHook = () => {
    const [screensize, setScreenSize] = useState({
        x: undefined,
        y: undefined
    });
    useEffect(() => {
        function handleResize() {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return (
        screensize
    )
}

export default WindowSizeHook