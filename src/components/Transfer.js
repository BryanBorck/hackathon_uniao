import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo_TRANSPARENT.png'
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Transfer(props) {

    const history = useNavigate();

    const [inputs, setInputs] = useState({nome: '', cnpj: '', email: '', valor:''});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // setInputs({
        //     'nome': name == 'nome' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'valor': name == 'valor' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.nome == "" || inputs.cnpj == "" || inputs.email == "" || inputs.valor == ""){
            alert("Preencha os campos!");
            return;
        }
        const strLogin = "http://localhost:4000/login/" + inputs.nome + "/" + inputs.valor;
        
        const promise = axios.post(strLogin).then(res => {
            console.log(res.data)
            props.setHospital(res.data);
            history("/start");
        }).catch(err =>{
            console.log(err);
            alert("inputs errados!");
        })
    }

    return (
        <TransferStyle>
            <Header/>
            <BoxTransferStyle>
                <BoxTitleStyle>Transfira seus cBios para bioswap</BoxTitleStyle>
                <MyForm onSubmit={handleSubmit}>
                    
                    <InputStyle
                        type="text"
                        onWheel={(e) => e.target.blur()}
                        placeholder="Nome da empresa"
                        name="nome" 
                        value={inputs.nome} 
                        onChange={handleChange}
                    />

                    <InputStyle
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        placeholder="CNPJ"
                        name="cnpj" 
                        value={inputs.cnpj} 
                        onChange={handleChange}
                    />

                    <InputStyle
                        type="email"
                        onWheel={(e) => e.target.blur()}
                        placeholder="Email"
                        name="email" 
                        value={inputs.valor} 
                        onChange={handleChange}
                    />

                    <InputStyle
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        placeholder="Valor de cBios"
                        name="valor" 
                        value={inputs.valor} 
                        onChange={handleChange}
                    />

                    <ButtonStyle 
                    type="submit"
                    value="Sign in"
                    >
                        TRANSFERIR
                    </ButtonStyle>

                </MyForm>
            </BoxTransferStyle>
            <LogoStyle src={logo} alt="" />
        </TransferStyle>
    );
};

const TransferStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-size: 1500px;
`;

const BoxTransferStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2f2f2f;
    border-radius: 60px;
    width: 70%;
    height: 520px;
    margin-top: 100px;
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

const LogoStyle = styled.img`
    margin-top: 30px;
    width: 3%;
`;

