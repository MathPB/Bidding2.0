const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let bidding;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();


    bidding = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' +  bytecode})
    .send({ from: accounts[0], gas: '1000000'})
});

describe('Bidding', () =>{
    it('deploys a contract', () =>{
        assert.ok(bidding.options.address);
    });
    it('allows one account to enter', async () =>{
        await bidding.methods.enter('Empresa 1', 2000).send({
            from: accounts[0],
            data: web3.utils.send()
    });

        // const providers = await bidding.methods.getProviders().call({
        //     from: accounts[0]
        // });
        // assert.equal(accounts[0], providers[0])
        // assert.equal(1, providers.length)
    });



});