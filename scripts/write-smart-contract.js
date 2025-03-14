import { ethers } from 'ethers';
import dotenv from 'dotenv';
import { KLEROS_ABI } from '../constants/abi.js';

dotenv.config();

const RPC_URL = process.env.RPC_URL || '';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contractAddress = "0xA7F42ff7433cB268dD7D59be62b00c30dEd28d3D";
const contractABI = KLEROS_ABI;

async function main() {
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    const randomTxHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(Date.now().toString()));

    try {
        const tx = await contract.pong(randomTxHash);
        console.log("Pong transaction sent:", tx.hash);
        await tx.wait();
        console.log("Pong transaction confirmed.");
    } catch (error) {
        console.error("Error calling pong:", error);
    }
}

main();
