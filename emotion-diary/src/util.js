export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

// export const emotionList = [
//   {
//     id: 1,
//     name: "완전 좋음",
//     img: getEmotionImgById(1),
//   },
//   {
//     id: 2,
//     name: "좋음",
//     img: getEmotionImgById(2),
//   },
//   {
//     id: 3,
//     name: "그럭저럭",
//     img: getEmotionImgById(3),
//   },
//   {
//     id: 4,
//     name: "나쁨",
//     img: getEmotionImgById(4),
//   },
//   {
//     id: 5,
//     name: "끔찍함",
//     img: getEmotionImgById(5),
//   },
// ];
