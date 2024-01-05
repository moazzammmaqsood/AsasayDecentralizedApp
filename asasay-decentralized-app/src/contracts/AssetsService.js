import Web3 from "web3";
import {ContractABI} from "../contracts/AssetsContractAbi";



const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
const DEPLOYMENT_ADDRESS='0xBEEf36D29E04F693f855b960d9BBCbEfCf8e4be3'; 

const RemixContract = new web3.eth.Contract(
  ContractABI,
  DEPLOYMENT_ADDRESS)
 

export async function fetchAllAssetDetail(){
  var account= localStorage.getItem("address");
  const result = await RemixContract.methods
    .getAllAssets(account).call();
  return result
}

export async function fetchAssetDetailById(id){
    const result = await RemixContract.methods
      .getAssets(id).call();
    return result
  }

  export async function fetchAssetDetailMarketplace(){
    const result = await RemixContract.methods
      .getAllAssetsMarketplace().call();
    return result
  }
  
export async function transferAsset(address,id,owner){
  var account= localStorage.getItem("address");
  const gas = await RemixContract.methods.transfer(address,id,owner).estimateGas();
  console.log("gass---<",gas);
  const result = await RemixContract.methods
    .transfer(address,id,owner).send({ from: account, gas: gas });
  return result
}
 
export async function buyAsset(address,id){
  var account= localStorage.getItem("address");
  const gas = await RemixContract.methods.buyAsset(address,id).estimateGas();
  console.log("gass---<",gas);
  const result = await RemixContract.methods
    .buyAsset(address,id).send({ from: account, gas: gas });
  return result
}
 

export async function sellAsset(id,isSell,owner){
  var account= localStorage.getItem("address");
  const gas = await RemixContract.methods.sellAsset(id,isSell,owner).estimateGas();
  console.log("gass---<",gas);
  const result = await RemixContract.methods
    .sellAsset(id,isSell,owner).send({ from: account, gas: gas });
  return result
}

export async function updateValue(id,val,owner){
  var account= localStorage.getItem("address");
  const gas = await RemixContract.methods.updateValue(id,val,account).estimateGas();
  console.log("gass---<",gas);
  const result = await RemixContract.methods
    .updateValue(id,val,account).send({ from: account, gas: gas });
  return result
}
 

export async function createRealEstate(props){
  var account= localStorage.getItem("address");

    const gas = await RemixContract.methods.createRealAssets(
          props._realEstateType,
               props._addr,
               props._size,
                 props._templateUrl,
                  props._value,
                  props._floors).estimateGas();
                  console.log("gas--->",gas);
    const result = await RemixContract.methods
      .createRealAssets( props._realEstateType,
              props._addr,
              props._size,
                props._templateUrl,
                 props._value,
                 props._floors)
      .send({ from: account, gas: '2967386' })
      
      console.log('Asset created')
   }  

   export async function createCar(props){
    var account= localStorage.getItem("address");
      const gas = await RemixContract.methods.createCarAssets(
         props._modelNo,
              props._company,
              props._registerationNo,
                props._templateUrl,
                 props._value,
                 props._wheels,
                 props._engineNo).estimateGas();
                    console.log("gas--->",'2967386');
      const result = await RemixContract.methods
        .createCarAssets(
          props._modelNo,
          props._company,
          props._registerationNo,
            props._templateUrl,
             props._value,
             props._wheels,
             props._engineNo
             )
        .send({ from: account, gas: '2967386' })
        
        console.log('Asset car created')
     }  
  


