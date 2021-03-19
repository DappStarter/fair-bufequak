require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food chef rebel noise concert gesture flower army gauge'; 
let testAccounts = [
"0x6bd8f6328841c578355c33cb78626fe80406764c56b98738e847667aaf7efad4",
"0x731e2cdd7c72885831c9a866fcf8329a787ce7ae0c3bea9cd0e2629b49e5a33a",
"0xf05147c3485e5de9de22b276aaa1b62f19bb77fc157dc3e5a526b91b42ea61e8",
"0x5042763eb12def700e9925fba9c138a2ca5184355e7cd7f6e8a1644424abb350",
"0x8c38450a737c9a33a1c3fce064ae6a99d832faab42f700c6a5cd5a1458bf7559",
"0x6b9f9d5106acc9d510b1cd848953aadb49788938b34bbe474abafc7d3a3e2b79",
"0xcb8ae3e4ca0ab8bda031c63d24f90feab2653a6a36e3c888116d6f9b93960dfd",
"0x310b51ec7cab3352bf1bd6a89ad5c6f8588e446b3764508118ed2eb27c782370",
"0x21fbe2052a78f6b0a4c542a560cc54616a0228b76da0bf0fb57eab338a1973ea",
"0xd2b0c8382f1c1b221565f69b9865adeb4c9a2eada7c0e1db7a8b553cfea309a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
