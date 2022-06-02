import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { Link } from 'react-scroll';

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    z-index:99;
`;

const LinksWrapper = styled.div`
    margin: 0;
    padding: 15px;
    display: flex;
    height: 20%;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0.1em 1.1em;
  color: #222;
  font-weight: 500;
  font-size:18px;
  display: flex;
  
`;

const Links = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;  
`;

export default function MobileNavlinks(props) {
    const [isOpen, setOpen] = useState(false);

    // const closeMenu =() => {
    //     setOpen(false)
    // }

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <LinksWrapper>
                    <LinkItem>
                        <Links><Link  onClick={() => setOpen(false)}to="About" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              About us
            </Link></Links>
                    </LinkItem>
                    <LinkItem>
                        <Links><Link  onClick={() => setOpen(false)}to="Services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              Services
            </Link></Links>
                    </LinkItem>
                    <LinkItem>
                        <Links ><Link  onClick={() => setOpen(false)}to="Gallery" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              Gallery
            </Link></Links>
                    </LinkItem>
                    <LinkItem>
                        <Links><Link  onClick={() => setOpen(false)}to="Contact" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              Contact us
            </Link></Links>
                    </LinkItem>
                </LinksWrapper>
            )}
        </NavLinksContainer>
    )
}