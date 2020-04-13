import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Cities from "./screens/Cities";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import AddCity from "./screens/AddCity";
import "./App.css";

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
            <Route path="/profile" component={Profile} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/add-city" component={AddCity} />
            {/* <Route path="/Create" component={Create} />
            <Route path="/AddCity" component={AddCity} />
            <Route component={Notfound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

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
