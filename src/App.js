import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeScreen from './pages/home';
import LocationScreen from './pages/locations'; 
import InvitationScreen from './pages/invitations';
import RsvpScreen from './pages/rsvp';

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
