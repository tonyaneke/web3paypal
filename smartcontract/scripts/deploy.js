const hre = require("hardhat");

async function main() {
  const Paypal = await hre.ethers.deployContract("Paypal");

  await Paypal.waitForDeployment();

  console.log("Paypal deployed to: ", Paypal.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
