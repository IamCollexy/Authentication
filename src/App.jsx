import { Navigate, Route, Routes } from 'react-router-dom';
import  AuthContext  from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <Layout>
     <Routes>
        <Route path='/' element={<HomePage />}/>
        
       
      {!authCtx.isLoggedIn &&  <Route path='/auth' element={<AuthPage />}/>}
          
       
      {authCtx.isLoggedIn &&  <Route path='/profile' element={<UserProfile />}/> }
      
      {!authCtx.isLoggedIn && <Route path='/profile' element={<Navigate to={'/auth'} />}/> }
  
      <Route path='*' element={<HomePage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
