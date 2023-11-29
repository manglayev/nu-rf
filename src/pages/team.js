import React from 'react'
import Layout from '@theme/Layout'
import '../css/team.css';

import img1 from '../../static/team/img1.jpg'
import img2 from '../../static/team/img2.jpg'
import img3 from '../../static/team/img3.jpg'

function Team()
{
  return(    
        <Layout>
        <h1>Meet the Nazarbayev University RF Research Team</h1>
        <div className="row">
            <div className="column" style={{display: "block", marginLeft: "auto", marginRight: "auto",}}>
                <div className="card">
                <img src={img3} alt="John" className="photo" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <div className="card">
                <img src={img1} alt="Jane" className="photo" />
                <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img2} alt="Mike" className="photo" />
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img3} alt="John" className="photo" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <div className="card">
                <img src={img1} alt="Jane" className="photo" />
                <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img2} alt="Mike" className="photo" />
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img3} alt="John" className="photo" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <div className="card">
                <img src={img1} alt="Jane" className="photo" />
                <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img2} alt="Mike" className="photo" />
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img3} alt="John" className="photo" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>
        </div> 
        <div className="row">
            <div className="column">
                <div className="card">
                <img src={img1} alt="Jane" className="photo" />
                <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img2} alt="Mike" className="photo" />
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={img3} alt="John" className="photo" />
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="buttonTeam">Contact</button></p>
                </div>
                </div>
            </div>
        </div>  
    </Layout>
  );
}

export default Team;