let myleads =[]

const ulel = document.getElementById("uleel")
const input = document.getElementById("takeinput")
const savebtn = document.getElementById('save-btn')


console.log(localStorage.getItem("myleads"))

savebtn.addEventListener("click", function(){

        myleads.push(input.value)
        // ulel.innerHTML += "<a>" + myleads + "</a>"

        input.value=""
        renderleads()

        // const li = document.createElement("li")
        // li.textContent = myleads
        // ulel.append(li)


})



function renderleads()
{
    let listitems  = ""
    for (let i=0; i < myleads.length; i++)
    {
        // listitems +=  "<li><a href=" +  myleads[i] +">"+myleads[i] +"</a></li>"


        listitems += `
        <li>
            <a href ='${myleads[i]}'>

                ${myleads[i]}

            </a>
        </li>`



      
    }

    
    ulel. innerHTML = listitems
    

}