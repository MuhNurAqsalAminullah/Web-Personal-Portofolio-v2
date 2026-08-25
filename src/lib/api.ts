import { sanityGet } from './request'

export async function getPortfolio(groqQuery: string) {
  return await sanityGet(groqQuery)
}