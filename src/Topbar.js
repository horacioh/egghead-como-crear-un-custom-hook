import React from "react"
import { useUser } from "./hooks"

export default function Topbar() {
  const user = useUser()

  const username = user ? `${user.firstName} ${user.lastName}` : "???"

  return (
    <div className="flex bg-gray-200 items-center py-4 px-8">
      <span className="flex-1" />
      <div className="flex items-center ">
        <span className="mr-2">{username}</span>
        <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden" />
      </div>
    </div>
  )
}
