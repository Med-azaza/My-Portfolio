import { Link } from 'react-router-dom';
const Contact=()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    return (
        <div className="Contact">
            <ul className="nav-list">
                <li><Link  to='/'>Home</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <header>
                <p>Let's make something great!</p>
            </header>
            <section>
                <h3>Contact</h3>
                <p>
                    I'm seeking opportunities to collaborate with Companies/Individuals,
                    not just work with them. I want to bring my experience to the table where
                    we can work together to solve real problems in a way that optimizes our experience and knowledge. <br />
                    Feel free to reach out through any of the platforms below: <br />
                    <a href='mailto:hamaaz666@gmail.com'>hamaaz666@gmail.com</a> <br />
                    <a href="https://www.linkedin.com/in/mohamed-azaza-683445203/" target='_blank'>LinkedIn</a> <br />
                    <a href="https://github.com/Med-azaza/">Github</a>
                </p>
            </section>
        </div>
    )
}



export default Contact

