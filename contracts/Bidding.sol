pragma solidity^0.4.17;

contract Bidding{
    address public organ;
    
    address[] provider;
    string[] public name;
    uint[] public value;

    uint i = 0;
    
    function Bidding() public{
        organ = msg.sender;
    }
    
    function enter(string _name) public{
        // require(msg.sender != organ);
        // require(_value > 1000);
        provider.push(msg.sender);
        // name.push(_name);
        // value.push(_value);
    }
    
    // function getProviders() public view returns (address[]){
    //     return provider;
    // }
    
    // function lowestOffer() public returns(uint minimum)  {
    //     require(msg.sender == organ);
        
    //     uint smallest = 9999999; 
        
    //     for(i = 0; i < value.length; i++){
    //         if(value[i] < smallest) {
    //             smallest = value[i];
    //         }
    //     }
    //     return minimum = smallest;
    // }
    
    // function pickWinner() public returns(address addrWinner, string nameWinner)  {
    //     require(msg.sender == organ);
        
    //     uint smallest = 9999999; 
        
    //     for(i = 0; i < value.length; i++){
    //         if(value[i] < smallest) {
    //             addrWinner = provider[i];
    //             nameWinner = name[i];
    //             smallest = value[i];
    //         }
    //     }
    // }
    
}