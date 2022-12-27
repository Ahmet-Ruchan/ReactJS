let listDOM = document.querySelector('#list')   // Selection of the list to be added
let LocalTask = {id:"", task:"" , check: false} //Object to hold LocalStorage information
let ArrayTask = []                          //array for LocalStorage    
let i=0;                                  //variable for id assignment (this way we can access list elements more easily)     

//LocalStorage operations
if(localStorage.getItem('load'))    // If there is a LocalStorage, enter it
{   
    ArrayTask = JSON.parse(localStorage.getItem('load')) // call LocalStorage
    ArrayTask.forEach(function (element)         //Function to pass information in LocalStorage        
    {
        i++;
        element.id = `id${i}`;              //LocalStorage new id assignment             
        localStorage.setItem('load', JSON.stringify(ArrayTask))

        let liDOM = document.createElement(`li`)       // create the list element 
        liDOM.setAttribute('id',`id${i}`)               //assign "id" to list element
        liDOM.innerHTML =                               //assign the information to be added to the list element
        `
        ${element.task} 
        <button
        class="close" 
        style="width: 50px; height: 50px; text-align: center;"
        onclick="RemoveFunc(${i})"
        >x
        </button>
        `
/*      (${element.task} list element information
        </button>        delete button "x"
        RemoveFunc(${i})  delete function     */

        listDOM.append(liDOM)    //add the list element to the end of the list
        if(ArrayTask[i-1].check) //marking if the list element is "checked"
        {
            let changeLi = document.querySelector(`#id${i}`) // assignment of list element
            changeLi.classList.add("checked")     //add the "checked" class of the list element           
        }
    });
}


// Converting the Add button from <span> to <button>. (in this way, it will be possible to add to the list with "enter")
let elem = document.querySelector('#liveToastBtn')
elem.outerHTML = `<button type="submit" onclick="newElement()" id="liveToastBtn" class="button" style ="border-width: 0px">${elem.innerHTML}</button>`;


// Get the information written in the box
let userTaskDOM = document.querySelector('#userTask')
userTaskDOM.addEventListener('submit', formHandler)

//Operations for the information in the box
function formHandler(event) {
    event.preventDefault()                          // Prevent page refresh
    const TASK = document.querySelector("#task")    // Assigning the information in the box
    
    if (TASK.value.trim() == ""){   // With "toast" declaration if "input" value is empty
        $(".error").toast("show");  //"You cannot add empty to the list!" show your notification
    } 
    else{
        addItem(TASK.value)          // Run the add information function
        TASK.value = ""              //Reset "input" after sending
        $(".success").toast("show"); //Show notification "Information added"
    }
}


// Add information function
const addItem = (task) => 
{ 
    i++;

    LocalTask.task = task;   //send "object" information
    LocalTask.id = `id${i}`;  //send "object" id
    ArrayTask.push(LocalTask) //send information in "object" for LocalStorage
    localStorage.setItem('load', JSON.stringify(ArrayTask))
    ArrayTask = JSON.parse( localStorage.getItem('load'))

    let liDOM = document.createElement(`li`)        // create the list element
    liDOM.setAttribute('id',`id${i}`)               //assign "id" to list element
    liDOM.innerHTML =                               //assign the information to be added to the list element
    `
    ${task} 
    <button 
    class="close" 
    style="width: 50px; height: 50px; text-align: center;"
    onclick="RemoveFunc(${i})"
    >x
    </button>
    `
    listDOM.append(liDOM)       //add the list element to the end of the list
}

//Delete function
function RemoveFunc(j) {                   // "j" id number                     
    const element = document.querySelector(`#id${j}`);      //assign the list item to be deleted    

    let index = ArrayTask.findIndex(function (Atask) {    //reaching the "index" of the list element to be deleted in LocalStorage      
        return JSON.stringify(Atask).indexOf(`id${j}`) >= 0
    });
        ArrayTask.splice(index, 1)             //delete list item from LocalStorage                 
        localStorage.setItem('load', JSON.stringify(ArrayTask)) // after deleting we need to set it again
        ArrayTask = JSON.parse( localStorage.getItem('load') )
        element.remove();          //delete the list element                             
}

//Checked operation
document.addEventListener('click', (element) =>      // reach the clicked list element           
{
    if(element.target.matches('li'))     // check if it is a list element                       
    {
        let elementId = element.target.id;        // get the "id" of the list element
        let index = ArrayTask.findIndex(function (Atask) {      //accessing the "index" of the list element in LocalStorage
            return JSON.stringify(Atask).indexOf(`${elementId}`) >= 0
        });
        ArrayTask[index].check = !(ArrayTask[index].check)    //Change "check" information in LocalStorage  
        localStorage.setItem('load', JSON.stringify(ArrayTask)) // after changing we need to set it again
        ArrayTask = JSON.parse( localStorage.getItem('load') )
        
        let changeLi = document.querySelector(`#${elementId}`) // assignment of list element
        changeLi.classList.toggle("checked")  //If the list element has "checked" class information, remove it, otherwise add it                 
    }
});
