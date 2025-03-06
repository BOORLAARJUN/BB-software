import Header from "./components/Header";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Action from "./components/Action";
import Quicklinks from "./components/Quicklinks";
import Chatbot from "./components/Chatbot";
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="Appid">
        <Header/>
        <Navbar/>
        <Banner/>
        <Action/>
        <Quicklinks/>
        <Chatbot/>
      </div>
    </div>
  );
}

export default App;
