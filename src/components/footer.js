import React from "react"

const Footer = () => <footer>
    <div className="footerCenter">
        <div className="container-fluid text-center ">


            
            <p>Thank you.</p>

            <div>
            <a href="https://github.com/jsobie3" download > <img src={require('../images/githublogo.jpg')}/> </a>
                <a href="https://www.linkedin.com/in/jakub-sobieraj-06054221a/" download > <img src={require('../images/linkedin.jpg')}/></a>
                <a href="https://stackoverflow.com/users/20354105/jsobie3" download > <img src={require('../images/stack-overflow32.jpg')}/></a>

            </div>




        </div>
    </div>



</footer>

export default Footer