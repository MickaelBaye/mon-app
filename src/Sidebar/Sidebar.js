import React from "react";
import "./Sidebar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouseUser } from '@fortawesome/free-solid-svg-icons'

const iconHouseUser = <FontAwesomeIcon icon={faHouseUser} />

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <nav>
        <div className="Sidebar">
          <div className="brandName">
            <h1>Dashboard</h1>
          </div>
          <ul>
            <li>{iconHouseUser} <a href="#/dashboard">Dashboard</a></li>
            <li>{iconHouseUser} <a href="#/orders">Orders</a></li>
            <li>{iconHouseUser} <a href="#/products">Products</a></li>
            <li>{iconHouseUser} <a href="#/customers">Customers</a></li>
            <li>{iconHouseUser} <a href="#/reports">Reports</a></li>
            <li>{iconHouseUser} <a href="#/integration">Integration</a></li>
          </ul>
          <ul>
            <li>{iconHouseUser} <a href="#/saved-reports">SAVED REPORTS</a></li>
            <li>{iconHouseUser} <a href="#/current-month">Current month</a></li>
            <li>{iconHouseUser} <a href="#/last-quarter">Last quarter</a></li>
            <li>{iconHouseUser} <a href="#/social-engagement">Social engagement</a></li>
            <li>{iconHouseUser} <a href="#/year-end-sale">Year-end sale</a></li>
          </ul>
        </div>
      </nav>
     );
  }
}
 
export default Sidebar;