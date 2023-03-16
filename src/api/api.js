import { allUsersDB } from "./orders";

export const allUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(allUsersDB), 1000);
    setTimeout(() => reject(new Error("Something went wrong")), 4000);
  });
};
