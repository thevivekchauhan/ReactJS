import React,{useEffect,useState} from 'react';

function ResizeCompo(){
    const [windowWidth,setWindowsWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => setWindowsWidth(window.innerWidth);
        console.log("Event Listener added");
        window.addEventListener('resize',handleResize);
    
        return() => {
            console.log("Event Listener removed");
            window.removeEventListener('resize',handleResize)
        };
    }, []);
    return(
        <div>
            <h1>Window Width: {windowWidth}px</h1>
        </div>
    )
}


export default ResizeCompo;