import React from "react";
import "./Topbar.css";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <header>
        <div className="Topbar">
          <h1>Topbar</h1>
        </div>
      </header>
     );
  }
}
 
export default Topbar;