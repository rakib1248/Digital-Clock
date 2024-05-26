const box = document.querySelector(".box");
const box1 = document.querySelector(".box1");
const pTeg = document.querySelector(".box1 p");
const heading = document.querySelector(".box h1");
const noti = document.querySelector("#Notification");
let notificationSound = new Audio("/strange-notification-36458.mp3");

setInterval(() => {
  timerFunction();
  DatFunction();
}, 1000);

const timerFunction = () => {
  const date = new Date();

  heading.innerHTML = `
   
   ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}:${
    date.getHours() > 12 ? "<span> PM </span>" : "<span> AM </span>"
  }
   `;
  notificationSound.play();
  noti.play();
};
const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatFunction = () => {
  const date = new Date();

  pTeg.innerHTML = `
   ${date.getDate()} : ${monthList[date.getMonth()]} : ${date.getFullYear()}
   `;
};
DatFunction();

setInterval(() => {
  timerFunction();
  DatFunction();
}, 1000);
