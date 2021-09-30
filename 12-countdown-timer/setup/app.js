const months = [
  "Tháng một",
  "Tháng hai",
  "Tháng ba",
  "Tháng tư",
  "Tháng năm",
  "Tháng sáu",
  "Tháng bảy",
  "Tháng tám",
  "Tháng chín",
  "Tháng mười",
  "Tháng mười một",
  "Tháng mười hai",
];
const weekdays = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

console.log(tempYear,tempMonth,tempDay)


const futureDate = new Date(tempYear, tempMonth, tempDay + 8, 11, 30, 0)

console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

console.log(futureDate.getDay())

giveaway.textContent = `Sự kiện kết thúc vào ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes} ${hours > 12 ? 'tối' : 'sáng'}`


const futureTime = futureDate.getTime();

function getRemaindingTime(){
  const today = new Date().getTime();
  const t = futureTime - today

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  console.log(t/60/60/1000/24)

  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000)

  const values = [days,hours,minutes,seconds]

  function format(item){
    if(item < 10)
      return `0${item}`;
    return item;
  }

  items.forEach((item,index)=>{
    item.innerHTML = format(values[index])
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Xin lỗi chương trình đã kết thúc</h4>`;
  }
} 
let countdown = setInterval(getRemaindingTime,1000);
getRemaindingTime();

