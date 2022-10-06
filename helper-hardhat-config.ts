export interface networkConfigItem {
  name: string
  ethUsdPriceFeed: string
  blockConfirmations: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}
export const networkConfig: networkConfigInfo = {
  31337: {
    name: 'localhost',
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  5: {
    name: 'goerli',
    ethUsdPriceFeed: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
  },
}

const developmentChains = ['hardhat', 'localhost']

module.exports = {
  networkConfig,
  developmentChains,
}
