import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { lazy } from 'react';
// import  from './pages/locations'; 
// import InvitationScreen from './pages/invitations';
// import  from './pages/rsvp';
const HomeScreen = lazy(() => import('./pages/home'))
const InvitationScreen = lazy(() => import('./pages/invitations'))
const RsvpScreen = lazy(() => import('./pages/rsvp'))
const LocationScreen = lazy(() => import('./pages/locations'))



// import HomeScreen from './pages/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/invitation' element={<InvitationScreen/>}/>
        <Route path='/location' element={<LocationScreen/>}/>
        <Route path='/rsvp' element={<RsvpScreen/>}/>

      </Routes>
    </Router>

    
   
  );
}

export default App;
