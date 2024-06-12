function formatUKDate(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
  
  function formatUSADate(date) {
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  }
  
  function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }
  
  function updateTime() {
    var now = new Date();
    document.getElementById('datetime').textContent = now.toString();
    document.getElementById('uk-format').textContent = "Date is (UK Format): " + formatUKDate(now);
    document.getElementById('usa-format').textContent = "Date is (USA Format): " + formatUSADate(now);
    document.getElementById('time').textContent = "Time is: " + formatTime(now);
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  