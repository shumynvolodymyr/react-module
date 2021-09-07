import {useEffect} from "react";
import darkstyles from "../theme/darkstyles";
import './Checkbox.css'

export default function Checkbox() {

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
        <div className={'switch-container'}>
            <input
                type="checkbox"
                id={"switch1"}
                className={'switch'}
                onChange={() => {
                    window.localStorage.getItem("theme") === 'dark'
                        ? window.localStorage.setItem('theme', 'light')
                        : window.localStorage.setItem('theme', 'dark');
                    window.location.reload();
                }}

                checked={window.localStorage.getItem('theme') === 'dark'}
            />
            <label className="switch-for" htmlFor="switch1"> 🌙 dark mode</label>
        </div>
    );
}
