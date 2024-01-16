import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DrawerContext from './context/DrawerContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <DrawerContext>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            progressStyle={{ background: "red", height: "6px", color: "ButtonHighlight" }}
          />
        </DrawerContext>
      </Router>
    </Provider>
  </React.StrictMode>,
)
