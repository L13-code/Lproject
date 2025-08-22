const currentPage = window.location.pathname;



function checkLogin() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const user = usernameInput.value;
    const pass = passwordInput.value;

    if (user === "mylove" && pass === "07272025") {
        sessionStorage.setItem("loggedIn", "true");
        processAlert()
    } else if(user === "" && pass === ""){
      noInput()
    } else{
        incorrectAlert()
        usernameInput.value="";
        passwordInput.value="";
    }
}


 


function loadZero() {
  fetch("chapter-zero.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("chapter-modal");
      
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Get the entire modal-container div (the complete modal structure)
      const modalContainer = tempDiv.querySelector('.modal-container');
      if (modalContainer) {
        // Clear the modal and add the entire modal structure
        modal.innerHTML = '';
        modal.appendChild(modalContainer.cloneNode(true));
        
        // Make the modal visible
        modal.style.display = "block";
        
        setTimeout(()=>{
          const audio = document.getElementById("audioZero");
          if(audio){
            audio.volume = 0.5;
            audio.play().catch(err=>{
              console.warn("Playback failed:",err);
            });
          }
        },300); 
      }
    }); 
}

document.addEventListener("click", function (e) {
  if (e.target.id === "close") {
    document.getElementById("chapter-modal").style.display = "none";
    document.getElementById("chapter-modal").innerHTML = "";
  }
});


function loadOne() {
  fetch("chapter-one.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("chapter-modal");
      
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Get the entire modal-container div (the complete modal structure)
      const modalContainer = tempDiv.querySelector('.modal-container');
      if (modalContainer) {
        // Clear the modal and add the entire modal structure
        modal.innerHTML = '';
        modal.appendChild(modalContainer.cloneNode(true));
        
        // Make the modal visible
        modal.style.display = "block";
        
        setTimeout(()=>{
          const audio = document.getElementById("audioOne");
          if(audio){
            audio.volume = 0.5;
            audio.play().catch(err=>{
              console.warn("Playback failed:",err);
            });
          }
        },200); 
      }
    });
}


function incorrectAlert() {
  fetch("incorrect.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("notification");
      modal.innerHTML = html;
      modal.style.display = "block";
    });
}

document.addEventListener("click", function (e) {
  if (e.target.id === "try") {
    document.getElementById("notification").style.display = "none";
    document.getElementById("notification").innerHTML = "";
  }
});

function noInput() {
  fetch("incorrect.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("notification");
      modal.innerHTML = html;
      modal.style.display = "block";

      const msg = modal.querySelector("p");
      const img = document.getElementById("frontpic");
      img.src = "Images/excited.gif";
      msg.textContent = "Input please!🙂"
      
    });
}


function processAlert() {
  fetch("process.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("notification");
      modal.innerHTML = html;
      modal.style.display = "block";

      setTimeout(()=>{
         window.history.pushState({ page: "season" }, "", "");
        window.location.href="season-one.html"
      },5000);
    });
}

document.getElementById("password").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkLogin();
  }
});


function closeModal() {
  const modal = document.querySelector(".alert-container");
  if (modal) modal.remove();
  document.body.style.overflow = "";
}

function checkLogout() {
  fetch("logout-notif.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("chapter-modal");
      
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Get the entire alert-container div (the complete logout modal structure)
      const logoutContainer = tempDiv.querySelector('.alert-container');
      if (logoutContainer) {
        // Clear the modal and add the entire logout modal structure
        modal.innerHTML = '';
        modal.appendChild(logoutContainer.cloneNode(true));
        
        // Make the modal visible
        modal.style.display = "block";
        
        // Add event listeners for the logout buttons
        setTimeout(() => {
          const signoutBtn = modal.querySelector('#signout');
          const cancelBtn = modal.querySelector('#cancel');
          
          if (signoutBtn) {
            signoutBtn.addEventListener('click', () => {
              sessionStorage.removeItem("loggedIn");
              // Redirect to logout page or perform logout action
              window.location.href = "index.html";
            });
          }
          
          if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
              // Close the modal
              modal.style.display = "none";
              modal.innerHTML = "";

            });
          }
        }, 100);
      }
    })
    .catch(error => {
      console.error("Error loading logout notification:", error);
    });
}

function specialMessage(){
fetch("special-message.html")
    .then(response => response.text())
    .then(html => {
      const modal = document.getElementById("chapter-modal");
      
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Get the entire modal-container div (the complete modal structure)
      const modalContainer = tempDiv.querySelector('.modal-container');
      if (modalContainer) {
        // Clear the modal and add the entire modal structure
        modal.innerHTML = '';
        modal.appendChild(modalContainer.cloneNode(true));
        
        // Make the modal visible
        modal.style.display = "block";
        
        setTimeout(()=>{
          const audio = document.getElementById("specialMusic");
          if(audio){
            audio.volume = 0.5;
            audio.play().catch(err=>{
              console.warn("Playback failed:",err);
            });
          }
        },300); 
      }
    }); 
}