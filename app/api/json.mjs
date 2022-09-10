import fs from 'node:fs'

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
