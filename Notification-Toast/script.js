/*
 Author: Todaysdev
 Tutorials: https://todaysdev.com/tutorials/find-a-project
*/

// This function is called automatically when the DOM is ready
(function () {
  let btn = document.querySelector('#btn')
  
  // Listen when this button is clicked and make a toast
  btn.addEventListener('click', () => {
    let toastContainer = document.querySelector('#toastContainer')
    
    // Create an empty div Element
    let toastContent = document.createElement('div')
    
    // Add toast class from style.css file and set toast content
    toastContent.classList.add('toast')
    toastContent.textContent = "Hi, I'm a notification toast !😊"
    toastContainer.appendChild(toastContent)
    
    // Remove toast after 3000 milliseconds
    setTimeout(() => {
      toastContent.remove()
    }, 3000)
  })
  
})()