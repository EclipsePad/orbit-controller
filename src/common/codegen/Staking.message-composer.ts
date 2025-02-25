/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.9.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Decimal, Addr, Uint128, InstantiateMsg, PaginationConfig, ExecuteMsg, Binary, Cw20ReceiveMsg, QueryMsg, MigrateMsg, Vault, QueryAprInfoResponse, AprInfoItem, LockingAprItem, QueryBalancesResponse, Uint64, ArrayOfTupleOfAddrAndNullableUint64, Config, QueryEssenceResponse, ArrayOfTupleOfAddrAndEssenceInfo, EssenceInfo, ArrayOfTupleOfAddrAndArrayOfLockerInfo, LockerInfo, ArrayOfQueryEssenceListResponseItem, QueryEssenceListResponseItem, Boolean, QueryRewardsReductionInfoResponse, StakerInfoResponse, EssenceAndRewardsInfo, StakerInfo, ArrayOfTupleOfAddrAndStakerInfo, StateResponse, State, UsersAmountResponse, ArrayOfUint128 } from "./Staking.types";
export interface StakingMsg {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  stake: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unstake: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  lock: ({
    amount,
    lockTier
  }: {
    amount: Uint128;
    lockTier: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unlock: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  relock: ({
    fromTier,
    toTier,
    vaultCreationDate
  }: {
    fromTier: number;
    toTier: number;
    vaultCreationDate: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdraw: ({
    vaultCreationDate
  }: {
    vaultCreationDate: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  bond: ({
    vaultCreationDateList
  }: {
    vaultCreationDateList: number[];
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  bondFor: ({
    addressAndAmountList
  }: {
    addressAndAmountList: string[][];
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unbond: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  rebond: ({
    amount,
    from,
    to
  }: {
    amount: Uint128;
    from: string;
    to: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  claim: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  aggregateVaults: ({
    tier,
    vaultCreationDateList
  }: {
    tier?: number;
    vaultCreationDateList: number[];
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  acceptAdminRole: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    admin,
    beclipAddress,
    beclipMinter,
    beclipWhitelist,
    daoTreasuryAddress,
    eclipPerSecondMultiplier,
    equinoxVoter,
    lockSchedule,
    penaltyMultiplier
  }: {
    admin?: string;
    beclipAddress?: string;
    beclipMinter?: string;
    beclipWhitelist?: string[];
    daoTreasuryAddress?: string;
    eclipPerSecondMultiplier?: Decimal;
    equinoxVoter?: string;
    lockSchedule?: number[][][];
    penaltyMultiplier?: Decimal;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePaginationConfig: ({
    paginationAmount
  }: {
    paginationAmount?: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  replenishBalance: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  decreaseBalance: ({
    amount
  }: {
    amount: Uint128;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  pause: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  unpause: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
  fixBondedVault: ({
    bondedVaultCreationDate,
    tier4VaultCreationDate,
    user
  }: {
    bondedVaultCreationDate?: number;
    tier4VaultCreationDate?: number;
    user: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class StakingMsgComposer implements StakingMsg {
  sender: string;
  contractAddress: string;
  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.lock = this.lock.bind(this);
    this.unlock = this.unlock.bind(this);
    this.relock = this.relock.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.bond = this.bond.bind(this);
    this.bondFor = this.bondFor.bind(this);
    this.unbond = this.unbond.bind(this);
    this.rebond = this.rebond.bind(this);
    this.claim = this.claim.bind(this);
    this.aggregateVaults = this.aggregateVaults.bind(this);
    this.acceptAdminRole = this.acceptAdminRole.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updatePaginationConfig = this.updatePaginationConfig.bind(this);
    this.replenishBalance = this.replenishBalance.bind(this);
    this.decreaseBalance = this.decreaseBalance.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
    this.fixBondedVault = this.fixBondedVault.bind(this);
  }
  receive = ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive: {
            amount,
            msg,
            sender
          }
        })),
        funds: _funds
      })
    };
  };
  stake = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          stake: {}
        })),
        funds: _funds
      })
    };
  };
  unstake = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unstake: {}
        })),
        funds: _funds
      })
    };
  };
  lock = ({
    amount,
    lockTier
  }: {
    amount: Uint128;
    lockTier: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          lock: {
            amount,
            lock_tier: lockTier
          }
        })),
        funds: _funds
      })
    };
  };
  unlock = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unlock: {}
        })),
        funds: _funds
      })
    };
  };
  relock = ({
    fromTier,
    toTier,
    vaultCreationDate
  }: {
    fromTier: number;
    toTier: number;
    vaultCreationDate: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          relock: {
            from_tier: fromTier,
            to_tier: toTier,
            vault_creation_date: vaultCreationDate
          }
        })),
        funds: _funds
      })
    };
  };
  withdraw = ({
    vaultCreationDate
  }: {
    vaultCreationDate: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw: {
            vault_creation_date: vaultCreationDate
          }
        })),
        funds: _funds
      })
    };
  };
  bond = ({
    vaultCreationDateList
  }: {
    vaultCreationDateList: number[];
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          bond: {
            vault_creation_date_list: vaultCreationDateList
          }
        })),
        funds: _funds
      })
    };
  };
  bondFor = ({
    addressAndAmountList
  }: {
    addressAndAmountList: string[][];
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          bond_for: {
            address_and_amount_list: addressAndAmountList
          }
        })),
        funds: _funds
      })
    };
  };
  unbond = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unbond: {}
        })),
        funds: _funds
      })
    };
  };
  rebond = ({
    amount,
    from,
    to
  }: {
    amount: Uint128;
    from: string;
    to: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          rebond: {
            amount,
            from,
            to
          }
        })),
        funds: _funds
      })
    };
  };
  claim = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          claim: {}
        })),
        funds: _funds
      })
    };
  };
  aggregateVaults = ({
    tier,
    vaultCreationDateList
  }: {
    tier?: number;
    vaultCreationDateList: number[];
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          aggregate_vaults: {
            tier,
            vault_creation_date_list: vaultCreationDateList
          }
        })),
        funds: _funds
      })
    };
  };
  acceptAdminRole = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          accept_admin_role: {}
        })),
        funds: _funds
      })
    };
  };
  updateConfig = ({
    admin,
    beclipAddress,
    beclipMinter,
    beclipWhitelist,
    daoTreasuryAddress,
    eclipPerSecondMultiplier,
    equinoxVoter,
    lockSchedule,
    penaltyMultiplier
  }: {
    admin?: string;
    beclipAddress?: string;
    beclipMinter?: string;
    beclipWhitelist?: string[];
    daoTreasuryAddress?: string;
    eclipPerSecondMultiplier?: Decimal;
    equinoxVoter?: string;
    lockSchedule?: number[][][];
    penaltyMultiplier?: Decimal;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            admin,
            beclip_address: beclipAddress,
            beclip_minter: beclipMinter,
            beclip_whitelist: beclipWhitelist,
            dao_treasury_address: daoTreasuryAddress,
            eclip_per_second_multiplier: eclipPerSecondMultiplier,
            equinox_voter: equinoxVoter,
            lock_schedule: lockSchedule,
            penalty_multiplier: penaltyMultiplier
          }
        })),
        funds: _funds
      })
    };
  };
  updatePaginationConfig = ({
    paginationAmount
  }: {
    paginationAmount?: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_pagination_config: {
            pagination_amount: paginationAmount
          }
        })),
        funds: _funds
      })
    };
  };
  replenishBalance = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          replenish_balance: {}
        })),
        funds: _funds
      })
    };
  };
  decreaseBalance = ({
    amount
  }: {
    amount: Uint128;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          decrease_balance: {
            amount
          }
        })),
        funds: _funds
      })
    };
  };
  pause = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          pause: {}
        })),
        funds: _funds
      })
    };
  };
  unpause = (_funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          unpause: {}
        })),
        funds: _funds
      })
    };
  };
  fixBondedVault = ({
    bondedVaultCreationDate,
    tier4VaultCreationDate,
    user
  }: {
    bondedVaultCreationDate?: number;
    tier4VaultCreationDate?: number;
    user: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          fix_bonded_vault: {
            bonded_vault_creation_date: bondedVaultCreationDate,
            tier_4_vault_creation_date: tier4VaultCreationDate,
            user
          }
        })),
        funds: _funds
      })
    };
  };
}