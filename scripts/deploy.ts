import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const ERC3525Starter = await ethers.getContractFactory("ERC3525Starter");
  const erc3525Starter = await ERC3525Starter.deploy(owner.address);

  await erc3525Starter.deployed();

  console.log("ERC3525Starter deployed to:", erc3525Starter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
