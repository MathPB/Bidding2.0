// const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// const provider = new HDWalletProvider(
//     'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
//     'https://ropsten.infura.io/v3/2fc149ec3eee4cc68d079736cd5cd351'
// );

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode, arguments:['Educação'] }) // add 0x bytecode
    .send({gas: '1000000', from: accounts[0]}); // remove 'gas'

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};

deploy();