import { backendURL } from "../App"

export const loadGameData = async (api = "") => {
  
  const res = await fetch(`${backendURL}/${api}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  //console.log("result", result)
  return result
}