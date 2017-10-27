pragma solidity ^0.4.11;

contract MyContract {
    string name = "Harry Potter";
    uint age = 17;
    
    function MyContract() {

    }
    
    function setName(string _name) {
      name = _name;
    }
    
    function getName() constant returns (string) {
        return name;
    }

    function setAge(uint _age) {
      age = _age;
    }
    
    function getAge() constant returns (uint) {
        return age;
    }
}
