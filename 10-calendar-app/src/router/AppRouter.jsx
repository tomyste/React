import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';


export const AppRouter = () => {

    const authStatus = 'not-authenticated'; //"authenticated"

  return (
    <Routes>

        //TODO: hacer esta condicion CLEAR
        {
            ( authStatus === 'not-authenticateds')
            ? <Route path='/auth/*' element={ <LoginPage/> } />
            : <Route path='/*' element={<CalendarPage/> }/>
        }   
        
        <Route path='/*' element={ <Navigate to="/auth/login"/> }/>
    
    </Routes>
  )
}
