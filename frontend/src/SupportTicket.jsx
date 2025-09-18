import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Screen/Register";
import Login from "./Screen/Login";
import Home from "./Screen/Home";
import Dashboard from "./Screen/Dashboard";
import MainScreen from "./Screen/MainScreen";

function SupportTicket() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </Router>
    // <NavigationCounter>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Register" component={Register} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Dashboard" component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationCounter>
  );
}

export default SupportTicket;
