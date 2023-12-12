import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { Create2Factory } from '../src/Create2Factory'
import { ethers } from 'hardhat'

const deployEntryPoint: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const from =  process.env["PRIVATE_KEY"];
  if (from === undefined) {
    throw new Error("Please set the PRIVATE_KEY env variable.");
  }

  const ret = await hre.deployments.deploy(
    'EntryPoint', {
      from: from,
      args: [],
      gasLimit: 6e6,
      deterministicDeployment: false
    })
  console.log('==entrypoint addr=', ret.address)
/*
  const entryPointAddress = ret.address
  const w = await hre.deployments.deploy(
    'SimpleAccount', {
      from,
      args: [entryPointAddress, from],
      gasLimit: 2e6,
      deterministicDeployment: true
    })

  console.log('== wallet=', w.address)

  const t = await hre.deployments.deploy('TestCounter', {
    from,
    deterministicDeployment: true
  })
  console.log('==testCounter=', t.address)
  */
}

export default deployEntryPoint
