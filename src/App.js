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
import AuthProvider from './context/AuthProvider';
import RequiredAuth from './component/RequiredAuth/RequiredAuth';
import Shipping from './component/Shipping/Shipping';





function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path = "/" element = { <Shop/> } />
          <Route path = "/shop" element = { <Shop/> } />
          <Route path = "/review" element = { <OrderReview/> }  />
          <Route path = "/inventory" element = { <Inventory/> } />
          <Route path = "/placeorder" element = { 
            <RequiredAuth>
              <PlaceOrder/>
            </RequiredAuth>
          } />
          <Route path = "/shipping" element = { 
            <RequiredAuth>
              <Shipping/>
            </RequiredAuth>
          } />
          <Route path = "/login" element = { <Login/>} />
          <Route path = "/register" element = { <Register/>} />
          <Route path = "*" element = { <NotFound/> } />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
