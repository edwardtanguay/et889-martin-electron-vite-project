import { useEffect, useState } from "react"
import { loadGameData } from "./loadGameData"

export const MainLogic = () => {
    const [users, setUsers] = useState([]);
    const [charStats, setCharStats] = useState([]);
    const [skills, setSkills] = useState([]);
    const [items, setItems] = useState([]);
    const [enemies, setEnemies] = useState([]);
    
    

    useEffect(() => {
        const dataFetch = async () => {
          const users = await loadGameData("users")
          const stats = await loadGameData("game")
          const skills = await loadGameData("skills")
          const items = await loadGameData("items")
          const enemies = await loadGameData("enemies")
          setUsers(users)
          setCharStats(stats)
          setSkills(skills)
          setItems(items)
          setEnemies(enemies)
        }
        dataFetch()
    }, [])

    
}