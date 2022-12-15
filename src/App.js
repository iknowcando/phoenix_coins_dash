import './App.css';
import Header from "./Components/Header/Header";
import CoinsTablePage from "./Components/CoinsTablePage/CoinsTablePage";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <CoinsTablePage/>
            <Footer/>
        </div>
    );
}

export default App;
