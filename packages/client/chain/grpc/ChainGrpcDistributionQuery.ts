import BaseGrpc from '../../BaseGrpc'
import * as distributionQuery from '../../../../chain/cosmos/distribution/v1beta1/query'
export class ChainGrpcDistributionQuery extends BaseGrpc {
  protected client: distributionQuery.QueryClientImpl
  constructor(endpoint: string) {
    super(endpoint)
    this.client = new distributionQuery.QueryClientImpl(this.getGrpcWebImpl(endpoint))
  }

  async getValidatorDistributionInfo({
    validator_address
  }: {
    validator_address: string
  }): Promise<distributionQuery.QueryValidatorDistributionInfoResponse> {
    try {
      const request = distributionQuery.QueryValidatorDistributionInfoRequest.create({
        validator_address
      })
      const response = await this.retry(() => this.client.ValidatorDistributionInfo(request))
      return response as distributionQuery.QueryValidatorDistributionInfoResponse
    } catch (e) {
      throw e
    }
  }

  async getValidatorOutstandingRewards({
    validator_address
  }: {
    validator_address: string
  }): Promise<distributionQuery.QueryValidatorOutstandingRewardsResponse> {
    try {
      const request = distributionQuery.QueryValidatorOutstandingRewardsRequest.create({
        validator_address
      })
      const response = await this.retry(() => this.client.ValidatorOutstandingRewards(request))
      return response as distributionQuery.QueryValidatorOutstandingRewardsResponse
    } catch (e) {
      throw e
    }
  }

  async getValidatorCommission({
    validator_address
  }: {
    validator_address: string
  }): Promise<distributionQuery.QueryValidatorCommissionResponse> {
    try {
      const request = distributionQuery.QueryValidatorCommissionRequest.create({
        validator_address
      })
      const response = await this.retry(() => this.client.ValidatorCommission(request))
      return response as distributionQuery.QueryValidatorCommissionResponse
    } catch (e) {
      throw e
    }
  }

  async getValidatorSlashes({
    validator_address,
    starting_height,
    ending_height
  }: {
    validator_address: string
    starting_height: string
    ending_height: string
  }): Promise<distributionQuery.QueryValidatorSlashesResponse> {
    try {
      const request = distributionQuery.QueryValidatorSlashesRequest.create({
        validator_address,
        starting_height,
        ending_height
      })
      const response = await this.retry(() => this.client.ValidatorSlashes(request))
      return response as distributionQuery.QueryValidatorSlashesResponse
    } catch (e) {
      throw e
    }
  }
  async getDelegationRewards({
    delegator_address,
    validator_address
  }: {
    delegator_address: string
    validator_address: string
  }): Promise<distributionQuery.QueryDelegationRewardsResponse> {
    try {
      const request = distributionQuery.QueryDelegationRewardsRequest.create({
        delegator_address,
        validator_address
      })
      const response = await this.retry(() => this.client.DelegationRewards(request))
      return response as distributionQuery.QueryDelegationRewardsResponse
    } catch (e) {
      throw e
    }
  }
  async getDelegationTotalRewards({
    delegator_address
  }: {
    delegator_address: string
  }): Promise<distributionQuery.QueryDelegationTotalRewardsResponse> {
    try {
      const request = distributionQuery.QueryDelegationTotalRewardsRequest.create({
        delegator_address
      })
      const response = await this.retry(() => this.client.DelegationTotalRewards(request))
      return response as distributionQuery.QueryDelegationTotalRewardsResponse
    } catch (e) {
      throw e
    }
  }
  async getDelegatorWithdrawAddress({
    delegator_address
  }: {
    delegator_address: string
  }): Promise<distributionQuery.QueryDelegatorWithdrawAddressResponse> {
    try {
      const request = distributionQuery.QueryDelegatorWithdrawAddressRequest.create({
        delegator_address
      })
      const response = await this.retry(() => this.client.DelegatorWithdrawAddress(request))
      return response as distributionQuery.QueryDelegatorWithdrawAddressResponse
    } catch (e) {
      throw e
    }
  }
}
