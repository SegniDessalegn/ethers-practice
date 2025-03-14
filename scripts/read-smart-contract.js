
import { ethers } from 'ethers';
import dotenv from 'dotenv';
import { KLEROS_ABI } from '../constants/abi.js';

dotenv.config();

const RPC_URL = process.env.RPC_URL || '';

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const contractAddress = "0xA7F42ff7433cB268dD7D59be62b00c30dEd28d3D";
const contractABI = KLEROS_ABI;

async function main() {
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const pinger = await contract.pinger();
    console.log(pinger);
}

main();
