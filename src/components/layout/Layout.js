import Header from "../header/Header";

export default function Layout(props) {
    console.log(props);

    return (
        <>
            <Header/>

            {props.children}

            {/*    <Footer/>*/}
        </>
    );
}
