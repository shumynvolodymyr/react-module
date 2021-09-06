import "./Header.css"
import Checkbox from "../checkbox/Checkbox";
import UserInfo from "../userInfo/UserInfo";

export default function Header() {

    return (
        <div className={'header'}>

            <Checkbox/>

            <img className={'logo'}
                 src='https://images.squarespace-cdn.com/content/v1/60186ab2f6d4492a8192dc46/1616686606228-72NATDX13LCR9R5PLZAB/mobileOxfilm+logo+Full+color.png?format=1500w'
                 alt=""
            />

            <UserInfo/>

        </div>
    );
}
