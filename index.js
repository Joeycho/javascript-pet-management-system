document.getElementById("fetch_own").addEventListener("click", fetchOwners);

function fetchOwners() {

    fetch('http://localhost:3005/owners').then(response => {
        return response.json()
      }).then(responseJSON => {
        document.getElementById("owner").innerHTML=""
          
        let owners = responseJSON.data.map(e=>{e.attributes["id"]=e.id;
            let para = document.createElement('p')
            para.innerHTML+="Name: "+ e.attributes.name
            para.innerHTML+=" Email: "+ e.attributes.email 
            document.getElementById("owner").appendChild(para)
            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute("id",`delete_${e.id}`)
            deleteBtn.innerHTML+="REMOVE"
            deleteBtn.addEventListener("click", event=>{event.preventDefault(); deleteRequest("owner",parseInt(e.id))})
            para.appendChild(deleteBtn)
            return e.attributes
        })
        let select_own = document.getElementById("owner_id")
        select_own.innerHTML+=owners.map(owner => `<option value=${owner.id}>${owner.name}</option>`)
    })
}

document.getElementById("fetch_clinic").addEventListener("click", fetchClinics);

function fetchClinics() {

    fetch('http://localhost:3005/clinics').then(response => {
        return response.json()
      }).then(responseJSON => {
        document.getElementById("clinic").innerHTML=""  
        let clinics= responseJSON.data.map(e=>{e.attributes["id"]=e.id;
            let para = document.createElement('p')
            para.innerHTML+="Name: "+ e.attributes.name
            para.innerHTML+=" Addr: "+ e.attributes.addr 
            document.getElementById("clinic").appendChild(para)
            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute("id",`delete_${e.id}`)
            deleteBtn.innerHTML+="REMOVE"
            deleteBtn.addEventListener("click", event=>{event.preventDefault(); deleteRequest("clinic",parseInt(e.id))})
            para.appendChild(deleteBtn)
            return e.attributes
        })
        let select_clinic = document.getElementById("clinic_id")
        select_clinic.innerHTML+=clinics.map(clinic => `<option value=${clinic.id}>${clinic.name}</option>`)
    })
}

document.getElementById("fetch_pet").addEventListener("click", fetchPets);

function fetchPets() {

    fetch('http://localhost:3005/pets').then(response => {
        return response.json()
      }).then(responseJSON => {
        document.getElementById("pet").innerHTML=""  
        responseJSON.data.map(e=>{e.attributes["id"]=e.id;
        let para = document.createElement('p')
        para.innerHTML+="Name: "+ e.attributes.name
        para.innerHTML+=" Breed: "+ e.attributes.breed
        para.innerHTML+=" Description: "+ e.attributes.desc 
        para.innerHTML+=" Owner: "+ e.attributes.owner.name 
        para.innerHTML+=" Clinic: "+ e.attributes.clinic.name 
        document.getElementById("pet").appendChild(para)
        let deleteBtn = document.createElement('button')
        deleteBtn.setAttribute("id",`delete_${e.id}`)
        deleteBtn.innerHTML+="REMOVE"
        deleteBtn.addEventListener("click", event=>{event.preventDefault(); deleteRequest("pet",parseInt(e.id))})
        para.appendChild(deleteBtn)
        return})
    })
}


function deleteRequest(who, id){
    switch(who){
        case "owner":
            fetch(`http://localhost:3005/owners/${id}`,{
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                }
              }).then((res) => {
                
                console.log("Response: ", res)
                fetchOwners()
              })  
        case "clinic":
            fetch(`http://localhost:3005/clinics/${id}`,{
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                }
              }).then((res) => {
                
                console.log("Response: ", res)
                fetchClinics()
              })  

        case "pet":
            fetch(`http://localhost:3005/pets/${id}`,{
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                }
              }).then((res) => {
                
                console.log("Response: ", res)
                fetchPets()
              })
        default:
            return
    }
}

document.getElementById("add_own_form").addEventListener("submit", (event)=> {event.preventDefault(); submitRequest("owner", event.target)});
document.getElementById("add_clinic_form").addEventListener("submit", (event)=> {event.preventDefault(); submitRequest("clinic", event.target)});
document.getElementById("add_pet_form").addEventListener("submit", (event)=> {event.preventDefault(); submitRequest("pet", event.target)});



function submitRequest(who, target){
    switch(who){
        case "owner":

        const owner ={
            name: target.name.value, 
            email: target.email.value
            }

        fetch('http://localhost:3005/owners',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(owner),
      }).then((res) => {
        console.log("Response: ", res)
        fetchOwners()        
      })
      
    case "clinic":
        const clinic ={
            name: target.name.value, 
            addr: target.addr.value
        }  
        fetch('http://localhost:3005/clinics',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clinic),
         }).then((res) => {
     
            console.log("Response: ", res)
            fetchClinics()
        })  

        case "pet":
            const pet ={
                name: target.name.value, 
                breed: target.breed.value,
                desc: target.desc.value,
                owner_id: target.owner_id.value,
                clinic_id: target.clinic_id.value
                }  
            fetch('http://localhost:3005/pets',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pet),
                }).then((res) => {
            
                console.log("Response: ", res)
                fetchPets()
            })  

        default:
            return
    }
}