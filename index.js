function start(){

    if(localStorage.getItem("Login") == "true"){
document.getElementById("home").style.display = "block"
document.getElementById("login").style.display = "none"

    }
else{
    document.getElementById("login").style.display = "block"

    localStorage.setItem("Avatarcount", -1);

    document.getElementById("form2").style.display = "none"
    document.getElementById("form3").style.display = "none"
}

    }

function showpass(){

document.getElementById("eyeclose").style.display = "block"

document.getElementById("eye").style.display = "none"

document.getElementById("password").type = "text";
navigator.vibrate(40)
}

function hidepass(){
    document.getElementById("eyeclose").style.display = "none"

    document.getElementById("eye").style.display = "block"
    
    document.getElementById("password").type = "password";
    navigator.vibrate(40)
}

function submit(){

    localStorage.setItem("Limit", "100");

    document.getElementById("limit1").innerHTML = "₹" + localStorage.getItem("Limit");

    localStorage.setItem("Weekly", "yes");
localStorage.setItem("Monthly", "no");

   navigator.vibrate(70)

    localStorage.setItem("Name",   document.getElementById("name").value );


    localStorage.setItem("Username",   document.getElementById("un").value );

    localStorage.setItem("Password",   document.getElementById("password").value );

    localStorage.setItem("Profession",   document.getElementById("prof").value );

    document.getElementById("form").style.display = "none";

    document.getElementById("form2").style.display = "block";

    document.getElementById("dot2").style.backgroundColor = "#aa25fda8"

    document.getElementById("dot1").style.backgroundColor = "white"

    document.getElementById("dot3").style.backgroundColor = "white"

    document.getElementById("dot2").style.width = "5%"
    document.getElementById("dot2").style.height = "18px"

    document.getElementById("dot1").style.width = "3.3%"
    document.getElementById("dot1").style.height = "12px"
    document.getElementById("dot").style.marginTop = "-3%"
    // document.getElementById("popup").style.display = "block"

    // document.getElementById("name1").innerHTML = "Name : " + localStorage.getItem("Name");

    // document.getElementById("username1").innerHTML = "Username : "  +  localStorage.getItem("Username");

    // document.getElementById("password1").innerHTML = "Password : " + localStorage.getItem("Password");

    // document.getElementById("profession1").innerHTML = "Profession : " + localStorage.getItem("Profession");

    // document.getElementById("form2").style.display = "none";
    // document.getElementById("dot").style.display = "none";
}


function closepopup(){


    document.getElementById("popup").style.display = "none"
    navigator.vibrate(50)

  
}


function weekly(){
document.getElementById("weekly1").style.backgroundColor = "#aa25fda8";

localStorage.setItem("Weekly", "yes");
localStorage.setItem("Monthly", "no");


document.getElementById("monthly1").style.backgroundColor = "#17181f";
}

function monthly(){
    document.getElementById("monthly1").style.backgroundColor = "#aa25fda8";
    
    localStorage.setItem("Monthly", "yes");
    localStorage.setItem("Weekly", "no");
    
    
    document.getElementById("weekly1").style.backgroundColor = "#17181f";
    }

function submit2(){

    
       navigator.vibrate(70)
    
      
    
        document.getElementById("form").style.display = "none";
    
        document.getElementById("form2").style.display = "none";

        document.getElementById("form3").style.display = "block";
    
        document.getElementById("dot3").style.backgroundColor = "#aa25fda8"
    
        document.getElementById("dot1").style.backgroundColor = "white"
    
        document.getElementById("dot2").style.backgroundColor = "white"
    
        document.getElementById("dot3").style.width = "5%"
        document.getElementById("dot3").style.height = "18px"
    
        document.getElementById("dot2").style.width = "3.3%"
        document.getElementById("dot2").style.height = "12px"

        document.getElementById("dot").style.marginTop = "3%"

    //     document.getElementById("popup").style.display = "block"

    //     if(localStorage.getItem("Weekly") == "yes"){

    //         var a = "Weekly";
    //     }
    //     else{

    //         var a = "Monthly"; 
    //     }

    //     document.getElementById("name1").innerHTML = "Limit Type : " + 
    //  a;
    //  document.getElementById("username1").innerHTML = a + " Limit : " + localStorage.getItem("Limit");

    //  document.getElementById("password1").innerHTML = "";

    //  document.getElementById("profession1").innerHTML = "Now, Let's head toward the last step...😊"

    //  document.getElementById("profession1").style.marginTop = "17%";
    }
    
function plus(){

localStorage.setItem("Limit" , Number(localStorage.getItem("Limit")) + Number(10));

document.getElementById("limit1").innerHTML = "₹" + localStorage.getItem("Limit");


}


function minus(){

    
    
    if(localStorage.getItem("Limit") == "0"){


        localStorage.setItem("Limit", localStorage.getItem("Limit"));

        document.getElementById("limit1").innerHTML = "₹" + localStorage.getItem("Limit");
    }

    else{

        localStorage.setItem("Limit" , Number(localStorage.getItem("Limit")) - Number(10));
    
    document.getElementById("limit1").innerHTML = "₹" + localStorage.getItem("Limit");
    }
    
    }


var ava = ["ava2.png", "ava3.png", "ava4.png", "ava5.png", "ava6.png", "ava7.png", "ava8.png", "ava9.png", "ava10.png", "ava11.png", "ava12.png", "ava13.png", "ava14.png", "ava15.png", "avaprem1.png", "avaprem2.png", "avaprem3.png", "avaprem4.png", "avaprem5.png", "avaprem6.png", "avaprem7.png", "avaprem8.png", "avaprem9.png", "avaprem10.png", "avaprem11.png", "avaprem12.png", "avaprem13.png", "avaprem14.png", "avaprem15.png", "ava1.png"];


function left(){
    navigator.vibrate(50)

    if(Number(localStorage.getItem("Avatarcount"))<=0){


        localStorage.setItem("Avatarcount", 29);
    
        document.getElementById("avatarpic").src = ava[Number(localStorage.getItem("Avatarcount"))]
    
    
    
    
    }
    
    else{

        localStorage.setItem("Avatarcount", Number(localStorage.getItem("Avatarcount")) - Number(1));
    
        document.getElementById("avatarpic").src = ava[localStorage.getItem("Avatarcount")]
    

    }
    


}

function right(){

    navigator.vibrate(50)

if(Number(localStorage.getItem("Avatarcount"))>=29){


    localStorage.setItem("Avatarcount", 0);

    document.getElementById("avatarpic").src = ava[localStorage.getItem("Avatarcount")]




}

else{

    localStorage.setItem("Avatarcount", Number(localStorage.getItem("Avatarcount")) + Number(1));

    document.getElementById("avatarpic").src = ava[Number(localStorage.getItem("Avatarcount")) ];


}

}

function submit3(){

    document.getElementById("login").style.display = "none";
document.getElementById("popup").style.display = "block";

localStorage.setItem("Login", "true");

document.getElementById("name1").innerHTML = "Avatar ID : " + localStorage.getItem("Avatarcount");


document.getElementById("pic1").src = ava[localStorage.getItem("Avatarcount")];

document.getElementById("name2").innerHTML = "Name : " + localStorage.getItem("Name");
document.getElementById("name3").innerHTML = "Username : " + localStorage.getItem("Username");

document.getElementById("name4").innerHTML = "Password : " + localStorage.getItem("Password");

document.getElementById("name5").innerHTML = "Profession : " + localStorage.getItem("Profession");

     if(localStorage.getItem("Weekly") == "yes"){

            var a = "Weekly";
        }
        else{

            var a = "Monthly"; 
        }

        // document.getElementById("name6").innerHTML = "Limit Type : " + 
     a;
     document.getElementById("name6").innerHTML = a + " Limit : " + "₹" + localStorage.getItem("Limit");

     document.getElementById("password1").innerHTML = "";

     document.getElementById("profession1").innerHTML = "Now, Let's head toward the last step...😊"

     document.getElementById("profession1").style.marginTop = "17%";

}






