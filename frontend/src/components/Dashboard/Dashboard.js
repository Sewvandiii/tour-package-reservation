import React, { Component } from "react";
import "./DashboardStyles.css";
import loader from "./loader.gif";
import sigiriya from "./sigiriya.jpg";
import sigiriya2 from "./sigiriya2.jpg";
import sigiriya3 from "./sigiriya3.jpg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">About Us</h1>
            <br></br>
            <div className="container text-center">
              <img src={sigiriya}></img>
            </div>
            <br></br>
            <br></br>
            <p>
              In 1966, the Government decided to develop tourism in a planned
              and a systematic manner, after identifying the need to set up an
              institutional framework. The Ceylon Tourist Board (created by the
              Ceylon Tourist Board Act No. 10 of 1966) and the Ceylon Hotels
              Corporation (created by Ceylon Hotels Corporation Act of 1966)
              were set up duly.
              <br></br>
              <br></br>
              Created to promote rapid economic development, through the
              development of foreign tourism, the Ceylon Tourist Board (CTB) was
              a statutory body that allowed greater freedom in decision making
              and flexibility in financial management.
              <br></br>
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={sigiriya2}></img>
              </div>
              <br></br>
              <br></br>
              The legislation also covered the establishment of a national
              holiday resort company, which planned various types of
              accommodation and resort areas. Moreover it included the setting
              up of an authority under the Tourist Board to manage and
              administer each resort. The Act conferred powers for the
              Protection of Highways and Places of Scenic Beauty and vested
              authority in the Ceylon Tourist Board for the Registration and
              Classification of Tourist Hotels and all other tourist services
              including travel agencies. The Tourist Development Act of 1968
              provided the Ceylon Tourist Board with the statutory authority to
              develop tourism on a planned and controlled basis
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={sigiriya3}></img>
              </div>
              <br></br>
              In October 2007 the Tourism Act No 38 of 2005 came into effect.
              With the circulation of the new Tourism act, the Sri Lanka Tourist
              Board Act No 10 of 1966, which was in effect for the past 41
              years, was replaced.
              <br></br>
              <br></br>
              In terms of the provisions contained in the new act, the Tourism
              Development Fund was legally constituted, with 2 main sources
              remitting finances to the fund. By way of 1/3 of the Airport Tax
              collections and 1% of the Turnover of all Sri Lanka Tourist Board
              registered establishments. The Act provided for the setting up of
              the Sri Lanka Tourism Development Authority, Sri Lanka Promotions
              Bureau, Sri Lanka Convention Bureau and Sri Lanka Institute of
              Hotel Management, thereby replacing the Sri Lanka Tourist Board.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
