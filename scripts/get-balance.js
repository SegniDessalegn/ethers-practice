
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const RPC_URL = process.env.RPC_URL || "";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

async function main() {
    const balance = await provider.getBalance("0xf9DD42c7b447eA5B7430ccC614407F59B94d0bD0");
    console.log(balance);
    const ethBalance = ethers.utils.formatEther(balance);
    console.log(`Balance: ${ethBalance} ETH`);
    const weiBalance = ethers.utils.formatUnits(balance, "wei");
    console.log(`Balance: ${weiBalance} wei`);
}

main();
