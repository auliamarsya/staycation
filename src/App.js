import React from 'react'
import "assets/scss/style.scss"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailPage';
import CheckoutPage from 'pages/CheckoutPage';
import PageNotFound from 'pages/PageNotFound';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/properties/:id' element={<DetailsPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
