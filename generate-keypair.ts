import { Keypair } from "@solana/web3.js";
import * as dotenv from 'dotenv';

dotenv.config();

const secretKey = Buffer.from(process.env.SECRET_KEY!, 'base64');
const keypair = Keypair.fromSecretKey(secretKey);

// console.log("✅ Clé chargée avec succès depuis le fichier .env!");