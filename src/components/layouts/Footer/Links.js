import React from 'react'
import { Link } from 'react-router-dom'


const Links = () => {
    return (
        <>
        <div className="col p-4 ">
                        <ul class="list-unstyled mb-0">
                            <div className="text-uppercase fw-bold mb-4 text-white" >SERVIVES</div>
                            <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">Mobile app development</Link></li>
                            <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">Web app development</Link></li>
                            <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">UI/UX Design</Link></li>
                            <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">IT Staff Augmentation</Link></li>
                        </ul>
                    </div>
                    <div className="col pt-4 ">
                        <div id="help" className="text-uppercase fw-bold text-white text-decoration-none">HIRE DEVELOPERS</div>
                        <div className="d-flex justify-content-start pt-4 flex-nowrap">
                            <ul>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">ANGULAR JS</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">REACT JS</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">REACT NATIVE</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">FLUTTER</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">IONIC</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">SOFTWARE TESTERS</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">METEOR</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">ROR</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">NODE JS</Link></li>
                            </ul>
                        </div>


                    </div>
                    <div className="col p-4">
                        <div className="d-flex justify-content-center pt-4" >

                            <ul>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">ANGULAR</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">LARAVEL</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">CODEIGNITER</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">WORDPRESS</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">JAVASCRIPT</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">VUEJS</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">AR</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">PYTHON</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">XAMARIN</Link></li>
                            </ul>
                        </div>
                    </div>



                    <div className="col p-4">
                        <div className="d-flex justify-content-around pt-4">

                            <ul>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">UI/UX</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">ANDRIOD</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">PHP</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">ASP.NET</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">JAVA</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">HTML5</Link></li>
                                <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">IOS</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col p-4">
                        <div className="text-uppercase fw-bold mb-4 text-white text-decoration-none ">OUR SOLUTION</div>

                        <li className="list-unstyled"><Link to="#!" className="text-white text-decoration-none ">Field Force connect</Link></li>
                        <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">chatongo</Link></li>
                        <li className="list-unstyled"><Link to="#" className="text-white text-decoration-none">securelobby</Link></li>
                    </div>
        </>
    )
}

export default Links
