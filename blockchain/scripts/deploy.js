async function main() {
  // Get the contract factory
  const AvatarNFT = await ethers.getContractFactory("AvatarNFT");
  
  // Deploy the contract
  const avatarNFT = await AvatarNFT.deploy();
  
  // Wait for the contract to be deployed
  await avatarNFT.deployed();

  console.log("AvatarNFT deployed to:", avatarNFT.address);
}

// Execute the deployment
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
