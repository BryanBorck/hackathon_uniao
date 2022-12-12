import React, {useState, createContext} from 'react';

import CBIOTokenABI from "../contracts/CBIOToken.sol/CBIO.json";
import EmissorCBIOABI from "../contracts/EmissorCBIO.sol/EmissorCBIO.json";
import RetirerCBIOABI from "../contracts/RetireCBIO.sol/RetirerCBIO.json";

const CBIOTokenAddress = "0xa9C300BC6383EFb62C2293c911EDF15B70Fb4c3E";
const EmissorCBIOAddress = "0x681bF6112dbc31E0f285a5a907832490c5528Eb5";
const RetirerCBIOAddress = "0x05eBc05Da4Be2fd6c93A861F959D46725dEd4357";

const Web3Context = createContext({
    CBIOTokenABI,
    EmissorCBIOABI,
    RetirerCBIOABI,
    CBIOTokenAddress,
    EmissorCBIOAddress,
    RetirerCBIOAddress,
    signer: null,
    provider: null,
    setSigner: null,
    setProvider: null,
    address: "",
    setAdress: null
});

export default Web3Context;
