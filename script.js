
var add=document.getElementById("add");


function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var age=document.getElementById("age").value;
    var address=document.getElementById("address").value;

    if(name==""){
        alert("please enter name")
        return false
    }
    if(age==""){
        alert("please enter age")
        return false
    }
    else if(age<1){
        alert("please enter correct age")
        return false
    }

    if(address==""){
        alert("please return address")
        return false
    }


    if(!email.includes("@")){
        alert("please enter correct email")
        return false
    }

    return true
}


function showData(){
    var data;
    var write="";
    if(localStorage.getItem("data")==null){
        data=[];
        document.getElementById("show").innerHTML+=""
    }
    else{

        data=JSON.parse(localStorage.getItem("data"));
        console.log("hi from show")
        console.log(localStorage.getItem("data"));
      data.forEach((ele,index)=>{
             write+=`<div class="col-md-3 border p-3 rounded-5">
            <div class="mb-3">
              <span>name :${ele.name} </span>
            <br>
            <span>email : ${ele.email}</span>
            <br>
            <span>address :${ele.address} </span>
            <br>
            <span >age :${ele.age} </span>
            <br >
            </div>
            <div class="d-flex justify-content-center ">
              
            <input type="button" value="delet" class="btn text-white bg-danger me-2" onclick="delet(${index})">
            <input type="button" value="update" id="edit" class="btn text-white bg-info" onclick="update(${index})">
            </div>
            </div>`;
                
            });
            document.getElementById("show").innerHTML=write;
    }
  
 
}





add.addEventListener( "click",function(){
  
   
    var data;
    if(localStorage.getItem("data")==null){
        data=[]
    
    }
    else{
        data=JSON.parse(localStorage.getItem("data"));
    }
    if(validation()==true){
        var name=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        var age=document.getElementById("age").value;
        var address=document.getElementById("address").value;

        data.push({
            name:name,
            email:email,
            age:age,
            address:address
        });
       console.log(data)
        localStorage.setItem("data",JSON.stringify(data));
        showData();
       document.getElementById("name").value="";
       document.getElementById("email").value="";
       document.getElementById("age").value="";
       document.getElementById("address").value="";


    }

});


function delet(index){
    var data;
    if(localStorage.getItem("data")==null){
        data=[]
    }
    else{
        data=JSON.parse(localStorage.getItem("data"))
    }
    data.splice(index,1);
console.log(data)
    localStorage.setItem("data",JSON.stringify(data))
  
    showData();
}
///////////////////////////////////////////////////////
function update(index){

document.getElementById("add").style.display="none";
document.getElementById("update").style.display="block";
var data;
if(localStorage.getItem("data")==null){
    data=[]
}
else{
    data=JSON.parse(localStorage.getItem("data"))
}

document.getElementById("name").value=data[index].name;
document.getElementById("email").value=data[index].email;
document.getElementById("age").value=data[index].age;
document.getElementById("address").value=data[index].address;

document.getElementById("update").addEventListener("click",function(){

data[index].name=document.getElementById("name").value;
data[index].email=document.getElementById("email").value;
data[index].age=document.getElementById("age").value;
data[index].address=document.getElementById("address").value;

localStorage.setItem("data",JSON.stringify(data));

showData();
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("age").value="";
document.getElementById("address").value="";


document.getElementById("add").style.display="block";
document.getElementById("update").style.display="none";

})











}
showData();