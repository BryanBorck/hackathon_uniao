import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo_TRANSPARENT.png'
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-dropdown-select";
import SocialFollow from "./SocialFollow"
import bkg from '../images/layer_v1.png';

export default function Connect(props) {

    const history = useNavigate();

    const [inputs, setInputs] = useState({inputdata: '', outputdata:''});

    const [selected, setSelected] = useState("");
  
    const options = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // setInputs({
        //     'inputdata': name == 'inputdata' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'outputdata': name == 'outputdata' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.inputdata == "" || inputs.outputdata == ""){
            alert("Preencha os campos!");
            return;
        }
        const strLogin = "http://localhost:4000/login/" + inputs.inputdata + "/" + inputs.outputdata;
        
        const promise = axios.post(strLogin).then(res => {
            console.log(res.data)
            props.setHospital(res.data);
            history("/start");
        }).catch(err =>{
            console.log(err);
            alert("inputdata ou senha errados!");
        })
    }

    return (
        <ConnectStyle>
            <Header/>
            <BoxConnectStyle>
                <BoxTitleStyle>Negocie Agora</BoxTitleStyle>
                <MyForm onSubmit={handleSubmit}>

                    {/* <LabelStyle>inputdata</LabelStyle> */}
                    
                    <InputStyle
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    placeholder="Valor inputado"
                    name="inputdata" 
                    value={inputs.inputdata} 
                    onChange={handleChange}
                    />

                    {/* <Select options={options} onChange={(selected) => this.setSelected(selected)} /> */}

                    {/* <LabelStyle>outputdata</LabelStyle> */}

                    <InputStyle
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    placeholder="Resultado"
                    name="outputdata" 
                    value={inputs.outputdata} 
                    onChange={handleChange}
                    />

                    <ButtonStyle 
                    type="submit"
                    value="Sign in"
                    >
                        CONECTAR
                    </ButtonStyle>

                </MyForm>
            </BoxConnectStyle>
            <SocialFollow />
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
    background-image: url(${bkg});
    height: 740px;
    background-size: 1600px;
`;

const BoxConnectStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(47, 47, 47, 0.7);
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
    font-size: 24pt;
    font-weight: 800px;
    color: white;
    text-indent: 60px;
    letter-spacing: 1pt;
    vertical-align: middle;
    line-height: 40px;
    
    background: linear-gradient(#2A2A2A, #2A2A2A) padding-box,
                linear-gradient(60deg, #41FFB1, #3FBBFE) border-box;
    border: 2px solid transparent;
    border-radius: 30px;
    height: 80px;
    margin-bottom: 20px;
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
    width: 90%;
    height: 80px;
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

const SocialMediaStyle = styled.div`
    margin-top: 30px;
    width: 10%;
    height: 40px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

const LogoStyle = styled.img`
    margin-top: 30px;
    margin-bottom: 50px;
    width: 3%;
    :hover {
        cursor: pointer;
    }
`;