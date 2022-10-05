import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa4964406557f1eC89B8D0c86fe46CC18068833e8'
);

export default instance;
