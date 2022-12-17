const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("USDToken", function () {
  it("should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const USDToken = await ethers.getContractFactory("USDToken");

    const hardhatToken = await USDToken.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
