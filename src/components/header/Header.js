import {useEffect} from "react";
import darkstyles from "../Theme/darkstyles";
import "./Header.css"

export default function Header() {


    useEffect(() => {
        if (window['localStorage'] !== null) {
            window.localStorage.getItem('theme') === 'dark'
                ? switchDarkTheme()
                : window.localStorage.setItem('theme', 'light')
        }
    }, [])

    const switchDarkTheme = () => {
        const style = document.createElement('style');
        document.body.append(style);
        style.innerHTML = darkstyles;
    }


    return (
        <div className={'container'}>
            <input type="checkbox" id={"switch1"} className={'switch'}/>
            <label className="switch-for" for="switch1"> Dark</label>
            {/*<button onClick={() => {*/}
            {/*    window.localStorage.setItem('theme', 'light')*/}
            {/*    window.location.reload();*/}
            {/*}}>go light*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    window.localStorage.setItem('theme', 'dark')*/}
            {/*    window.location.reload();*/}
            {/*}}>go dark*/}
            {/*</button>*/}

        </div>
    );
}
