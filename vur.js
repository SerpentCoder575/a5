  function updateDate() {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      let now = new Date();
      document.getElementById("day").textContent = days[now.getDay()];
      document.getElementById("date").textContent = `${months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()}`;
  }
  updateDate();