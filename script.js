"use strict";

const data = [
  // 1
  {
    sender: "Mehmet Can Seyhan",
    date: "Dec, 12",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 2
  {
    sender: "Twitter",
    date: "Dec, 22",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  //  3
  {
    sender: "Udemig",
    date: "Dec, 14",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 4
  {
    sender: "Linkedin",
    date: "Jan, 11",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 5
  {
    sender: "Udemig",
    date: "Dec, 12",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 6
  {
    sender: "Bank of America",
    date: "Oct, 26",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 7
  {
    sender: "Udemig",
    date: "Dec, 21",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 8
  {
    sender: "Mehmet Can Seyhan",
    date: "Dec, 10",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 9
  {
    sender: "Isvec Krali",
    date: "May, 20",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 10
  {
    sender: "Nazan Yilmaz",
    date: "Feb, 12",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 11
  {
    sender: "Yahya Celik",
    date: "Jun, 25",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 12
  {
    sender: "Udemig",
    date: "Sep, 28",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 13
  {
    sender: "Jey",
    date: "Jan, 17",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 14
  {
    sender: "Udemig",
    date: "Nov, 15",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 15
  {
    sender: "Udemig",
    date: "Apr, 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 16
  {
    sender: "Sadam",
    date: "Jul, 28",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 17
  {
    sender: "Slef",
    date: "Dec, 31",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
];
 const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages">
       <div class="messages_left">
       <div class="check check_2">
        <img src="./img/checkbox.png" alt="" />
        <span> <ion-icon name="checkmark"></ion-icon> </span>
        </div>
        <ion-icon name="star-outline" class="hover star"></ion-icon>
        <span>${d.sender}</span>
        </div>
        <div class="messages_content">${d.message}</div>
        <div class="messages_date">${d.date}</div>
        </div>`
        )
    .join(" ")
};

render(data);