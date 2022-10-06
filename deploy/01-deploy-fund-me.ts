import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { network } from "hardhat"

const deployFundMe: DeployFunction = async function ( hre: HardhatRuntimeEnvironment) {
  const { deploy, log } = hre.deployments
  const {deployer} = await hre.getNamedAccounts()
  const chainId = network.config.chainId

}

export default deployFundMe