import { AxiosRequestConfig } from 'axios'
import HttpClient from './HttpClient'

const getErrorMessage = (error: any, endpoint: string): string => {
  if (!error.response) {
    return `The request to ${endpoint} has failed.`
  }

  return error.response.data
    ? error.response.data.message || error.response.data
    : error.response.statusText
}

/**
 * @hidden
 */
export default class HttpRestClient {
  protected client: HttpClient

  protected endpoint: string

  constructor(endpoint: string, options: Record<string, any> = {}) {
    this.client = new HttpClient(endpoint, options)
    this.endpoint = endpoint
  }

  setConfig(config: AxiosRequestConfig): HttpRestClient {
    this.client.setConfig(config)

    return this
  }

  public async get<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    try {
      return await this.client.get(endpoint, params)
    } catch (e: unknown) {
      throw e
    }
  }

  public async post<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    try {
      return await this.client.post(endpoint, params)
    } catch (e: unknown) {
      throw e
    }
  }
}
