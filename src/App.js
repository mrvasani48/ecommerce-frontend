import React from "react";
import {  BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './sharedComponents/header';
import Footer from "./sharedComponents/footer";
import Routes from './routes/routes';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
        <ToastContainer/>
        <BrowserRouter>  
           <Header />
           <Routes />
           <Footer />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
