document.addEventListener("DOMContentLoaded", () => {

    const taskForm = document.querySelector("#create-task-form")

    taskForm.addEventListener("submit", function(event){
      event.preventDefault()
      const newTask = event.target.querySelector("#new-task-description").value + "  "

      const list = document.querySelector("#tasks")
      const task = document.createElement('li')
      console.log(task)
      console.log(list)
      task.textContent = newTask
      list.append(task)
      
      const deleteButton = document.createElement("button")
      deleteButton.textContent = "X"
      deleteButton.style.color = "red"


      task.append(deleteButton)

      deleteButton.addEventListener("click", function(event){
        task.remove()
      })


      event.target.reset()
    })
    
   
});


// step 1: figure out whch element should be acted upon
// step 2: what kind of event are we listening for 
// step 3: figure out what the action should be 

// step 1: find the parent element where the new one should live
// step 2: create the new element & give it correct content
// step 3: slap it on the DOM
