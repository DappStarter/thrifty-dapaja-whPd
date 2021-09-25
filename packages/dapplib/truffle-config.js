require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note muscle come gesture fantasy equal genius'; 
let testAccounts = [
"0x142a70550f7937da3a1926c59c4b9db83efaeace9895c882ab34bb2d6f47ba64",
"0x91935fc21cdf864b37b210cc1431721bd538df95df081dae82f6306eecac1c2a",
"0xee6001b6f5b2e0156d08af7c242686c1355ff4b78d5d42a29e5d245450db0e26",
"0xdcc4810631efc81c0efdbc62b90f55e12e0c33ac2504f15a3480b2cf3aee5bb7",
"0x8ef0b37297ae3213976f96d29a837fa677f7bddba454e774b7fc1b81b18bf44e",
"0xdfa6e991768f7c8eb365e455e258a1e2dfe9b5fa5937451cfd4981ac8a28fa61",
"0xce17083713ba8cee18ca03a1e008a9a5dbc8f5109337be981ec55cf9a7729eef",
"0xfc768aca4ffb87f5d111835751af5bbe2f08236031eed9767efb00935fd90479",
"0x22a80f02696cb383ba03fe86d5dce4da4af2db8a59078c4ecf787000bfbcee19",
"0x1aadb2219835b6a064d76f41357ffca14efa47660ff7ccc55f3340ff35db5740"
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
            version: '^0.8.0'
        }
    }
};

