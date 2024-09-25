import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import ChatsPage from './pages/Chats';
import ContactsPage from './pages/Contacts';

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/sign-in' element={<SignInPage />}/>
        <Route path='/sign-up' element={<SignUpPage />}/>
        <Route path='/chats' element={<ChatsPage />}/>
        <Route path='/contacts' element={<ContactsPage />}/>
      </Routes>
    </Router>
  )
}

export default App