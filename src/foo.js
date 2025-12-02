import { userName } from "./userName";
export function foo(name) {
  return `<ul>${userName.map((user) => `<li>${user}</li>`).join("")}</ul>`;
}
