export const calculatePoints = (price) => {
  let points = 0;

  while (price > 200) {
    points += 200;
    price -= 100;
  }

  while (price < 200 && price > 100) {
    const amountOver100 = price - 100;
    points += amountOver100 * 2;
    price -= amountOver100;
  }

  while (price <= 100 && price > 50) {
    const amountOver50 = price - 50;
    points += amountOver50;
    price -= amountOver50;
  }

  return points;
};
