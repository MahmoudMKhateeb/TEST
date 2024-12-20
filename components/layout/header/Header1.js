import LanguageDropdown from "@/components/elements/LanguageDropdown"
import Link from "next/link"
import Sidebar from "../Sidebar"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    const router = useRouter();
    const [tokan, setToken] = useState("")
    useEffect(() => {
        const tok=localStorage.getItem("token");
        setToken(tok);
      }, []);

const signout=()=>{

    localStorage.setItem("token","");
    router.push('/login');
}

    return (
        <>
            <header>
                <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                               
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/contact">contacts</Link></li>
                                                <li><Link href="/work">How It Works</Link></li>
                                                <li><Link href="/#Pricing">Pricing</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                            <li className="header-btn"><Link href="/demo" className="btn btn-primary">Request Demo</Link></li>
                                           
                                              {
                                                (tokan=="" || tokan==undefined)?<li className="header-btn"><Link href="/login" className="btn">sign in</Link></li>:
                                                <li className="header-btn"><button onClick={() => signout()} className="btn">sign out</button></li>
                                              }
                                                
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
