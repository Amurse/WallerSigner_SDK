const Web3 = require('web3');

const signMessage = async (message, userAddress) => {
  const web3 = window.web3;  
  const signature = await web3.eth.personal.sign(message, userAddress);
  return signature;
}

const verifyMessage = async (message, userAddress, signature) => {
  const web3 = window.web3;
  const _userAddress = await web3.eth.personal.ecRecover(message, signature);
  if (userAddress === _userAddress) return true;
  return false;
}

const getAddressFromSign = async (infuraKey, signature, message, errorHandler) => {
  const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${infuraKey}`));
  if (!web3) errorHandler && errorHandler('Could not connect to infura')
  const _address = await web3.eth.accounts.recover(message, signature);
  return _address;
}

const validateSignature = async (infuraKey, signature, message,  address) => {
  let _address = await getAddressFromSign(infuraKey, signature, message);
  if (_address.toLowerCase() !== address.toLowerCase()) return false
  //user is good
  return true
}
 


module.exports = {
  signMessage,
  verifyMessage,
  getAddressFromSign,
  validateSignature
}
