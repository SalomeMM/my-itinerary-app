import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screen/Landing";
import Cities from "./components/Cities";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
// import { Button } from "reactstrap";
import "./App.css";
// import Create from "./components/Create";
// import Login from "./components/Login";
// import AddCity from "./components/AddCity";
// import Notfound from "./components/Notfound";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Landing} />
//           <Route path="/cities" component={Cities} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/cities" component={Cities} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            {/* <Route path="/Create" component={Create} />
            <Route path="/Login" component={Login} />
            <Route path="/AddCity" component={AddCity} />
            <Route component={Notfound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
