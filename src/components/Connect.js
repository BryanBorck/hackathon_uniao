import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo_BLACK.png'
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Connect(props) {

    const history = useNavigate();

    const [inputs, setInputs] = useState({username: '', password:''});

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
        if(inputs.username == "" || inputs.password == ""){
            alert("Preencha os campos!");
            return;
        }
        const strLogin = "http://localhost:4000/login/" + inputs.username + "/" + inputs.password;
        
        const promise = axios.post(strLogin).then(res => {
            console.log(res.data)
            props.setHospital(res.data);
            history("/start");
        }).catch(err =>{
            console.log(err);
            alert("Username ou senha errados!");
        })
    }

    return (
        <ConnectStyle>
            <Header/>
            <BoxConnectStyle>
                <BoxTitleStyle>Negocie Agora</BoxTitleStyle>
                <MyForm onSubmit={handleSubmit}>

                    {/* <LabelStyle>USERNAME</LabelStyle> */}
                    
                    <InputStyle
                    type="text"
                    placeholder="your username"
                    name="username" 
                    value={inputs.username} 
                    onChange={handleChange}
                    />

                    {/* <LabelStyle>PASSWORD</LabelStyle> */}

                    <InputStyle
                    type="password"
                    placeholder="your password"
                    name="password" 
                    value={inputs.password} 
                    onChange={handleChange}
                    />

                    <ButtonStyle 
                    type="submit"
                    value="Sign in"
                    >
                        SIGN IN
                    </ButtonStyle>

                </MyForm>
            </BoxConnectStyle>
            <SocialMediaStyle></SocialMediaStyle>
            <LogoStyle src={logo} alt="" />
        </ConnectStyle>
    );
};

const ConnectStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-size: 1500px;
`;

const BoxConnectStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2f2f2f;
    border-radius: 60px;
    width: 50%;
    height: 400px;
    margin-top: 120px;
`;

const BoxTitleStyle = styled.div`
    font-size: 24pt;
    letter-spacing: 1pt;
    color: #FFFFFF;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    line-height: 80px; 
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;
    padding-bottom: 40px;
    padding-top: 10px;
`;

const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 80%;
    text-indent: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size:   12pt;
    font-weight: 700px;
    color:  #FFFFFF;
    letter-spacing: 3pt;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const InputStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    font-size: 30pt;
    font-weight: 800px;
    color: #427F80;
    text-indent: 60px;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 80px;
    
    background: #9AD1D2;
    border-radius: 30px;
    border: 0px solid #1F6B6C;
    height: 80px;
    margin-bottom: 20px;
    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    :hover {
        background: #1F6B6C;
    } 
    :focus {
        background: #FFFFFF;
    } 
    ::-webkit-input-placeholder {
        font-size: 20pt;
        color: #FFFFFF;
        font-weight: 400px;
        opacity: 80%;
    }
`;

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    font-size:  18pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;
    border-radius: 30px;
    background: #1F6B6C;
    height: 80px;
    border: 0;
    outline: 0;
    :hover {
        transition: 1s;
        background: #F4E4D4;
    } 
    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const SocialMediaStyle = styled.div`
    margin-top: 30px;
    width: 10%;
    height: 40px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

const LogoStyle = styled.img`
    margin-top: 30px;
    width: 3%;
`;