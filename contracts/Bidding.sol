pragma solidity^0.4.17;

contract Bidding{
    address public organ;
    string public nameOrgan;
    
    address[] provider;
    string[] name;
    uint[] value;

    uint i = 0;
    
    function Bidding(string _nameOrgan) public{
        organ = msg.sender;
        nameOrgan = _nameOrgan;
    }
    
    function enter(string _name, uint _value) public payable{
        require(msg.sender != organ);
        require(_value > 1000);
        provider.push(msg.sender);
        name.push(_name);
        value.push(_value);
    }
    
    function lowestOffer() public view returns(uint minimum, address addrWinner, string nameWinner)  {
        require(msg.sender == organ);
        
        uint smallest = 9999999; 
        
        for(i = 0; i < value.length; i++){
            if(value[i] < smallest) {
                addrWinner = provider[i];
                nameWinner = name[i];
                smallest = value[i];
                minimum = smallest;
            }
        }
    }
    
    function getProviders() public view returns (address[]){
        return provider;
    }
}