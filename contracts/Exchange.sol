// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange is ERC20 {

    address public cbiosTokenAddress;

    constructor(address _Cbiostoken) ERC20("CBios", "CBIO") {
        require(_Cbiostoken != address(0), "Token address passed is a null address");
        cbiosTokenAddress = _Cbiostoken;
    }

    function getReserve() public view returns (uint) {
        return ERC20(cbiosTokenAddress).balanceOf(address(this));
    }

    function addLiquidity(uint _amount) public payable returns (uint) {
        uint liquidity;
        uint ethBalance = address(this).balance;
        uint cbiosTokenReserve = getReserve();
        ERC20 cbiosToken = ERC20(cbiosTokenAddress);

        if(cbiosTokenReserve == 0) {
            cbiosToken.transferFrom(msg.sender, address(this), _amount);

            liquidity = ethBalance;
            _mint(msg.sender, liquidity);
        } else {
            uint ethReserve =  ethBalance - msg.value;
            uint cbiosTokenAmount = (msg.value * cbiosTokenReserve)/(ethReserve);

            require(_amount >= cbiosTokenAmount, "Amount of tokens sent is less than the minimum tokens required");
            cbiosToken.transferFrom(msg.sender, address(this), cbiosTokenAmount);
            liquidity = (totalSupply() * msg.value)/ ethReserve;
            _mint(msg.sender, liquidity);
        }
         return liquidity;
    }

    function removeLiquidity(uint _amount) public returns (uint , uint) {
        require(_amount > 0, "_amount should be greater than zero");
        uint ethReserve = address(this).balance;
        uint _totalSupply = totalSupply();
        uint ethAmount = (ethReserve * _amount)/ _totalSupply;
        uint cbiosTokenAmount = (getReserve() * _amount)/ _totalSupply;
        _burn(msg.sender, _amount);
        payable(msg.sender).transfer(ethAmount);
        ERC20(cbiosTokenAddress).transfer(msg.sender, cbiosTokenAmount);
        return (ethAmount, cbiosTokenAmount);
    }

    function getAmountOfTokens(
        uint256 inputAmount,
        uint256 inputReserve,
        uint256 outputReserve
    ) public pure returns (uint256) {
        require(inputReserve > 0 && outputReserve > 0, "invalid reserves");
        uint256 inputAmountWithFee = inputAmount * 99;
        uint256 numerator = inputAmountWithFee * outputReserve;
        uint256 denominator = (inputReserve * 100) + inputAmountWithFee;
        return numerator / denominator;
    }

    function ethToCbiosToken(uint _minTokens) public payable {
        uint256 tokenReserve = getReserve();

        uint256 tokensBought = getAmountOfTokens(
            msg.value,
            address(this).balance - msg.value,
            tokenReserve
        );

        require(tokensBought >= _minTokens, "insufficient output amount");
        ERC20(cbiosTokenAddress).transfer(msg.sender, tokensBought);
    }

    function cbiosTokenToEth(uint _tokensSold, uint _minEth) public {
        uint256 tokenReserve = getReserve();
        uint256 ethBought = getAmountOfTokens(
            _tokensSold,
            tokenReserve,
            address(this).balance
        );
        require(ethBought >= _minEth, "insufficient output amount");
        ERC20(cbiosTokenAddress).transferFrom(
            msg.sender,
            address(this),
            _tokensSold
        );
        payable(msg.sender).transfer(ethBought);
    }
}