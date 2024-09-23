import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chats' element={<Chats />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
    </Router>
  )
}

export default App