Amurse SDK for signing messages for different wallets

### MetaMask
Functions to interact with MetaMask

#### signMessage(message, userAddress)
signs MetaMask message, only available browser side

#### verifyMessage(message, userAdderss, signature)
verifies message on browser/client side only.

#### getAddressFromSign(infuraKey, signature, message,  errorHandler)
extracts an address from a sign, given an infura key

#### validateSignature(infuraKey, signature, message, address)
extracts address from sign and compares to given address; returns false if no match, else returns true


## Code Example
```
yarn add '@amurse/signer_sdk';

import {MetaMask} from '@amurse/signer_sdk';

// all functions are async 

let sign = await MetaMask.signMessage('hello!', 'ETH_address');

let valid = await MetaMask.validateSignature(infuraKey, sign, 'ETH_address');

console.log(valid)
```








