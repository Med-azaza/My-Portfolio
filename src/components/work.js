import { Link } from 'react-router-dom';
import blogr from '../img/blogr.png';
import todo from '../img/todo.png';
import rps from '../img/rps.png';
import tnfeed from '../img/tnfeed.png';
import mongo from '../img/mongo.png';
import express from '../img/express.png';
import weather from '../img/weather.png';
import jquery from '../img/jquery.png';
import restaurant from '../img/restaurant.png';
const Work=()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    return (
        <div className="Work">
            <ul className="nav-list">
                <li><Link  to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <section>
                <div className="link">
                    <a href="https://reacttodoapp0.netlify.app/" target='_blank'>Live Demo <i class="fas fa-angle-double-right"></i></a>
                </div>
                <div className="name">
                <h2>React TODO app</h2></div>
                <div className="showcase">
                    <div className="image">
                        <img src={todo} alt="todo app preview" />
                    </div>
                    <div className="description">
                        <p>TODO web app with dark and light mode,also user todos will be saved based on device.(implemented basic React hooks)</p>
                        <div className="techs">
                            <h4>Techs used in the project:</h4>
                            <abbr title="react"><i class="fab fa-react"></i></abbr>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="link">
                    <a href="https://rpsgame-01.netlify.app/" target='_blank'>Live Demo <i class="fas fa-angle-double-right"></i></a>
                </div>
                <div className="name">
                <h2>Rock paper scissors Game</h2></div>
                <div className="showcase">
                    <div className="image">
                        <img src={rps} alt="rock paper scissors game preview" />
                    </div>
                    <div className="description">
                        <p>Simple Game created with React using react hooks to manage game states.</p>
                        <div className="techs">
                            <h4>Techs used in the project:</h4>
                            <abbr title="react"><i class="fab fa-react"></i></abbr>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="link">
                    <a href="https://tnfeed.netlify.app/" target='_blank'>Live Demo <i class="fas fa-angle-double-right"></i></a>
                </div>
                <div className="name">
                <h2>TnFeed Social Network app</h2></div>
                <div className="showcase">
                    <div className="image">
                        <img src={tnfeed} alt="tnfeed website preview" />
                    </div>
                    <div className="description">
                        <p>Fullstack web app with separated backend connected with API,inculde authentication with JWT.(unfinished)</p>
                        <div className="techs">
                            <h4>Techs used in the project:</h4>
                            <abbr title="html5"><i class="fab fa-html5"></i></abbr>
                            <abbr title="Sass"><i class="fab fa-sass"></i></abbr>
                            <abbr title="javascript"><i class="fab fa-js"></i></abbr>
                            <abbr title="nodeJs"><i class="fab fa-node"></i></abbr>
                            <abbr title="ExpressJs"><img className='express' src={express} alt="Express logo" /></abbr>
                            <abbr title="MongoDB"><img src={mongo} alt="MongoDB logo" /></abbr>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="link">
                    <a href="https://med-azaza.github.io/blogr/" target='_blank'>Live Demo <i class="fas fa-angle-double-right"></i></a>
                </div>
                <div className="name">
                <h2>Blogr Landing page</h2></div>
                <div className="showcase">
                    <div className="image">
                        <img src={blogr} alt="blogr website preview" />
                    </div>
                    <div className="description">
                        <p>Simple single page landing page.</p>
                        <div className="techs">
                            <h4>Techs used in the project:</h4>
                            <abbr title="html5"><i class="fab fa-html5"></i></abbr>
                            <abbr title="css3"><i class="fab fa-css3-alt"></i></abbr>
                            <abbr title="javascript"><i class="fab fa-js"></i></abbr>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="link">
                    <a href="https://med-azaza.github.io/weather-app/" target='_blank'>Live Demo <i class="fas fa-angle-double-right"></i></a>
                </div>
                <div className="name">
                <h2>Weather app</h2></div>
                <div className="showcase">
                    <div className="image">
                        <img src={weather} alt="weather app preview" />
                    </div>
                    <div className="description">
                        <p>A simple Weather web app that show basic weather infos and time of any city acroos the world,I used external API and interacted with it using AJAX.</p>
                        <div className="techs">
                            <h4>Techs used in the project:</h4>
                            <abbr title="html5"><i class="fab fa-html5"></i></abbr>
                            <abbr title="css3"><i class="fab fa-css3-alt"></i></abbr>
                            <abbr title="javascript"><i class="fab fa-js"></i></abbr>
                            <abbr title="jquery"><img src={jquery} alt="jquery logo" /></abbr>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="link">
                    <a href="https://med-azaza.github.io/restaurant-site-project/" target='_blank'>Live Demo <i class="fas fa-angle-double-right"></i></a>
                </div>
                <div className="name">
                <h2>Restaurant website</h2></div>
                <div className="showcase">
                    <div className="image">
                        <img src={restaurant} alt="weather app preview" />
                    </div>
                    <div className="description">
                        <p>Static Multi-page website designed for a restaurant</p>
                        <div className="techs">
                            <h4>Techs used in the project:</h4>
                            <abbr title="html5"><i class="fab fa-html5"></i></abbr>
                            <abbr title="css3"><i class="fab fa-css3-alt"></i></abbr>
                            <abbr title="bootstrap"><i class="fab fa-bootstrap"></i></abbr>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Work
//
//