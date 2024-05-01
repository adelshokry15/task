import "./App.css";
import SideBar from "./components/sidebar/SideBar";
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
