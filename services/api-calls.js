const baseUrl = 'https://www.dnd5eapi.co/api'

export const getClassList = async () => {
  const res = await fetch(`${baseUrl}/classes`)
  return res.json()
}

export const getClassDetails = async (className) => {
  const res = await fetch(`${baseUrl}/classes/${className}`)
  return res.json()
}
 