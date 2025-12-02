import "./style.css";
import { users } from "./userName";
import { renderUsers } from "./foo";

const form = document.querySelector("#addUserForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#newUserName");

  users.push(input.value.trim());
  input.value = "";
  renderUsers();
});

const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  const filtered = users.filter((u) =>
    u.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderUsers(filtered);
});

renderUsers();
