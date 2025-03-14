
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const RPC_URL = process.env.RPC_URL || "";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const blockNumber = await provider.getBlockNumber()
console.log(blockNumber)
