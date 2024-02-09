import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Landing from './components/Landing';
import Orders from './components/Orders';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
    {/* <Header></Header> */}
   
    <SignIn></SignIn>
     {/* <Footer/> */}
      
    </>
  );
}

export default App;
