import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavbarCoinMap from './components/Navbar/Navbar';

//  -------------- TEST ---------------
// import { AuthContext } from './context/auth.context';
// import { useContext } from 'react';

function App() {

  // console.log(useContext(AuthContext))

  return (
    <>
    <NavbarCoinMap />
      <AppRoutes/>
    </>
  );
}

export default App;
