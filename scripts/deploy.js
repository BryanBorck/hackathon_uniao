const hre = require("hardhat");

async function main() {
  const CBIO = await hre.ethers.getContractFactory("CBIO");
  const cbio = await CBIO.deploy();

  await cbio.deployed();

  console.log(
    `CBIO deployed to ${cbio.address}`
  );

  const EmissorCBIO = await hre.ethers.getContractFactory("EmissorCBIO");
  const emissorCBIO = await EmissorCBIO.deploy(cbio.address);

  await emissorCBIO.deployed();
  console.log(
    `EmissorCBIO deployed to ${emissorCBIO.address}`
  );

  const RetirerCBIO = await hre.ethers.getContractFactory("RetirerCBIO");
  const retirerCBIO = await RetirerCBIO.deploy(cbio.address);

  await retirerCBIO.deployed();
  console.log(
    `RetirerCBIO deployed to ${retirerCBIO.address}`
  );
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});