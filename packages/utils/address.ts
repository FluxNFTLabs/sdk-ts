import { Address } from 'ethereumjs-util'
import { bech32 } from 'bech32'
/**
 * Get flux address from Ethereum hex address
 *
 * @param ethAddress string
 * @returns string
 */
export const getFluxAddress = (ethAddress: string): string => {
  if (!ethAddress.startsWith('0x')) {
    return ethAddress
  }
  const addressBuffer = Address.fromString(ethAddress.toString()).toBuffer()

  return bech32.encode('lux', bech32.toWords(addressBuffer))
}

/**
 * Get ethereum address from flux bech32 address
 *
 * @param luxAddress string
 * @returns string
 */
export const getEthereumAddress = (luxAddress: string): string => {
  if (luxAddress.startsWith('0x')) {
    return luxAddress
  }
  if (!luxAddress.startsWith('lux')) {
    return luxAddress
  }
  return `0x${Buffer.from(bech32.fromWords(bech32.decode(luxAddress).words)).toString('hex')}`
}
