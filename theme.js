const themeColors = [
  "#FF5733",  
  "#33FF57",  
  "#3357FF",  
  "#F333FF",  
  "#33FFF3",
    "#228B22",
];

document.getElementById("themechng").addEventListener("click", function() {
  const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];
  document.body.style.backgroundColor = randomColor;
});