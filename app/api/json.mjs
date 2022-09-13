import fs from 'node:fs'

/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function get(){
  const bills = JSON.parse(
    fs.readFileSync(
      new URL('./bills.json', import.meta.url)
    ).toString()
  )

  return {
    json: bills
  }
}
