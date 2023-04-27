import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { AuthContextProvider } from './Context/AuthContext';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Main from './Components/Main';
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute> } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;