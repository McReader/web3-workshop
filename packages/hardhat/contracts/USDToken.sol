pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDToken is ERC20 {
    constructor() ERC20("Synthetic US Dollar", "0xUSD") {
    }
}
