import React, { useRef, useEffect } from 'react'
import "./header.css";
// import Signup from '../Signup/Signup';
import { Container } from "reactstrap";
import { NavLink, Link } from 'react-router-dom';
import { useContextAPI } from '../features/contextapi';
import { useWeb3React } from '@web3-react/core';
const NAV_LINKS = [
    {
        display: 'Home',
        url: '/home'
    },
    {
        display: 'Market',
        url: '/market'
    },
    {
        display: 'Create',
        url: '/create'
    },
]
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null)


    const {account , active, deactivate} = useWeb3React()
    const { conToMetaMask,  connectedUser, setConnectedUser} = useContextAPI()
    const deac = () => {
        deactivate()
        setConnectedUser({uAddress: "", referrer: "", signedUp: false, yourUsers: []  })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 60 ||
                document.documentElement.scrollTop > 60
            ) {
                headerRef.current.classList.add("header_shrink")
            }
            else {
                headerRef.current.classList.remove("header_shrink");

            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle("active_menu")


    const concToMetamask = () => {
        conToMetaMask()

    }

    return (

        <header className='header' ref={headerRef}>
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className="d-flex gap-2 align-items-center">
                            <span>
                                <i className='ri-fire-fill'></i>
                            </span>
                            Nfts MarketPlace
                        </h2>
                    </div>
                    <div className="nav_menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className="nav_list">
                            {
                                NAV_LINKS.map((item, index) => (
                                    <li className='nav_item' key={index}>
                                        <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                                    </li>
                                ))}

                       
                        <div className="nav_right d-flex align-items-center gap-5">
                            {active ? 
                            
                            <button className="btn flex gap-2 align-items-center text-light" onClick={deac}>
                                    <span>
                                        <i class="ri-wallet-line"></i></span>{account.slice(0,3)}...{account.slice(-3)}
                                </button>
                            :
                                <button className="btn flex gap-2 align-items-center text-light" onClick={concToMetamask}>
                                    <span>
                                        <i class="ri-wallet-line"></i></span>Connet Wallet
                                </button>
                            }
                        
                    </div>
                    <div className="nav_right d-flex align-items-center gap-5">
                        {connectedUser?.signedUp ?
                        <button className="btn flex gap-2 align-items-center">
                            <span>
                               </span><Link to='/dashboard'>Dashboard</Link>
                        </button> : 
                        <button className="btn flex gap-2 align-items-center">
                        <span>
                           </span><Link to='/signup'>Sign Up</Link>
                    </button>
                        }
                        </div>
                        </ul>
                    </div>
                    <div className="nav_right d-flex align-items-center gap-5">
                    <span className='mobile_menu'>
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header