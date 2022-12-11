import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo_TRANSPARENT.png'
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bkg from '../images/layer_v1.png';

export default function Aposent(props) {

    const history = useNavigate();

    const [inputs, setInputs] = useState({cust: '', code:'', valor:''});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // setInputs({
        //     'nome': name == 'nome' ? value : '',
        //     'cust': name == 'cust' ? value : '',
        //     'valor': name == 'valor' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputs.cust == "" || inputs.code == "" || inputs.valor == ""){
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
        <AposentStyle>
            <Header/>
            <BoxAposentStyle>
                <BoxTitleStyle>Esteja dentro da lei, aposente seus cBios</BoxTitleStyle>
                <MyForm onSubmit={handleSubmit}>
                    
                    {/* <BoxHorStyle>
                        <InputMinorStyle
                            type="text"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Nome da empresa"
                            name="nome" 
                            value={inputs.nome} 
                            onChange={handleChange}
                        />

                        <InputMinorStyle
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            placeholder="CNPJ"
                            name="cnpj" 
                            value={inputs.cnpj} 
                            onChange={handleChange}
                        />
                    </BoxHorStyle> */}

                    <InputStyle
                        type="text"
                        onWheel={(e) => e.target.blur()}
                        placeholder="Custodiante Associado"
                        name="cust" 
                        value={inputs.valor} 
                        onChange={handleChange}
                    />

                    <BoxHorStyle>
                        <InputMinorStyle
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Código do cBio"
                            name="código" 
                            value={inputs.code} 
                            onChange={handleChange}
                        />

                        <InputMinorStyle
                            type="number"
                            onWheel={(e) => e.target.blur()}
                            placeholder="Quantidade de cBios"
                            name="valor" 
                            value={inputs.valor} 
                            onChange={handleChange}
                        />
                    </BoxHorStyle>

                    <ButtonStyle 
                    type="submit"
                    value="Sign in"
                    >
                        APOSENTAR cBios
                    </ButtonStyle>

                </MyForm>
            </BoxAposentStyle>
            <LogoStyle src={logo} alt="" />
        </AposentStyle>
    );
};

const AposentStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${bkg});
    height: 740px;
    background-size: 1600px;
`;

const BoxAposentStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2f2f2f;
    border-radius: 60px;
    width: 70%;
    height: 400px;
    margin-top: 150px;
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
    text-indent: 40px;
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

const BoxHorStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;

const InputMinorStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 49%;
    font-size: 24pt;
    font-weight: 800px;
    color: white;
    text-indent: 40px;
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
    margin-bottom: 80px;
    width: 3%;
    :hover {
        cursor: pointer;
    }
`;