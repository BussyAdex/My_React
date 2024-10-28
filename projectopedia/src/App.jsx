import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TopicCovered from "./Pages/TopicCovered";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/topiccovered" element={<TopicCovered />}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>   
        </div>
    );
}

export default App;