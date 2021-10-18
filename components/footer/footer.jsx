import Image from "next/image"

import TwitterIcon from "../../images/Socail-media/twitter.png"
import GithubIcon from "../../images/Socail-media/github.png"
import EmailIcon from "../../images/Socail-media/email.png"

const Footer = () => {
    // TODO Include posts of the same tags
    return (
        <div className="footer-container">
            {/* 
                Contact me
                Next posts
            */}
            <h2>Contact Me</h2>

            <div className="icon-group">
                <a href="https://twitter.com/InfiniDreams1" target="_blank" rel="noopener noreferrer" > <Image src={TwitterIcon} alt="Twitter icon"/> </a>
                <a href="https://github.com/Bruce-Hopkins-Jr" target="_blank" rel="noopener noreferrer">  <Image src={GithubIcon} alt="Github Icon"/> </a>
                <a href="mailto: behopkinsjr@gmail.com" target="_blank" rel="noopener noreferrer"> <Image src={EmailIcon} alt="Email Icon"/> </a>              
            </div>
        </div>
    )
}

export default Footer