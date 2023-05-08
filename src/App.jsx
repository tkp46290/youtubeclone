import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./_app.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from "./screens/loginScreen/LoginScreen";
import WatchScreen from "./screens/watchscreen/WatchScreen";
import ChannelScreen from './screens/channelScreen/ChannelScreen'
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen'
import SearchScreen from './screens/SearchScreen'
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";
import './_app.scss'



import { Container } from "react-bootstrap";


const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const toogleshowSidebar = () => setSidebar((value) => !value);
  return (
    <>
      <Navbar toogleshowSidebar={toogleshowSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} toogleshowSidebar={toogleshowSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {

const {accessToken,loading}=useSelector(state=>state.auth)

const navigate  = useNavigate()

useEffect(()=>{

if(!loading && !accessToken){
  navigate("/login");
}

},[accessToken,loading,navigate])


  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/search/:query" element={<SearchScreen/>} />
          <Route path="/watch/:id" element={<WatchScreen/>} />
          <Route path='/feed/subscriptions' element={<SubscriptionsScreen />} />
          <Route path="/channel/:channelId" element={<ChannelScreen  />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
  );
}

export default App;
