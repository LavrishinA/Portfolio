import './App.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Global from "./components/Global";
import React, {useState} from "react";


function App() {
// debugger
    const [theme, setTheme] = useState<"light" | "dark">("light")

    function handleSwitchTheme () {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }


    return (
        <>
            <Global currentTheme={theme}></Global>
            <div className="App">
                <Header onSwitchTheme = {handleSwitchTheme} currentTheme={theme}/>
                <Main currentTheme={theme}/>
                <Footer/>
            </div>
        </>
    );
}

export default App;

