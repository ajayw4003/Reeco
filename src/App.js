import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './constants/components/Navbar';
import OrdersPage from './container/OrdersPage';
import NoDataFound from './constants/components/NoDataFound';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<OrdersPage />} />
        <Route path="*"  element={<NoDataFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
