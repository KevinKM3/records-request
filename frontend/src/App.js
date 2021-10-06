import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Route } from "react-router-dom";
import MyRequests from "./Pages/MyRequests/MyRequests";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={Home} exact />
        {/* <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact /> */}
        <Route path="/myrequests" component={MyRequests} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
