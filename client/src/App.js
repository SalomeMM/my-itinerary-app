import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./screens/Landing";
import cities from "./screens/Cities";
import itineraries from "./screens/Itineraries";
import signup from "./screens/SignUp";
import login from "./screens/LogIn";
import logout from "./screens/LogOut";
import profile from "./screens/Profile";
import favourites from "./screens/Favourites";
import addcity from "./screens/AddCity";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/cities" component={cities} />
            <Route path="/itineraries/:city" component={itineraries} />
            <Route path="/signup" component={signup} />
            <Route path="/login" component={login} />
            <Route path="/logout" component={logout} />
            <Route path="/profile" component={profile} />
            <Route path="/favourites" component={favourites} />
            <Route path="/add-city" component={addcity} />
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
