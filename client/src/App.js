import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Cities from "./components/Cities";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
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
