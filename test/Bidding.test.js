const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let bidding;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    bidding = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' +  bytecode})
    .send({ from: accounts[0], gas: '1000000'})

    bidding.setProvider(provider);
});

describe('Bidding', () =>{
    it('deploys a contract', () =>{
        assert.ok(bidding.options.address);
        console.log(bidding);
    });
    it('allows one account to enter', async () =>{
        const nameOrgan = await bidding.methods.nameOrgan().call();
        // assert.equal(nameOrgan, 'Educação');
        console.log(nameOrgan);
    });
    it('name of the provider', async () => {
        await bidding.methods.enter('Empresa 1',2000).send({ from: accounts[1], gas: '1000000'});

        // const provider = await bidding.methods.getProviders().call({
        //     from: accounts[0] 
        // });
        
        // assert.equal(accounts[0], provider[0]);
        // assert.equal(1, provider.length);
    });
    it(' pick lowest offer', async() => {
        await bidding.methods.lowestOffer().send({ from: accounts[0]})
    });

    it(' pick winner', async() => {
        await bidding.methods.pickWinner().send({ from: accounts[0]})
    });



});