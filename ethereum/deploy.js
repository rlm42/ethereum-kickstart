const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'crack suspect puppy penalty machine lunar laptop wet reason exist jar release', // Acc mneumonic
  'https://rinkeby.infura.io/v3/2a2d1ce03fcf4b4aa0d6ca88716af09c' // Infura link
);
const web3 = new Web3(provider);

const deploy = async () => { // async needs to be in a function
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: compiledFactory.bytecode })
  .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
