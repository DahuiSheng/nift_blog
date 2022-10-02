import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'niftblog',
  apiKey: process.env.API_KEY || '',
})