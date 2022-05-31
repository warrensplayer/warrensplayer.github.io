import * as React from "react"
import "./index.css";
import profilePic from "../images/Stokes.jpg";
import Link from "../components/Link"

const IndexPage = () => {

    return <main className="bg-blue-200 absolute w-full h-full flex items-center">
        <title>Stokes Player</title>
        <div className="flex flex-col md:flex-row mx-auto bg-white rounded-xl overflow-hidden items-stretch">
            <div className="">
                <img className="w-60 md:w-48 h-full object-cover" src={profilePic} alt="Stokes Player" />
            </div>
            <div className=" p-6 md:p-20">
                <h1 className="text-3xl font-medium">Stokes Player</h1>
                <p className="mb-4">Software Engineer</p>
                <Link href="https://www.linkedin.com/in/stokesplayer/">
                    LinkedIn
                </Link>
            </div>
        </div>
    </main>;

};

export default IndexPage;