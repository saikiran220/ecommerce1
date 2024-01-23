
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header_Nav from './components/Header_Nav';
import Homepage from './pages/Homepage';
import Menpage from './pages/Menpage';
import WomenPage from './pages/WomenPage';
import Kidspage from './pages/Kidspage';
import HomeLivingpage from './pages/HomeLivingpage';
import Beautypage from './pages/Beautypage';
import Studiopage from './pages/Studiopage';
import Wishlistpage from './pages/Wishlistpage';
import Bagpage from './pages/Bagpage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './pages/AuthContext';
import LogInPage from './pages/LogInPage';
import PrivateRoutes from './pages/PrivateRoutes';


function App() {

  // const contextvalue='hlo this is from useContext'
  return (
    <>
       <AuthProvider>
         <BrowserRouter>
         <Routes>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path="/*" element={
            <PrivateRoutes>
              <Routes>
                <Route index element={<Homepage/>}/>
                <Route path='/home' element={<Homepage/>}/>
                <Route className="nav-link" path='/men' element={<Menpage/>}/>
                <Route className="nav-link" path='/women' element={<WomenPage/>}/>
                <Route className="nav-link" path='/kids' element={<Kidspage/>}/>
                <Route className="nav-link" path='/homeliving' element={<HomeLivingpage/>}/>
                <Route className="nav-link" path='/beauty' element={<Beautypage/>}/>
                <Route className="nav-link" path='/studio' element={<Studiopage/>}/>
                <Route className="nav-link" path='/wishlist' element={<Wishlistpage/>}/>
                <Route className="nav-link" path='/bag' element={<Bagpage/>}/>
                <Route className="nav-link" path='/profile' element={<ProfilePage/>}/>          
              </Routes>
            </PrivateRoutes>
          }/>
         </Routes>
         </BrowserRouter>
       </AuthProvider>
    </>
  );
}

export default App;

      {/* <BrowserRouter>
     <Routes>
      <Route className='nav-link' path='/' element={<Homepage/>}/>
      <Route className="nav-link" path='/men' element={<Menpage/>}/>
      <Route className="nav-link" path='/women' element={<WomenPage/>}/>
      <Route className="nav-link" path='/kids' element={<Kidspage/>}/>
      <Route className="nav-link" path='/homeliving' element={<HomeLivingpage/>}/>
      <Route className="nav-link" path='/beauty' element={<Beautypage/>}/>
      <Route className="nav-link" path='/studio' element={<Studiopage/>}/>
      <Route className="nav-link" path='/wishlist' element={<Wishlistpage/>}/>
      <Route className="nav-link" path='/bag' element={<Bagpage/>}/>
      <Route className="nav-link" path='/profile' element={<ProfilePage/>}/>
     </Routes>
     </BrowserRouter> */}
