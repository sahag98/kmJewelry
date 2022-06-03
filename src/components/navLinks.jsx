import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size:18px;
  align-items: center;
  justify-content: center; 
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
      border-top: 2px solid #4f46e5;
  }
`;

const Links = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;  
`;

export default function Navlinks(props) {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem><Links><Link to="About" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
                    About us
                </Link>
                </Links>
                </LinkItem>
                <LinkItem><Links><Link to="Services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
                    Services
                </Link></Links></LinkItem>
                <LinkItem><Links><Link to="Gallery" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
                    Gallery
                </Link></Links></LinkItem>
                <LinkItem><Links><Link to="Contact" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
                    Contact us
                </Link></Links></LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
}