import { useState, useEffect } from "react"
import { getUser } from "./api"

export function useUser() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser().then((user) => {
      setUser(user)
    })
  }, [])

  return user
}
