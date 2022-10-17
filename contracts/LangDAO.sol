// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Badge.sol";
import "./Controller.sol";

contract LangDAO is Controller {
    Badge private badge;
    uint private totalDao;
    address private owner;

    enum VoteType {
        AGREE,
        DISAGREE,
        ABSTAIN
    }

    struct Proposal {
        uint id;
        uint agree;
        uint disagree;
        uint abstain;
        string name;
        string description;
        string forLang;
        bool isComplete;
        address proposer;
    }
    mapping(uint => Proposal) proposals;

    struct VotedForId {
        uint[] votedIds;
    }
    mapping(address => VotedForId) votedId;

    constructor(Badge _badge) Controller(_badge, msg.sender) {
        badge = _badge;
        owner = msg.sender;
    }

    function createProposal(
        address _proposer,
        string memory _name,
        string memory _description,
        string memory _lang
    ) external {
        require(
            Controller.canPropose(msg.sender) == true,
            "don't have proposal rights"
        );
        totalDao += 1;
        proposals[totalDao] = Proposal(
            totalDao,
            0,
            0,
            0,
            _name,
            _description,
            _lang,
            false,
            _proposer
        );
    }

    function voteProposal(VoteType _vote, uint _forId) external {
        require(Controller.canVote(msg.sender), "Can't Vote");
        require(!proposals[_forId].isComplete, "Proposal is completed");
        require(!isAlreadyVoted(_forId), "You already voted");
        votedId[msg.sender].votedIds.push(_forId);
        if (_vote == VoteType.AGREE) proposals[_forId].agree += 1;
        else if (_vote == VoteType.DISAGREE) proposals[_forId].disagree += 1;
        else proposals[_forId].abstain += 1;
    }

    function isAlreadyVoted(uint _forId) public view returns (bool) {
        bool alredyVoted = false;
        for (uint i = 0; i < votedId[msg.sender].votedIds.length; i++) {
            if (votedId[msg.sender].votedIds[i] == _forId) {
                alredyVoted = true;
                break;
            }
        }
        return alredyVoted;
    }

    function markComplete(uint _proposalId) external {
        require(!proposals[_proposalId].isComplete, "Already Completed");
        proposals[_proposalId].isComplete = true;
    }
}
