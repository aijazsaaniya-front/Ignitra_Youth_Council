document.getElementById("header").innerHTML=`
<header>
    <div class="logo">
      <img src= "Assets/Image/Logo.jpeg.jpg" alt="logo">
      <strong>Ignitra Youth </strong>
    </div>
    <nav> 
    
    
    <div class="navbar">
      <a class="hideOnMobile" href="#about">About</a>
      <a class="hideOnMobile" href="roadmap.html"> Roadmaps </a>
      <a class="hideOnMobile" href="#schools">Schools</a>
      <a class="hideOnMobile" href="#team">Team</a>
      <a class="hideOnMobile" href="#apply">Apply</a>
      <a class="hideOnMobile" href="#blog">Blog</a>
      <a href="#" class="hamburger" id="hamburger"> <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#2f5233"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </a>
      <a href="#" class="close" id="close"> <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#2f5233"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> </a>

    </div>   

<div class="sidebar">
      <a href="#about">About</a>
      <a href="roadmap.html"> Roadmaps </a>
      <a href="#schools">Schools</a>
      <a href="#team">Team</a>
      <a href="#apply">Apply</a>
      <a href="#blog">Blog</a>
      
    </div>  

    
    </nav>
  </header>
  `;

  document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const close = document.getElementById("close");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.add("active");
     hamburger.style.display = "none";  
    close.style.display = "block";
  });

  close.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.remove("active");
    hamburger.style.display = "block"; 
    close.style.display = "none";
  });
});

/*
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

   function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
  */
    