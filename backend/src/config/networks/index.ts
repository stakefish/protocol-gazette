import near from './near'
import polkadot from './polkadot'
import cosmos from './cosmos'
import polygon from './polygon'
import kusama from './kusama'
import thegraph from './thegraph'
import flow from './flow'
import kava from './kava'
import band from './band'
import edgeware from './edgeware'
import osmosis from './osmosis'
import iris from './iris'
import casper from './casper'
import gnosis from './gnosis'
import persistence from './persistence'
import mina from './mina'
import moonbeam from './moonbeam'
import juno from './juno'
import chainlink from './chainlink'
import algorand from './algorand'
import centrifuge from './centrifuge'
import evmos from './evmos'
import agoric from './agoric'
import sentinel from './sentinel'
import ethereum from './ethereum'
import tezos from './tezos'
import solana from './solana'
import cardano from './cardano'
import umee from './umee'
import regen from './regen'
import connext from './connext'
import oasis from './oasis'
import { SourceConfig, Subconfig } from '../types'

function mergeConfigs(subconfigs: { [id: string]: Subconfig }): { [id: string]: SourceConfig } {
  let sources: { [id: string]: SourceConfig } = {}
  for (let [_, subconfig] of Object.entries(subconfigs)) {
    for (let [sourceName, source] of Object.entries(subconfig.sources)) {
      sources[sourceName] = source
    }
  }
  return sources
}

export default mergeConfigs({
    near,
    polkadot,
    cosmos,
    polygon,
    kusama,
    thegraph,
    flow,
    kava,
    band,
    edgeware,
    osmosis,
    iris,
    casper,
    gnosis,
    persistence,
    mina,
    moonbeam,
    juno,
    chainlink,
    algorand,
    centrifuge,
    evmos,
    agoric,
    sentinel,
    ethereum,
    tezos,
    solana,
    cardano,
    umee,
    regen,
    connext,
    oasis
  } as { [id: string]: Subconfig })