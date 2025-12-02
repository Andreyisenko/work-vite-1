import { users } from "./userName";
export function renderUsers(filteredUsers = users) {
  const userList = document.querySelector("#userList");
  userList.innerHTML = `<ul>${filteredUsers
    .map((u) => `<li>${u}</li>`)
    .join("")}</ul>`;
}
