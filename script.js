function set_clock() {
  let hrs = document.getElementById("hrs");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let date = new Date();

  hrs.innerHTML = date.getHours();
  min.innerHTML = date.getMinutes();
  sec.innerHTML = date.getSeconds();
}

setInterval(set_clock, 1000);
