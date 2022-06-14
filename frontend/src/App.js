import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import About from './pages/About';
import Ticket from './pages/Ticket';
import Tickets from './pages/Tickets';

function App() {
  return (
    <>
      <Router>
        <Container>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />

              <Route path='/new-ticket' element={<PrivateRoute />}>
                <Route path='/new-ticket' element={<NewTicket />} />
              </Route>

              <Route path='/ticket/:ticketId' element={<PrivateRoute />}>
                <Route path='/ticket/:ticketId' element={<Ticket />} />
              </Route>

              <Route path='/tickets' element={<PrivateRoute />}>
                <Route path='/tickets' element={<Tickets />} />
              </Route>

              <Route path='/admin' element={<PrivateRoute />}>
                <Route path='/admin' element={<Admin />} />
              </Route>
            </Routes>
          </div>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
