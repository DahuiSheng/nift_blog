import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'niftmedia',
  apiKey: process.env.API_KEY || '',
})