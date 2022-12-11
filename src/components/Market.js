import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Market() {

    const history = useNavigate();

    return (
        <MarketStyle>
            <Header/>
            <TopMarketStyle>MARKET</TopMarketStyle>
        </MarketStyle>
    );
};

const MarketStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-size: 1500px;
`;

const TopMarketStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    width: 80%;
    height: 360px;
    margin-top: 100px;
`;

const TopLStyle = styled.div`
    width: 60%;
`;

const SiteTitleStyle = styled.div`
    font-size: 36pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 700;
    vertical-align: middle;
    line-height: 100px; 
`;

const SiteSubTitleStyle = styled.div`
    margin-top: 10px;
    font-size: 24pt;
    letter-spacing: 4pt;
    width: 60%;
    color: #FFFFFF;
    font-weight: 300;
    vertical-align: middle;
`;

const MarketKStyle = styled.button`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 50px;
    width: 70%;
    background-image: linear-gradient(60deg, #41FFB1, #3FBBFE);
    border-radius: 30px;
    border: 0px solid #2F2F2F;
    font-size: 16pt;
    font-weight: 600;
    letter-spacing: 2pt;
    color: #212121;
    :hover {
        color: #FFFFFF;
        background: linear-gradient(#2F2F2F, #2F2F2F) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border-radius: 30px;
        border: 2px solid transparent;
        transition: 0.3s;
    } 
    :focus {
        border: 2px solid #FFFFFF;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const SocialMediaStyle = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    width: 20%;
    height: 40px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

const TopRStyle = styled.div`
    width: 40%;
`;

const ImgRStyle = styled.div`
    margin-left: 20%;
    width: 80%;
    height: 100%;
    background-color: #2F2F2F;;
    border-radius: 40px;
`;

const NumMarketStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 200px;
    margin-top: 60px;
    border-radius: 40px;
    background-color: #2F2F2F;
`;

const NumDataStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    height: 100%;
`;

const NumBoxStyle = styled.div`
    width: 60%;
    height: 50%;
    font-size: 36pt;
    font-weight: 700;
    letter-spacing: 5pt;
    text-align: center;
    vertical-align: middle;
    line-height: 100px; 
    color: #FFFFFF;
`;

const TextBoxStyle = styled.div`
    width: 50%;
    height: 50%;
    font-size: 20pt;
    font-weight: 400;
    letter-spacing: 1pt;
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    color: #FFFFFF;
`;