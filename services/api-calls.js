const baseUrl = 'https://www.dnd5eapi.co/api'

// ====================================================== //

export const getClassList = async () => {
  const res = await fetch(`${baseUrl}/classes`)
  return res.json()
}

export const getClassDetails = async (className) => {
  const res = await fetch(`${baseUrl}/classes/${className}`)
  return res.json()
}

// ====================================================== //

export const getMonsterList = async () => {
  const res = await fetch(`${baseUrl}/monsters`)
  return res.json()
}

export const getMonsterDetails = async (monsterName) => {
  const res = await fetch(`${baseUrl}/monsters/${monsterName}`)
  return res.json()
}

// ====================================================== //

export const getSpellList = async () => {
  const res = await fetch(`${baseUrl}/spells`)
  return res.json()
}

export const getSpellDetails = async (spellName) => {
  const res = await fetch(`${baseUrl}/spells/${spellName}`)
  return res.json()
}