// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract math{
    uint NUM;
    //create a function that writes a mood to the smart contract
function setNUMBER(uint _num) public{
    NUM= _num;
}

//create a function that reads the mood from the smart contract
function getNUMBER() public view returns(uint){
    return NUM;
}
}