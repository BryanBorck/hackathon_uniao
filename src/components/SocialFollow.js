import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <SFStyle>
        <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </SFStyle>
  );
}

const SFStyle = styled.div`
    margin-top: 20px;
    padding: 10px 10px;

    a.social {
        margin: 0 1rem;
        transition: transform 250ms;
        display: inline-block;
        color: white;
    }

    a.social:hover {
        transform: translateY(-4px);
    }

    /* a.youtube {
        color: #eb3223;
    }
    
    a.facebook {
        color: #4968ad;
    }
    
    a.twitter {
        color: #49a1eb;
    }
    
    a.instagram {
        color: black;
    } */
`;