const hre = require("hardhat");

async function main() {
  const CBIO = await hre.ethers.getContractFactory("CBIO");
  const cbio = await CBIO.deploy();

  await cbio.deployed();

  console.log(
    `MedicalData deployed to ${cbio.address}`
  );

  const EmissorCBIO = await hre.ethers.getContractFactory("EmissorCBIO");
  const emissorCBIO = await EmissorCBIO.deploy(cbio.address);

  await emissorCBIO.deployed();
  console.log(
    `EmissorCBIO deployed to ${emissorCBIO.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});