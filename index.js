let myleads =[]

const ulel = document.getElementById("uleel")
const input = document.getElementById("takeinput")
const savebtn = document.getElementById('save-btn')
const delbtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads"))

if(leadsFromLocalStorage)
{
    myleads = leadsFromLocalStorage
    renderleads()
}

console.log(leadsFromLocalStorage)



tabbtn.addEventListener("click",function()
{

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderleads()
    })

})

delbtn.addEventListener("dblclick",function (){
    console.log("double clicked")
   localStorage.clear()
   myleads=[]
   renderleads()

})


savebtn.addEventListener("click", function(){

        myleads.push(input.value)
        // ulel.innerHTML += "<a>" + myleads + "</a>"

        input.value=""
        localStorage.setItem("myleads", JSON.stringify(myleads))

        renderleads()

        console.log(myleads)
       
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


 // const li = document.createElement("li")
        // li.textContent = myleads
        // ulel.append(li)


// localStorage.setItem("myleads","www.example.com")
// localStorage.getItem("myleads")
// localStorage.clear()-

// myleads  = JSON.stringify(myleads)

// console.log(typeof(myleads))
// myleads = JSON.parse(myleads)

 
// console.log(typeof(myleads))
// myleads.push("secondexample.com")
// myleads= JSON.stringify(myleads)
// console.log(typeof(myleads))


// console.log(localStorage.getItem("myleads"))
