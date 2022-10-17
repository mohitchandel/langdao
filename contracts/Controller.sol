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

    function canPropose(address _proposer) public view returns (bool) {
        if (badge.balanceOf(_proposer) > 0) return true;
        else return false;
    }

    function canVote(address _voter) public view returns (bool) {
        if (badge.balanceOf(_voter) > 0) return true;
        else return false;
    }
}
