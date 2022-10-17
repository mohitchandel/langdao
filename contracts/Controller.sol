// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Controller {
    ERC721 private badge;
    address private executor;

    constructor(ERC721 _badge, address _executor) {
        badge = _badge;
        executor = _executor;
    }

    function isExcutable() public pure returns (bool) {
        return true;
    }

    function canPropose() public pure returns (bool) {
        return true;
    }

    function canVote() public pure returns (bool) {
        return true;
    }
}
