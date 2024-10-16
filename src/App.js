
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OpenRoute from './components/auth/OpenRoute';
import VerifyEmail from './pages/VerifyEmail';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/about" element={<About/>} />
        <Route path='*' element={<Error/>}/>

        {/* Open Route - for Only Non Logged in User */}
        <Route path='/login' 
          element={<OpenRoute><Login/></OpenRoute>}/>
        <Route path='/signup' 
          element={<OpenRoute><Signup/></OpenRoute>}/>
        {/* <Route path='/forgot-password' 
          element={<OpenRoute><ForgotPassword/></OpenRoute>}/>
        <Route path='/update-password/:id' 
          element={<OpenRoute><UpdatePassword/></OpenRoute>}/> */}
        <Route path='/verify-email' 
          element={<OpenRoute><VerifyEmail/></OpenRoute>}/>

          {/* Private Route - for Only Logged in User */}
        <Route path='/dashboard'
          element={<PrivateRoute><Dashboard/></PrivateRoute>}/>

      </Routes>

      
    </div>
  );
}

export default App;
