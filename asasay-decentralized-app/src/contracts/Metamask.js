import { useState } from "react";
// import { ethers } from "ethers";
import TxList from "../utils/TxList";
const ethers = require("ethers")
export default async function startPayment ( setError, setTxs, ether, addr, onSuccessPayment ){
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
  
       window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('addr',addr);
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
      onSuccessPayment();
    } catch (err) {
      console.log('err',err);
      setError(err.message);
    }
  };