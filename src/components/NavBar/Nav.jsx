import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'; 
import "./Nav.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Toggle from './Toggle/Toggle';

const Nav = ({setdarkMode , darkMode}) => {
    const menuLetta = useRef([]);
    const menuClose = useRef(null);
    const mainMenu = useRef(null);

    const tl = useRef(null);
    // Saves state for animation
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        // Toggles menu state
        setIsOpen((prev) => !prev);
    }

    const menuLink = [
        {
            link: "Home",
            href: "/"
        },
        {
            link: "About",
            href: "/About"
        },
        {
            link: "Awards",
            href: "/Awards"
        },
        {
            link: "Works",
            href: "/Work"
        },
        {
            link: "Contact",
            href: "/Contact"
        },
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        gsap.set(menuLetta.current, { xPercent: -150 });
        gsap.set(mainMenu.current, { xPercent: -1000 });
        mm.add("(min-width: 768px)", () => {
            tl.current = gsap.timeline({ paused: true, defaults: { duration: 1.2, ease: 'expo.inOut' } });

            tl.current
                .to(mainMenu.current, {
                    xPercent: 0,
                })
                .to(menuLetta.current, { xPercent: 0, }, '-=0.6')
                .to(menuClose.current, {
                    autoAlpha: 1,
                }, "<")
        });

        mm.add("(max-width: 768px)", () => {
            // Mobile animation
            gsap.set(menuLetta.current, { yPercent: -150 });

            tl.current = gsap.timeline({ paused: true, defaults: { duration: 1.2, ease: 'expo.inOut' } });

            tl.current
                .to(mainMenu.current, {
                    xPercent: 0,
                })
                .to(menuLetta.current, { yPercent: 0, stagger: 0.24, }, '-=0.6')
                .to(menuClose.current, {
                    autoAlpha: 1,
                },)
        });
    });

    useEffect(() => {
        if (isOpen) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }, [isOpen]);

    return (
        <section className='vole'>
            <div ref={mainMenu} className='menu'>
                <div className="menu-link-items">
                    {menuLink.map(({ link, href, index }) => (
                        <div
                        onClick={toggleMenu}
                            key={link}
                            ref={(el) => menuLetta.current[index] = el}
                            className="menu-items">
                            <Link to={href}>{link}</Link> {/* Replaced <a> with <Link> */}
                        </div>
                    ))}
                    <div
                        onClick={toggleMenu}
                        ref={menuClose}
                        className="menu-close">CLOSE</div>
                </div>
            </div>
            <div className="menu-outside">
                <div className="outside-link">
                 
                    
                          <div
                        className="connect"><img src="/Images/Works/logo.png" alt="" /></div>
                        <Toggle darkMode= {darkMode} setdarkMode ={setdarkMode}/>

<div
                        onClick={toggleMenu}
                        className="menu-open">MENU</div>
                </div>
            </div>
        </section>
    );
}

export default Nav;
