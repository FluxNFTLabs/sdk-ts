import BigNumber from './classes/BigNumber/BigNumber'
export const DEFAULT_GAS_LIMIT = 200000
export const DEFAULT_GAS_PRICE = 100000000000000
export const DEFAULT_BLOCK_TIMEOUT_HEIGHT = 30
export const DEFAULT_STD_FEE = {
  amount: [
    {
      amount: DEFAULT_GAS_PRICE.toFixed(),
      denom: 'lux'
    }
  ],
  gas: DEFAULT_GAS_LIMIT.toString()
}
