import React, { useState, useEffect } from "react"
import { getUser } from "./api"
import Field from "./Field"

export default function Settings() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(
      getUser().then((user) => {
        setUser(user)
      })
    )
  }, [])

  return (
    <div className="py-12">
      <div className="mx-auto px-8 w-full max-w-3xl">
        <h1 className="text-gray-800 font-bold text-lg py-2 border-b">
          Settings
        </h1>
        {user ? (
          <>
            <Field label="First Name" value={user.firstName} />
            <Field label="Last Name" value={user.lastName} />
            <Field label="Email" value={user.email} />
            <Field label="ID" value={user.id} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
