import { createClient } from "next-sanity";
import {createImageUrlBuilder} from '@sanity/image-url'

export const SANITY_CONFIG = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tiqgonqj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
}

export const readClient = createClient({
    projectId: SANITY_CONFIG.projectId,
    dataset: SANITY_CONFIG.dataset,
    apiVersion: SANITY_CONFIG.apiVersion,
    useCdn: true,
})

const builder = createImageUrlBuilder(readClient);

export function urlFor(source: any) {
    return builder.image(source);
}