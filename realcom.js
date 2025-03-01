document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".cb").forEach((button) => {
    

button.addEventListener("click", function () {
   
 let container = this.closest(".tc");
     
   let ttElem = container.querySelector(".tt"); 

  let tt = ttElem ? ttElem.textContent.trim() : "Unknown Task";
  
  let timestamp = new Date().toLocaleString();
      
      
      alert(`Task Completed: ${tt}`);
      
     
      let lc = document.getElementById("lc");
      if (lc)

      {
        let le = document.createElement("p");

        le.innerHTML = `<strong>${tt}</strong> completed at ${timestamp}`;

     le.style.color = "#333";
        lc.appendChild(le);
      }
      
     
      this.disabled = true;
      this.style.backgroundColor = "#808080";
      this.style.cursor = "not-allowed";
      
      
  let rt = document.getElementById("rt");
  let ct = document.getElementById("ct");
   if (rt && ct) 
    {
  rt.textContent = Math.max(0, parseInt(rt.textContent) - 1);
  ct.textContent = parseInt(ct.textContent) + 1;
      }
    });
  });
  

let ch = document.getElementById("ch");
 if (ch) {
ch.addEventListener("click", function ()
{
let lc = document.getElementById("lc");
 if (lc) 
  {
   lc.innerHTML = "";
      }
    });
  }
});

 