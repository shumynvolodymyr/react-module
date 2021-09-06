import Header from "../header/Header";

export default function Layout(props) {

    return (
        <>
            <Header/>

            {props.children}

        </>
    );
}
