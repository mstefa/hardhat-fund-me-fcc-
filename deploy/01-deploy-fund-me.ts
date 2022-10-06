import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { network } from 'hardhat'
import { networkConfig } from '../helper-hardhat-config'

const deployFundMe: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deploy, log } = hre.deployments
  const { deployer } = await hre.getNamedAccounts()
  const chainId = network.config.chainId
  let ethUsdPriceFeedAddress: string

  // if (chainId == 31337) {
  // const ethUsdAggregator = await hre.deployments.get("MockV3Aggregator")
  // ethUsdPriceFeedAddress = ethUsdAggregator.address
  // } else {
  ethUsdPriceFeedAddress = networkConfig[network.name].ethUsdPriceFeed!
  // }
  log('----------------------------------------------------')
  log('Deploying FundMe and waiting for confirmations...')

  const fundMe = await deploy('FundMe', {
    from: deployer,
    args: [ethUsdPriceFeedAddress],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: 1,
  })
  log(`FundMe deployed at ${fundMe.address}`)
}

export default deployFundMe
