const MONTHS: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export default function isNewPost(createdAt: string) {
  const [monthName, dayWithComma, year] = createdAt.split(" ");

  const month = MONTHS[monthName];
  const day = Number(dayWithComma.replace(",", ""));
  const numericYear = Number(year);

  const postDate = new Date(numericYear, month, day);
  const currentDate = new Date();

  const differenceInTime =
    currentDate.getTime() - postDate.getTime();

  const differenceInDays = Math.floor(
    differenceInTime / (1000 * 60 * 60 * 24)
  );

  return differenceInDays >= 0 && differenceInDays <= 7;
}