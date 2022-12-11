// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract RetirerCBIO{
    using SafeERC20 for ERC20;

    ERC20 public cbioToken;
    mapping(address => bool) allowedRetire;
    mapping(address => uint) cbiosRetired;
    address ownerExchange;

    address retirerAuth = 0xab53369e91dcFC275744DC0A30BD3E363B2785e0;

    constructor(address _cbioToken) {
        cbioToken = ERC20(_cbioToken);
        ownerExchange = msg.sender;
        allowedRetire[retirerAuth] = true;
    }

    function addRetirer() public {
        if(msg.sender == ownerExchange){
            allowedRetire[msg.sender] = true;
        }
    }

    function isAddressAllowed(address _address) public view returns(bool){
        return allowedRetire[_address];
    }
    function getCBIOSRetired(address _address) public view returns(uint){
        return cbiosRetired[_address];
    }

    function RetireCBIO(address _sender, uint256 _amount) public {
        require(_amount > 0, "RetireCBIO: amount must be greater than 0");
        if(allowedRetire[msg.sender]){
            cbioToken.safeTransferFrom(_sender, address(this), _amount);
            cbiosRetired[_sender] += _amount;
        }
    }

}
