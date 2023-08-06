# LangDAO Contract

The LangDAO contract is a Solidity smart contract that implements a decentralized autonomous organization (DAO) for language-related proposals. The contract allows users to create, vote, and mark proposals as complete. Additionally, it integrates with the `Badge` and `Controller` contracts to manage proposal permissions and voting rights.

## Contract Details

- **License**: MIT
- **Solidity Version**: ^0.8.0

## Overview

The LangDAO contract acts as a decentralized governance system for language-related proposals. It maintains a list of proposals, each identified by a unique ID. Users with the appropriate permissions can create proposals and vote on them. Once a proposal is marked as complete, it cannot be voted on further.

## Features

1. **Create Proposal**: Users with the proposal rights can create new proposals with a name, description, and associated language.
2. **Vote on Proposal**: Users with voting rights can vote on proposals with options to agree, disagree, or abstain.
3. **Proposal Completion**: Proposals can be marked as complete, preventing further voting on the same proposal.
4. **Voting Rights**: The contract extends the `Controller` contract to manage voting rights based on the `Badge` contract.
5. **Proposal Data**: Proposal data, including voting counts and proposer details, is stored in the contract.

## Functions

1. `createProposal`: Allows users with proposal rights to create a new proposal with the provided details.
2. `voteProposal`: Enables users with voting rights to cast their vote (agree, disagree, or abstain) for a specific proposal.
3. `isAlreadyVoted`: Checks whether the caller has already voted on a given proposal.
4. `markComplete`: Allows the contract owner or authorized entity to mark a proposal as complete.

## Notes

- The LangDAO contract integrates with the `Badge` and `Controller` contracts to manage proposal and voting permissions. Make sure to deploy and configure these contracts properly.
- The LangDAO contract is initialized with an instance of the `Badge` contract and sets the contract deployer as the owner.
- The contract owner is responsible for managing the DAO and marking proposals as complete when necessary.

**Please Note**: The code provided here is based on the version available up to September 2021. Always use the latest version of Solidity and relevant dependencies to ensure security and up-to-date functionality.
