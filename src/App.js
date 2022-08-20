import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RsvpFooter from './component/RsvpFooter';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './component/Header';
import InvitationScreen from './pages/invitations/InvitationScreen';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<RsvpFooter/>}/>
    //   </Routes>
    // </Router>

    <InvitationScreen/>
   
  );
}

export default App;
