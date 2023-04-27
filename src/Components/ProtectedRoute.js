import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const {currentUser}=UserAuth()
   const navigate=useNavigate()
    if(!currentUser){
        return navigate('/login')
    }else{
        return children
    } 
}

export default ProtectedRoute