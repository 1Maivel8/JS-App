let inputSearch = document.getElementById('inputsearch')
let addbtn = document.getElementById('addbtn')
let count = document.getElementById('count')
let content = document.getElementById('content')
 let edit =null

let allproducts = [
{id:1 , name : "Horror necklace" , price :"20"},
{id:2 , name : "Skeleton mug" , price :"30"},
{id:3 , name : "Scary keychain" , price :"25"},
]

count.innerHTML= ` Number of products: ${allproducts.length} `


function drow(id){
    content.innerHTML=""
   allproducts.forEach((ele) => {
    content.innerHTML += `<button onclick="Editprice(${ele.id})">Editprice</button>  <button onclick="editbtn(${ele.id})">Edit</button>${ele.id} - ${ele.name} - price: ${ele.price}$ <button onclick="deletebtn(${ele.id})">del</button> <br>`;
});
    }
    drow(allproducts)

    inputSearch.addEventListener('input',()=>{
 if (inputSearch.value !=""){
        addbtn.removeAttribute('disabled')
       }else{
        addbtn.setAttribute('disabled', true)
       }
    }
      
    )

     function editbtn(id){
        let findproduct = allproducts.find(f =>f.id===id)
        if(findproduct){
            inputSearch.value =findproduct.name
            addbtn.removeAttribute("disabled")
            addbtn.innerText ="Save Edit"
            edit = id
        }
    }

    function Editprice(id) {
  let product = allproducts.find(p => p.id === id)
  if (product) {
    inputSearch.value = product.price
    addbtn.removeAttribute("disabled")
    addbtn.innerText = "Update price"
    edit = id
  }
}

    addbtn.addEventListener('click' , ()=>{
        if(inputSearch.value ==""){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "It's necessary to write something",
  footer: '<a href="#">Why do I have this issue?</a>'
  
});
return;
}

let counter = allproducts.some(d =>d.name===inputSearch.value)
if(counter){
alert('The name is already in use')
return;
}
 

        if(edit){
    let product = allproducts.find(f => f.id === edit)
    if(product){
        if(addbtn.innerText === "Save Edit"){
            product.name = inputSearch.value
        } else if(addbtn.innerText === "Update price"){
            product.price = inputSearch.value
        }
        drow();
    }
    edit = null;
    addbtn.innerText = "Add";
} else {
    let last = allproducts.length ? allproducts[allproducts.length -1].id : 0
    allproducts.push({id: ++last, name: inputSearch.value,price: prompt("Enter the price")
    });
    let newproduct = allproducts[allproducts.length -1]
    content.innerHTML += ` <button onclick="Editprice(${newproduct.id})">Editprice</button>  <button onclick="editbtn(${newproduct.id})">Edit</button> ${newproduct.id} - ${newproduct.name} - price: ${newproduct.price}$ <button onclick="deletebtn(${newproduct.id})">del</button>  <br>`;
}

     
  
count.innerHTML= ` Number of products: ${allproducts.length} `
inputSearch.value=""
        addbtn.setAttribute('disabled', true)


    }
    )

    function deletebtn(id) {
        let index = allproducts.map((del)=>{
            return del.id
        }).indexOf(id)
        if(index!= -1){
            allproducts.splice(index, 1)
    }
     drow()
     count.innerHTML= ` Number of products: ${allproducts.length} `


    }

   
