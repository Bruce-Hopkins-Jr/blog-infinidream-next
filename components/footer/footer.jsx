import Image from "next/image"
import React, {useContext} from "react"

import TwitterIcon from "../../images/Socail-media/twitter.png"
import GithubIcon from "../../images/Socail-media/github.png"
import EmailIcon from "../../images/Socail-media/email.png"
import SinglepostContext from '../../components/context/SinglepostContext'
import Link from 'next/link'

const Footer = () => {
    // TODO Include posts of the same tags
    const PreviousPost = () => {
        const context = useContext(SinglepostContext)
        if (context.previousPost) return (
            <div className="previousPost" href={context.previousPost.url}>
                <Link href={`/blog/${context.previousPost._id}`} passHref>
                    <a>
                    <span>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2379 0L26.1327 2.829L9.98 12.004L26.1327 21.171L21.2379 24L0.188782 12.004L21.2379 0Z" fill="#00826C"/>
                        </svg>
                        <h4>Previous Post</h4>
                    </span>
                    <p>{context.previousPost.title}</p>
                    </a>
                </Link>
            </div>
        )
        else return <> </>

    }

    return (
        <div className="footer-container">
            <div className="footer-group">
                <PreviousPost/>
                <div className="icon-group">
                    <a href="https://twitter.com/InfiniDreams1" target="_blank" rel="noopener noreferrer" > <Image src={TwitterIcon} alt="Twitter icon"/> </a>
                    <a href="https://github.com/Bruce-Hopkins-Jr" target="_blank" rel="noopener noreferrer">  <Image src={GithubIcon} alt="Github Icon"/> </a>
                    <a href="mailto: behopkinsjr@gmail.com" target="_blank" rel="noopener noreferrer"> <Image src={EmailIcon} alt="Email Icon"/> </a>              
                </div>

            </div>

        </div>
    )
}

export default Footer