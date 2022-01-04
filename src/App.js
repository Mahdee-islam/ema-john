import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import OrderReview from './component/OrderReview/OrderReview';
import Shop from './component/Shop/Shop';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import Login from './component/Login/Login';
import Register from './component/Register/Register';





function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path = "/" element = { <Shop/> } />
          <Route path = "/shop" element = { <Shop/> } />
          <Route path = "/review" element = { <OrderReview/> }  />
          <Route path = "/inventory" element = { <Inventory/> } />
          <Route path = "/placeorder" element = { <PlaceOrder/>} />
          <Route path = "/login" element = { <Login/>} />
          <Route path = "/register" element = { <Register/>} />
          <Route path = "*" element = { <NotFound/> } />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
