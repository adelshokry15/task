import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import SearchSection from "./components/searchSection/SearchSection";
import Home from "./components/home/Home";
import Body from "./components/body/Body";
import PopupContextProvider from "./context/PopupContext";

function App() {
  return (
    <>
      <PopupContextProvider>
        <SideBar />
        <Body />
      </PopupContextProvider>
    </>
  );
}

export default App;
