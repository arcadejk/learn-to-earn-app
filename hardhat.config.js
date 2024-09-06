require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",  // The Solidity version you're using in AvatarNFT.sol
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"  // Local Hardhat node
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID`,  // Replace with your Infura project ID
      accounts: [`0x${process.env.PRIVATE_KEY}`]  // Use your private key here
    }
  }
};
