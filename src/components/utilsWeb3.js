import React from 'react';
import Web3 from 'web3';
import {ethers} from 'ethers';

//create fuction to connect to metamask
export const connectToMetamask = async () => {

    if(!window.ethereum) {
        alert("Please install Metamask");
        return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    //@ts-ignore
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(44787).toString(16)}` }],
      });
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    return [signer, provider, address];

}
    