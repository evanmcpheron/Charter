import { calculatePoints } from "./calculatePoints";
import { formatDate } from "./formatDate";

export const customerTotals = (users) => {
  let lastThreeMonths = [];
  let availableUsers = {};

  // Set up a date variable that will be used to filter out only transactions less than 3 months old
  let rightNow = new Date();
  rightNow.setMonth(rightNow.getMonth() - 3);

  //Filter out transactions that are older than 3 months
  for (const transaction of users) {
    if (rightNow < transaction.purchaseDate) {
      lastThreeMonths.push(transaction);
    }
  }

  //Use an object for O(n) time to look for users that have more than one transaction
  for (const user of lastThreeMonths) {
    if (!availableUsers[user.id]) {
      availableUsers[user.id] = {
        ...user,
        points: calculatePoints(user.price),
        price: user.price,
        spent: user.price,
        items: [
          {
            purchaseDate: formatDate(user.purchaseDate),
            item: user.itemName,
            price: user.price,
            points: calculatePoints(user.price),
          },
        ],
      };
    } else {
      availableUsers[user.id] = {
        ...availableUsers[user.id],
        points: availableUsers[user.id].points + calculatePoints(user.price),
        price: availableUsers[user.id].price + user.price,
        spent: availableUsers[user.id].price + user.price,
        items: [
          ...availableUsers[user.id].items,
          {
            purchaseDate: formatDate(user.purchaseDate),
            item: user.itemName,
            price: user.price,
            points: calculatePoints(user.price),
          },
        ],
      };
    }
  }

  lastThreeMonths = [];

  // Put together the final array that will be used to render the report
  for (const user in availableUsers) {
    lastThreeMonths.push(availableUsers[user]);
  }

  return { lastThreeMonths };
};
