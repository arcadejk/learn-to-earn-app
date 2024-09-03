// blockchain/AvatarNFT.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AvatarNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Avatar {
        uint256 level;
        uint256 xp;
    }

    mapping(uint256 => Avatar) public avatars;

    constructor() ERC721("LanguageLearnerAvatar", "LLA") {}

    function mintAvatar(address recipient) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        avatars[newItemId] = Avatar(1, 0);
        return newItemId;
    }

    function levelUp(uint256 tokenId) public {
        require(_exists(tokenId), "Avatar does not exist");
        require(ownerOf(tokenId) == msg.sender, "You don't own this avatar");
        
        Avatar storage avatar = avatars[tokenId];
        avatar.level += 1;
    }

    function addXP(uint256 tokenId, uint256 xpAmount) public {
        require(_exists(tokenId), "Avatar does not exist");
        require(ownerOf(tokenId) == msg.sender, "You don't own this avatar");
        
        Avatar storage avatar = avatars[tokenId];
        avatar.xp += xpAmount;
    }
}