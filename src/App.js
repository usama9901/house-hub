import React,{useState} from 'react';
import './App.css';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import Header from './Header';
import Seller from './Seller';
import Body from './Body';
import Login from './Login';
import Signup from './signup';
import Owner from './owner';
import Page from './page';
import Footer from './Footer';

const App = () => {
  const [userInfo, setUserInfo] = useState({ id: null, name: '' });
  const LoginWrapper = () => {
    const navigate = useNavigate();
    const handleLogin = (user) => {
      setUserInfo({ id: user.id, name: user.name });
      navigate("/");
    };
  
    return <Login onLogin={handleLogin} />;
  };

    const Home = () => (
      <>
        <Header />
        <Body UserData={userInfo}/>
        <Footer />
      </>
    );

  return (
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Seller" element={<Seller UserId={userInfo}/>} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="/ownerproperty" element={<Owner />} />
      </Routes>
  );
};


export default App;
