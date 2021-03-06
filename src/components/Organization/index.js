import React from "react";
import styled from "styled-components";
import './index.css'
import orgImage from "../../img/orgPage.jpeg";

const Aboutsection = styled.div`
  background-color: black;
  width: 100vw;
  padding: 2em;
  border-radius: 3m;
  margin: 2em 0;
`;

const Styledp = styled.div`
  padding: 3em 20em;
  color: white;
`;

const Position = styled.div`
  color: white;
`;

const Contactsection = styled.div`
  margin: 20px auto;
  width: 60%;
  color: white;
  text-align: center;
`;

const Organization = props => {
  const bodList = [
    { name: "Brett Hurst", title: "Chairman of the Board" },
    { name: "Nate Spilman", title: "Member of the Board" },
    { name: "Christina Roufosse", title: "Member of the Board" },
    { name: "Lizzy Presland", title: "Member of the Board" },
    { name: "Joseph Burchetta", title: "Member of the Board" },
  ];
  const execList = [
    { name: "Brett Hurst", title: "President" },
    { name: "Nate Spilman", title: "Vice President" },
    { name: "Nate Spilman", title: "Treasurer" },
    { name: "Daniel Kluss", title: "Secretary" }
  ];
  return (
    <div>
      <section className="imageblock about-1 bg--secondary">
        <div className="imageblock__content col-md-6 col-sm-4 pos-right">
          <div
            className=""
            style={{
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%"
            }}
          >
            <img style={{padding:"1em"}} alt="image" src="https://secure.meetupstatic.com/photos/event/4/f/a/0/highres_483860384.jpeg" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-8 text-left">
              <h1 style={{ paddingBottom: "1em" }}>
                About the Junior Dev Struggle Bus
              </h1>
              <h3>Vision</h3>
              <p>
                A tech community learning, building, and succeeding through
                helping one another.
              </p>
              <h3>Mission</h3>
              <p>
                We provide an open and supportive community to eliminate
                barriers to opportunity and enhance the technical confidence of
                those interested in technology.
              </p>
              <h3>Values</h3>
              <ul>
                <li>
                  <b>Collaboration:</b> We are a community of builders making
                  connections with each other over tech.
                </li>
                <li>
                  <b>Encouragement:</b> Helping to dismantle fear and doubt through
                  support, praise, or advice to develop self-trust.
                </li>
                <li>
                  <b>Inclusivity:</b> Everyone should not only be welcomed, but
                  actively encouraged to participate.
                </li>
                <li>
                  <b>Community:</b> we focus on where we can provide value in the
                  community and take action in those areas.
                </li>
              </ul>
            </div>
          </div>
          {/* <!--end of row--> */}
        </div>
        {/* <!--end of container--> */}
      </section>
      <Styledp></Styledp>
      <Aboutsection id="exec">
        <h3 style={{ color: "white", padding: "0 0 1em 0" }}>
          The Executive Team and Board of Directors
        </h3>
        <h4 style={{ color: "white", padding: "0 0 1em 0" }}>
          Board of Directors
        </h4>
        {bodList.map((position, i) => {
          return (
            <Position key={i} >
              {position.title} - {position.name}
            </Position>
          );
        })}

        <h4 style={{ color: "white", padding: "1em 0 1em 0" }}>
          Executive Team
        </h4>
        {execList.map((position, i) => {
          return (
            <Position key={i} >
              {position.title} - {position.name}
            </Position>
          );
        })}
        <Contactsection>
          <h4>Interested in joining the team? Let us know!</h4><br/>
          <div id='contact-container' style={{ display: 'flex', width: '70%', margin: '0 auto' }}>
            <div onClick={() => window.location.href = `mailto:juniordevstrugglebus@gmail.com
          ?subject=I'm interested in joining the JDSB Team!`} id='email-container' style={{ display: 'flex', "flex-direction": "column", width: '48%', cursor: "pointer", border: "1px solid white", 'border-radius': "25px", margin: '0 4% 0 0', padding: '1%', 'font-size': '16pt' }}>
              <img style={{ margin: '0 auto', width: "50px", height: '50px' }} src="https://icon-library.net/images/white-email-icon-png/white-email-icon-png-16.jpg" alt=""/>
              Email
            </div>
          
            <div onClick={() => window.location.href = `/slack`} id='slack-container' style={{ display: 'flex', "flex-direction": "column", width: '48%', cursor: "pointer", border: "1px solid white", 'border-radius': "25px", padding: '1%', 'font-size': '16pt' }}>
              <img style={{ margin: '0 auto', width: "50px", height: '50px' }} src="https://cdn.freebiesupply.com/logos/large/2x/slack-icon-white.png" alt=""/>
              Slack
          </div>
        </div>
      </Contactsection>
      </Aboutsection>
      {/* <!--end of row--> */}
      <Styledp />

      {/* <!--end of row--> */}
      {/* <!--end of container--> */}
    </div>
  );
};

export default Organization;
