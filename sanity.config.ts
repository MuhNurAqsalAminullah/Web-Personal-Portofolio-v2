import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import portfolio from './src/schemas/portfolio'
import category from './src/schemas/category'

export default defineConfig({
  name: 'default',
  title: 'Portofolio Admin',

  // Masukkan Project ID Sanity Anda (misal: tiqgonqj)
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin', // URL untuk mengakses Studio di Next.js

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [portfolio, category], // Kita akan isi jenis schema data di sini nanti
  },
})