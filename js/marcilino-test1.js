function validateName(){
    //// name validation
    var validated = true;
    
    var _name = document.getElementById("name").value.length;
    if((_name.length<7) || (_name==" ")) 
    {
        alert("Please enter your first name as well as last name");
    }
    
    var validated=false;
}

function validatePhone(){
    //// name validation
    var validated = true;
    var _phone = document.getElementById("phone").value.length;
    if((_phone.length<10) || (_phone==" ")) 
    {
        alert("Please enter a valid phone with 10 numbers");
    }
    var validated=false;
}

function validateButton(){
    var validated=true;
    
    var _starters = document.getElementById("item_starters").checked;
    var _main = document.getElementById("item_main").checked;
    var _dessert = document.getElementById("item_dessert").checked;
    var _drink = document.getElementById("item_drink").checked;

// true or false - true  ||

    
   
function TotalPrice(){
let total_price=0.00;
let _name = document.getElementById('name').value; //value of name
let _phone = document.getElementById('phone').value;
let _quantity= document.querySelector("#diners_list.selected").value;
let _time= document.querySelector("#time_list.selected").value;

if (document.getElementById("item")[0].checked){
    total_price= total_price + 12.00;
}
if (document.getElementById("item")[1].checked){
    total_price= total_price + 18.00;

}
if (document.getElementById("item")[2].checked){
    total_price= total_price + 9.00;
}
if (document.getElementById("item")[3].checked){
    total_price= total_price + 11.00;
}
return total_price;
}
//return total price-->
if((_starters != false) || (_main!= false) || (_dessert!= false) || (_drink!= false)){
    alert("Thanks You choice was booked "+TotalPrice());
} 
else{
    alert("All fileds is Mandatory!");
}
    validated = false;
}
