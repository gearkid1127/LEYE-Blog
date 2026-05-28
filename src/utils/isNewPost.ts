export default function isNewPost(
  createdAt: string
) {
  const postDate = new Date(createdAt);
  const currentDate = new Date();

  const differenceInTime =
    currentDate.getTime() - postDate.getTime();

  const differenceInDays =
    differenceInTime / (1000 * 60 * 60 * 24);

  return differenceInDays <= 7;
}