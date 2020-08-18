export function getUser() {
  return fetch("/user.json").then((res) => res.json())
}
