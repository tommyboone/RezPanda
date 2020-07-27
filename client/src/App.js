import React, { Component } from "react";
import Appointment from "./Components/Appointment";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Appointment />
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
