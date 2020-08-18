import React from "react"

export default function Field({ label = "", value = "" }) {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 transition duration-200 px-8 py-6 rounded-md mt-4">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-black font-extrabold text-3xl">{value}</p>
    </div>
  )
}
