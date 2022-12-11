import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from "./Header";
import bkg from '../images/layer_v1.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useState} from "react";
import axios from "axios";

export default function Market() {

    const [users, setUsers] = useState([])

    const history = useNavigate();

    useEffect(() => {
        const url = "http://localhost:4000/usuarios/1";
        axios.get(url).then(res => {
            console.log(res.data);
            setUsers(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const [inputs, setInputs] = useState({});
    const [search, setSearch] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // setInputs({
        //     'username': name == 'username' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'password': name == 'password' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(!search);
    }

    return (
        <MarketStyle>
            <Header/>
            <DivStyle>
                <TitleStyle>Players do Mercado</TitleStyle>
                <LineStyle></LineStyle>
                <MyForm onSubmit={handleSubmit}>

                    <LabelStyle>Wallet Address</LabelStyle>
                    <InputStyle
                    type="text"
                    placeholder="enterprise's key from wallet"
                    name="key" 
                    value={inputs.key || ""} 
                    onChange={handleChange}
                    />
                    <ButtonStyle 
                    type="submit"
                    value="Sign in">
                        SEARCH
                    </ButtonStyle>

                </MyForm>

                <LineStyle></LineStyle>

                {search && <ListStyle>

                    {users.map((user,idx) => {
                        return(
                            <EnterpriseStyle key={idx}>
                                <KeyStyle>{user.public_key}</KeyStyle>
                                <NameStyle>{user.nome}</NameStyle>
                                <RightButtonStyle onClick={() => history("/exams")}>ACESSAR</RightButtonStyle>
                            </EnterpriseStyle>
                        );
                    })}
                    <EnterpriseStyle>
                        <KeyStyle>fnskjnfi3ho123urfniu32en</KeyStyle>
                        <NameStyle>Gabriel Bolacha</NameStyle>
                        <RightButtonStyle onClick={() => history("/exams")}>ACESSAR</RightButtonStyle>
                    </EnterpriseStyle>
                    <EnterpriseStyle>
                        <KeyStyle>fnskjnfi3ho123urfniu32en</KeyStyle>
                        <NameStyle>Gabriel Bolacha</NameStyle>
                        <RightButtonStyle onClick={() => history("/exams")}>ACESSAR</RightButtonStyle>
                    </EnterpriseStyle>
                    <EnterpriseStyle>
                        <KeyStyle>fnskjnfi3ho123urfniu32en</KeyStyle>
                        <NameStyle>Gabriel Bolacha</NameStyle>
                        <RightButtonStyle onClick={() => history("/exams")}>ACESSAR</RightButtonStyle>
                    </EnterpriseStyle>
                    <EnterpriseStyle>
                        <KeyStyle>fnskjnfi3ho123urfniu32en</KeyStyle>
                        <NameStyle>Gabriel Bolacha</NameStyle>
                        <RightButtonStyle onClick={() => history("/exams")}>ACESSAR</RightButtonStyle>
                </EnterpriseStyle>

                </ListStyle>}
            </DivStyle>
        </MarketStyle>
    );
};

const MarketStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${bkg});
    height: 1000px;
    background-size: 1600px;
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 1600px;
`;

const TitleStyle = styled.div`
    width: 90%;
    padding-top: 120px;
    margin-left: 10%;
    font-size:  24pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 400;
`;

const LineStyle = styled.div`
    width: 80%;
    margin-top: 20px;
    height: 1px;
    background:  #FFFFFF;
`;

const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 80%;
    text-indent: 30px;
    font-size:   14pt;
    font-weight: 600px;
    color:  #FFFFFF;
    letter-spacing: 3pt;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 240px;
`;

const InputStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: 20pt;
    font-weight: 400;
    color: white;
    text-indent: 40px;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 40px;
    
    background: linear-gradient(#2A2A2A, #2A2A2A) padding-box,
                linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
    border: 2px solid transparent;
    border-radius: 30px;
    height: 60px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background: linear-gradient(#2f2f2f, #2f2f2f) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border: 2px solid transparent;
    } 
    ::-webkit-input-placeholder {
        font-size: 20pt;
        color: #FFFFFF;
        font-weight: 300;
        opacity: 50%;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    margin-top: 40px;
    background-image: linear-gradient(60deg, #41FFB1, #3FBBFE);
    border-radius: 30px;
    border: 0px solid #2F2F2F;
    font-size: 18pt;
    font-weight: 600;
    color: #212121;
    :hover {
        color: #FFFFFF;
        background: linear-gradient(#2F2F2F, #2F2F2F) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border: 2px solid transparent;
        transition: 0.3s;
        cursor: pointer;
    } 
    :focus {
        border: 2px solid #FFFFFF;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;


const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const EnterpriseStyle = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;
    border-radius: 25px;
    background: rgb(47, 47, 47, 0.3);
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
    height: 60px;
    margin-top: 40px;
    outline: 0;
`;

const KeyStyle = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 45%;
    overflow: hidden;
    font-size:  16pt;
    letter-spacing: 3pt;
    text-indent: 40px;
    color:  #FFFFFF;
    font-weight: 600;
`;

const NameStyle = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 35%;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;
`;

const RightButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 750;
    background-image: linear-gradient(60deg, #41FFB1, #3FBBFE);
    border-radius: 100px 30px 30px 0px;
    height: 60px;
    border: 2px solid #FFFFFF;
    :hover {
        color: #FFFFFF;
        background: linear-gradient(#2F2F2F, #2F2F2F) padding-box,
                    linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
        border-radius: 100px 30px 30px 0px;
        border: 2px solid transparent;
        transition: 1s;
        cursor: pointer;
    } 
    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;