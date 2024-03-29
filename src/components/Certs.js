import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import bc from "../assets/certs/bccert.webp"
import brandCert from "../assets/certs/brandCert.webp"
import figmaCert from "../assets/certs/figmaCert.webp"
import PMCert from "../assets/certs/PMCert.webp"
import UXCert from "../assets/certs/UXCert.webp"


export default function Certs() {
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Software Engineering Career Course" img={bc} issued="Boca Code School" date="Mar 2023" />
                <CertCard name="Create a Brand Strategy" img={brandCert} issued="LinkedIn Learning" date="Mar 2023" />
                <CertCard name="Figma Essential Training" img={figmaCert} issued="LinkedIn Learning" date="Apr 2023" />
                <CertCard name="Project Management Skills for Leaders" img={PMCert} issued="LinkedIn Learning" date="Apr 2023" />
                <CertCard name="UX DesignOps: Managing Stakeholders" img={UXCert} issued="LinkedIn Learning" date="Apr 2023" />



            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}


