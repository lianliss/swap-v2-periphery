const { ethers } = require("hardhat");

const main = async () => {
  const contract = await ethers.getContractFactory("UniswapV2Router02");
  const router = await contract.deploy(
      "0xa6FfF50C671023eCbd83F4a259bB0fDA20faEbC4",
      "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED",
  );

  await router.deployed();

  console.log("router deployed:", router.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });