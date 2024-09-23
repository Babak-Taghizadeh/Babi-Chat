import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chats' element={<Chats />}/>
      </Routes>
    </Router>
  )
}

export default App