import axios from 'axios'
import { SANITY_CONFIG } from './sanity'

const { projectId, dataset, apiVersion } = SANITY_CONFIG

const QUERY_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`
const MUTATE_URL = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`

// Base Requester untuk READ (GET)
export async function sanityGet(groqQuery: string) {
  const encodedQuery = encodeURIComponent(groqQuery)
  const url = `${QUERY_URL}?query=${encodedQuery}`

  const response = await axios.get(url)
  return response.data.result
}

export async function sanityMutate(mutations: any[]) {
  const token = process.env.SANITY_API_WRITE_TOKEN

  const response = await axios.post(
    MUTATE_URL,
    { mutations },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response.data
}