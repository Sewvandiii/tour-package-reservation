import React, { Component } from "react";
import "./HomePageStyles.css";
import airport from "./airport.png";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            <img src={airport}></img>&nbsp;World Wide Explorers
          </h1>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Is it safe to travel to Sri Lanka?</h2>
          <br></br>
          <p>
            As you know, Sri Lanka is one of the most satisfying countries to
            travel to in South Asia. But as everyone knows, Sri Lanka had a
            terrible time past days due to terrorist attacks. But fortunately,
            the Sri Lankan government was able to stop their activities totally
            within two weeks. Still, the harm they did to Sri Lanka is caused to
            reduce the monthly visitors’ amount so severely. From this article,
            you will know that are you safe to travel to Sri Lanka these days.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image1}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>
            Sri Lanka government has expanded the safety of Sri Lankans and
            especially foreigners
          </h2>
          <br></br>
          <p>
            It’s been six years since we have defeat terrorism from Sri Lanka.
            But unfortunately, Sri Lanka had to face another most crucial moment
            again by terrorist attacks. But fortunately, the former president
            Maithripala Sirisena allows the military forces to take control of
            everything by giving them full power to defend against them, and the
            military authorities did their job very well. And after the hardest
            time, Again Sri Lanka back to the normal as previous days and you
            are most welcome to travel around anywhere.
          </p>
        </div>

        <div className="container text-left">
          <h2>The extra layer of security</h2>
          <br></br>
          <p>
            If you are a person who already visits Sri Lanka, you will see
            something has changed. Nowadays, you can see each public places
            covered up with Army forces to provide the maximum security for
            everyone. So you really don’t need to worry about safety anymore.
            Just have to enjoy your vacation.
          </p>
        </div>

        <div className="container text-left">
          <h2>Locals are delighted to help foreigners more than ever</h2>
          <br></br>
          <p>
            Every Sri Lankans know what happened to Sri Lankan’s tourism
            industry after the attack. So they want to get into that position
            that they were previously attained and wanted to develop the tourism
            industry more than ever. So when you arrived in Sri Lanka and
            willing to get help from a Sri Lankan, you have to ask, or they will
            help before you asked. That makes you feel good.
          </p>
        </div>
        <br></br>
        <div className="container text-center">
          <img src={image2}></img>
        </div>
        <br></br>

        <div className="container text-left">
          <h2>
            The opinion of some foreign travelers about the current situation in
            Sri Lanka
          </h2>
          <br></br>
          <p>
            If you still confused about your travel plan to Sri Lanka, these
            living proofs will make you feel so good. Harald Baldr: Harald Baldr
            is a Youtuber/traveler who has recently visited Sri Lanka and
            explain the current situation of the country by traveling so many
            places around Sri Lanka. And his YouTube channel contains vlogs he
            created when he was going around this beautiful country Sri Lanka.
            You can see their vlogs on YouTube about the current situation, and
            there are so many on YouTube from the foreigner who visited Sri
            Lanka recently. feel free to check.
          </p>
        </div>

        <br></br>
      </div>
    );
  }
}

export default HomePage;
