function start() {



  if (localStorage.getItem("Login") == "true") {
    home();
    house();
    document.getElementById("home").style.display = "block";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("login").style.display = "none";
  }
  else {


    localStorage.setItem("Entertainmentspent", 0);
    localStorage.setItem("Foodspent", 0);
    localStorage.setItem("Shoppingspent", 0);
    localStorage.setItem("Healthspent", 0);
    localStorage.setItem("Studyspent", 0);
    localStorage.setItem("Othersspent", 0);

    localStorage.setItem("Transactioncount", -1);
    localStorage.setItem("Day", 1);

    var d = new Date();
    let day = d.getDay()

    localStorage.setItem("Daycount", day);

    document.getElementById("login").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("calculator").style.display = "none";

    document.getElementById("wallet").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById("spendmoney").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    localStorage.setItem("Avatarcount", 29);

    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
  }

  document.getElementById("account").src =
    ava[localStorage.getItem("Avatarcount")];
}

function showpass() {
  document.getElementById("eyeclose").style.display = "block";

  document.getElementById("eye").style.display = "none";

  document.getElementById("password").type = "text";
  navigator.vibrate(40);
}

function hidepass() {
  document.getElementById("eyeclose").style.display = "none";

  document.getElementById("eye").style.display = "block";

  document.getElementById("password").type = "password";
  navigator.vibrate(40);
}

function submit() {
  localStorage.setItem("Limit", "100");

  document.getElementById("limit1").innerHTML =
    "₹" + localStorage.getItem("Limit");

  localStorage.setItem("Weekly", "yes");
  localStorage.setItem("Monthly", "no");

  navigator.vibrate(70);

  localStorage.setItem("Name", document.getElementById("name").value);

  localStorage.setItem("Username", document.getElementById("un").value);

  localStorage.setItem("Password", document.getElementById("password").value);

  localStorage.setItem("Profession", document.getElementById("prof").value);

  document.getElementById("form").style.display = "none";

  document.getElementById("form2").style.display = "block";

  document.getElementById("dot2").style.backgroundColor = "#aa25fda8";

  document.getElementById("dot1").style.backgroundColor = "white";

  document.getElementById("dot3").style.backgroundColor = "white";

  document.getElementById("dot2").style.width = "5%";
  document.getElementById("dot2").style.height = "18px";

  document.getElementById("dot1").style.width = "3.3%";
  document.getElementById("dot1").style.height = "12px";
  document.getElementById("dot").style.marginTop = "-3%";
  // document.getElementById("popup").style.display = "block"

  // document.getElementById("name1").innerHTML = "Name : " + localStorage.getItem("Name");

  // document.getElementById("username1").innerHTML = "Username : "  +  localStorage.getItem("Username");

  // document.getElementById("password1").innerHTML = "Password : " + localStorage.getItem("Password");

  // document.getElementById("profession1").innerHTML = "Profession : " + localStorage.getItem("Profession");

  // document.getElementById("form2").style.display = "none";
  // document.getElementById("dot").style.display = "none";
}

function closepopup() {
  document.getElementById("popup").style.display = "none";
  navigator.vibrate(50);



  document.getElementById("navbar").style.display = "flex"

  location.reload();
}

function weekly() {
  document.getElementById("weekly1").style.backgroundColor = "#aa25fda8";

  localStorage.setItem("Weekly", "yes");
  localStorage.setItem("Monthly", "no");

  document.getElementById("monthly1").style.backgroundColor = "#17181f";
}

function monthly() {
  document.getElementById("monthly1").style.backgroundColor = "#aa25fda8";

  localStorage.setItem("Monthly", "yes");
  localStorage.setItem("Weekly", "no");

  document.getElementById("weekly1").style.backgroundColor = "#17181f";
}

function submit2() {
  navigator.vibrate(70);

  document.getElementById("form").style.display = "none";

  document.getElementById("form2").style.display = "none";

  document.getElementById("form3").style.display = "block";

  document.getElementById("dot3").style.backgroundColor = "#aa25fda8";

  document.getElementById("dot1").style.backgroundColor = "white";

  document.getElementById("dot2").style.backgroundColor = "white";

  document.getElementById("dot3").style.width = "5%";
  document.getElementById("dot3").style.height = "18px";

  document.getElementById("dot2").style.width = "3.3%";
  document.getElementById("dot2").style.height = "12px";

  document.getElementById("dot").style.marginTop = "3%";

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

function plus() {
  localStorage.setItem(
    "Limit",
    Number(localStorage.getItem("Limit")) + Number(10)
  );

  document.getElementById("limit1").innerHTML =
    "₹" + localStorage.getItem("Limit");
}

function minus() {
  if (localStorage.getItem("Limit") == "0") {
    localStorage.setItem("Limit", localStorage.getItem("Limit"));

    document.getElementById("limit1").innerHTML =
      "₹" + localStorage.getItem("Limit");
  } else {
    localStorage.setItem(
      "Limit",
      Number(localStorage.getItem("Limit")) - Number(10)
    );

    document.getElementById("limit1").innerHTML =
      "₹" + localStorage.getItem("Limit");
  }
}

var ava = [
  "ava2.png",
  "ava3.png",
  "ava4.png",
  "ava5.png",
  "ava6.png",
  "ava7.png",
  "ava8.png",
  "ava9.png",
  "ava10.png",
  "ava11.png",
  "ava12.png",
  "ava13.png",
  "ava14.png",
  "ava15.png",
  "avaprem1.png",
  "avaprem2.png",
  "avaprem3.png",
  "avaprem4.png",
  "avaprem5.png",
  "avaprem6.png",
  "avaprem7.png",
  "avaprem8.png",
  "avaprem9.png",
  "avaprem10.png",
  "avaprem11.png",
  "avaprem12.png",
  "avaprem13.png",
  "avaprem14.png",
  "avaprem15.png",
  "ava1.png",
];

function left() {
  navigator.vibrate(50);

  if (Number(localStorage.getItem("Avatarcount")) <= 0) {
    localStorage.setItem("Avatarcount", 29);

    document.getElementById("avatarpic").src =
      ava[Number(localStorage.getItem("Avatarcount"))];
  } else {
    localStorage.setItem(
      "Avatarcount",
      Number(localStorage.getItem("Avatarcount")) - Number(1)
    );

    document.getElementById("avatarpic").src =
      ava[localStorage.getItem("Avatarcount")];
  }
}

function right() {
  navigator.vibrate(50);

  if (Number(localStorage.getItem("Avatarcount")) >= 29) {
    localStorage.setItem("Avatarcount", 0);

    document.getElementById("avatarpic").src =
      ava[localStorage.getItem("Avatarcount")];
  } else {
    localStorage.setItem(
      "Avatarcount",
      Number(localStorage.getItem("Avatarcount")) + Number(1)
    );

    document.getElementById("avatarpic").src =
      ava[Number(localStorage.getItem("Avatarcount"))];
  }
}

function submit3() {


  localStorage.setItem("Spent", 0);
  document.getElementById("login").style.display = "none";
  document.getElementById("popup").style.display = "block";



  localStorage.setItem("Login", "true");

  document.getElementById("name1").innerHTML =
    "Avatar ID : " + localStorage.getItem("Avatarcount");

  document.getElementById("pic1").src =
    ava[localStorage.getItem("Avatarcount")];

  document.getElementById("name2").innerHTML =
    "Name : " + localStorage.getItem("Name");
  document.getElementById("name3").innerHTML =
    "Username : " + localStorage.getItem("Username");

  document.getElementById("name4").innerHTML =
    "Password : " + localStorage.getItem("Password");

  document.getElementById("name5").innerHTML =
    "Profession : " + localStorage.getItem("Profession");

  if (localStorage.getItem("Weekly") == "yes") {
    var a = "Weekly";
  } else {
    var a = "Monthly";
  }

  // document.getElementById("name6").innerHTML = "Limit Type : " +
  // a;
  document.getElementById("name6").innerHTML =
    a + " Limit : " + "₹" + localStorage.getItem("Limit");

  document.getElementById("password1").innerHTML = "";

  document.getElementById("profession1").innerHTML =
    "Now, Let's head toward the last step...😊";

  document.getElementById("profession1").style.marginTop = "17%";

  document.getElementById("account").src =
    ava[localStorage.getItem("Avatarcount")];





}

function cal() {
  document.getElementById("cal1").src = "cal1.png";
  document.getElementById("cal1").style.width = "13%";

  document.getElementById("home1").src = "house2.png";
  document.getElementById("home1").style.width = "8.5%";

  document.getElementById("add1").src = "plus2.png";
  document.getElementById("add1").style.width = "8.5%";

  document.getElementById("analytics1").src = "ana2.png";
  document.getElementById("analytics1").style.width = "8.5%";

  document.getElementById("wallet1").src = "wallet2.png";
  document.getElementById("wallet1").style.width = "8.5%";

  calculator();
}

function house() {
  document.getElementById("cal1").src = "cal2.png";
  document.getElementById("cal1").style.width = "8.5%";

  document.getElementById("home1").src = "house1.png";
  document.getElementById("home1").style.width = "13%";

  document.getElementById("add1").src = "plus2.png";
  document.getElementById("add1").style.width = "8.5%";

  document.getElementById("analytics1").src = "ana2.png";
  document.getElementById("analytics1").style.width = "8.5%";

  document.getElementById("wallet1").src = "wallet2.png";
  document.getElementById("wallet1").style.width = "8.5%";

  home();
}
function addd() {
  document.getElementById("cal1").src = "cal2.png";
  document.getElementById("cal1").style.width = "8.5%";

  document.getElementById("home1").src = "house2.png";
  document.getElementById("home1").style.width = "8.5%";

  document.getElementById("add1").src = "plus1.png";
  document.getElementById("add1").style.width = "17%";

  document.getElementById("analytics1").src = "ana2.png";
  document.getElementById("analytics1").style.width = "8.5%";

  document.getElementById("wallet1").src = "wallet2.png";
  document.getElementById("wallet1").style.width = "8.5%";

  spendmoney()
}

function anal() {
  document.getElementById("cal1").src = "cal2.png";
  document.getElementById("cal1").style.width = "8.5%";

  document.getElementById("home1").src = "house2.png";
  document.getElementById("home1").style.width = "8.5%";

  document.getElementById("add1").src = "plus2.png";
  document.getElementById("add1").style.width = "8.5%";

  document.getElementById("analytics1").src = "ana1.png";
  document.getElementById("analytics1").style.width = "13%";

  document.getElementById("wallet1").src = "wallet2.png";
  document.getElementById("wallet1").style.width = "8.5%";

  analytics()
}

function wall() {

  wallet();
  document.getElementById("cal1").src = "cal2.png";
  document.getElementById("cal1").style.width = "8.5%";

  document.getElementById("home1").src = "house2.png";
  document.getElementById("home1").style.width = "8.5%";

  document.getElementById("add1").src = "plus2.png";
  document.getElementById("add1").style.width = "8.5%";

  document.getElementById("analytics1").src = "ana2.png";
  document.getElementById("analytics1").style.width = "8.5%";

  document.getElementById("wallet1").src = "wallet1.png";
  document.getElementById("wallet1").style.width = "13%";
}

function home() {


  navigator.vibrate(50)

  document.getElementById("home").style.display = "block";


  document.getElementById("calculator").style.display = "none";

  document.getElementById("spendmoney").style.display = "none";

  document.getElementById("analytics").style.display = "none";

  document.getElementById("wallet").style.display = "none";






  const quoteno = Math.floor(Math.random() * 1643) + 1;


  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then((response) => {


      document.getElementById("quotetext").innerHTML = response[quoteno].text



      if (response[quoteno].author == null) {
        document.getElementById("artist").innerHTML = "~ " + "Unknown"


      }

      else {

        document.getElementById("artist").innerHTML = "~ " + response[quoteno].author
      }

      console.log(response)


    })
    .catch(err => console.error(err));



  if (localStorage.getItem("Weekly") == "yes") {
    document.getElementById("mlim1").innerHTML = "Weekly Limit"
  } else {
    document.getElementById("mlim1").innerHTML = "Monthly Limit"
  }


  document.getElementById("mleft").innerHTML = "₹" + (Number(localStorage.getItem("Limit")) - Number(localStorage.getItem("Spent")))


  document.getElementById("mlim").innerHTML = "₹" + localStorage.getItem("Limit")

  document.getElementById("dayc").innerHTML = "Day " + Number(localStorage.getItem("Day"))

  var d = new Date();
  let day = d.getDay();

  if (Number(localStorage.getItem("Daycount")) != Number(day)) {


    localStorage.setItem("Day", Number(localStorage.getItem("Day")) + Number(1));

    document.getElementById("dayc").innerHTML = "Day " + Number(localStorage.getItem("Day"))

    localStorage.setItem("Daycount", day);






  }

  if (localStorage.getItem("Weekly") == "yes") {

    if (Number(localStorage.getItem("Day")) > 7) {

      localStorage.setItem("Day", Number(1));

localStorage.setItem("Balance", localStorage.getItem("Limit"));

localStorage.setItem("Spent", 0);


localStorage.setItem("Entertainmentspent", 0);
localStorage.setItem("Foodspent", 0);
localStorage.setItem("Shoppingspent", 0);
localStorage.setItem("Healthspent", 0);
localStorage.setItem("Studyspent", 0);
localStorage.setItem("Othersspent", 0);






    }

  }

  else {
    if (Number(localStorage.getItem("Day")) > 30) {

      localStorage.setItem("Day", Number(1));

      localStorage.setItem("Balance", localStorage.getItem("Limit"));

localStorage.setItem("Spent", 0);


localStorage.setItem("Entertainmentspent", 0);
localStorage.setItem("Foodspent", 0);
localStorage.setItem("Shoppingspent", 0);
localStorage.setItem("Healthspent", 0);
localStorage.setItem("Studyspent", 0);
localStorage.setItem("Othersspent", 0);


    }


  }



}

function spendmoney() {

  localStorage.setItem("Category", "Others");
  navigator.vibrate(50)

  document.getElementById("home").style.display = "none";


  document.getElementById("calculator").style.display = "none";

  document.getElementById("spendmoney").style.display = "block";

  document.getElementById("analytics").style.display = "none";

  document.getElementById("wallet").style.display = "none";

}

function analytics() {

  var xValues = ["Money Remaining", "Money Spent"];
  var yValues = [localStorage.getItem("Balance"), localStorage.getItem("Spent")];
  var barColors = [
    "green",
    "red",
   
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: ""
      }
    }
  });

  var xValues = ["Entertainment", "Food", "Shopping", "Health", "Study", "Others"];
  var yValues = [localStorage.getItem("Entertainmentspent"), localStorage.getItem("Foodspent"), localStorage.getItem("Shoppingspent"), localStorage.getItem("Healthspent"), localStorage.getItem("Studyspent"), localStorage.getItem("Othersspent"), ];
  var barColors = [
    "violet",
    "yellow",
    "orange",
    "purple",
    "pink",
    "blue"
   
  ];
  
  new Chart("myChart1", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: ""
      }
    }
  });




  navigator.vibrate(50)

  document.getElementById("home").style.display = "none";


  document.getElementById("calculator").style.display = "none";

  document.getElementById("spendmoney").style.display = "none";

  document.getElementById("analytics").style.display = "block";

  document.getElementById("wallet").style.display = "none";

}

function wallet() {


var i = localStorage.getItem("Transactioncount");
var lawda = 1;

  for( count = i; count>=0; count--){

document.getElementById("category" + lawda).src = localStorage.getItem("cat" + count).toLowerCase() + ".png"

document.getElementById("spentw" + lawda).innerHTML = localStorage.getItem("where" + count);

document.getElementById("rs" + lawda).innerHTML = "-₹" + (localStorage.getItem("spent" + count));

lawda++;

if(lawda>9){


  break;
}


  }






  if (localStorage.getItem("Weekly") == "yes") {

    var aaa = "Weekly";
  }
  else {

    var aaa = "Monthly";

  }

  navigator.vibrate(50)


  var percent = (localStorage.getItem("Spent") / localStorage.getItem("Limit")) * 100;

percent = Math.ceil(percent);
  if (percent >= 0 && percent <= 50) {

    document.getElementById("used1").innerHTML = "Used " + percent + "% of " + aaa + " Limit";

    document.getElementById("balance1").style.backgroundColor =
      "rgb(17, 161, 24)";


    document.getElementById("used1").style.color = "rgb(17, 161, 24)";

  }


  else if (percent > 50 && percent <= 75) {

    document.getElementById("used1").innerHTML = "Used " + percent + "% of " + aaa + " Limit";

    document.getElementById("balance1").style.backgroundColor =
      "rgb(188, 14, 115)";


    document.getElementById("used1").style.color = "rgb(188, 14, 115)";

  }

  else if (percent > 75) {


    document.getElementById("used1").innerHTML = "Used " + percent + "% of " + aaa + " Limit";

    document.getElementById("balance1").style.backgroundColor =
      "red";


    document.getElementById("used1").style.color = "red";


  }



  document.getElementById("balance1").innerHTML = "₹" + localStorage.getItem("Balance");

  document.getElementById("profilee1").src = ava[localStorage.getItem("Avatarcount")]

  document.getElementById("hellon").innerHTML = "Hello, " + localStorage.getItem("Name");

  document.getElementById("home").style.display = "none";


  document.getElementById("calculator").style.display = "none";

  document.getElementById("spendmoney").style.display = "none";

  document.getElementById("analytics").style.display = "none";

  document.getElementById("wallet").style.display = "block";

}


function calculator() {

  navigator.vibrate(50)




  document.getElementById("home").style.display = "none";


  document.getElementById("calculator").style.display = "block";

  document.getElementById("spendmoney").style.display = "none";

  document.getElementById("analytics").style.display = "none";

  document.getElementById("wallet").style.display = "none";



}


function openemerpopup() {

  navigator.vibrate(50)

  document.getElementById("popup2").style.display = "block"

  document.getElementById("title").innerHTML = "Emergency Submit";
  document.getElementById("title").style.color = "red";
  document.getElementById("info1").innerHTML = "After Clicking on Emergency Submit the Amount will not be deducted from your Balance but you will have its data in this app";

  document.getElementById("info2").innerHTML = "You can use this when amount is big and you dont want to deduct it from your limit...";

}

function closepopup2() {
  navigator.vibrate(50)

  document.getElementById("popup2").style.display = "none";
  document.getElementById("navbar").style.display = "flex";



}

function enter() {

  localStorage.setItem("Category", "Entertainment");

  document.getElementById("enter").style.backgroundColor = "#aa25fda8"
  document.getElementById("food").style.backgroundColor = "#575d6955"
  document.getElementById("shop").style.backgroundColor = "#575d6955"
  document.getElementById("health").style.backgroundColor = "#575d6955"
  document.getElementById("study").style.backgroundColor = "#575d6955"
  document.getElementById("others").style.backgroundColor = "#575d6955"


}


function food() {

  localStorage.setItem("Category", "Food");

  document.getElementById("food").style.backgroundColor = "#aa25fda8"
  document.getElementById("enter").style.backgroundColor = "#575d6955"
  document.getElementById("shop").style.backgroundColor = "#575d6955"
  document.getElementById("health").style.backgroundColor = "#575d6955"
  document.getElementById("study").style.backgroundColor = "#575d6955"
  document.getElementById("others").style.backgroundColor = "#575d6955"


}

function shop() {

  localStorage.setItem("Category", "Shopping");

  document.getElementById("shop").style.backgroundColor = "#aa25fda8"
  document.getElementById("enter").style.backgroundColor = "#575d6955"
  document.getElementById("food").style.backgroundColor = "#575d6955"
  document.getElementById("health").style.backgroundColor = "#575d6955"
  document.getElementById("study").style.backgroundColor = "#575d6955"
  document.getElementById("others").style.backgroundColor = "#575d6955"


}

function health() {

  localStorage.setItem("Category", "Health");

  document.getElementById("health").style.backgroundColor = "#aa25fda8"
  document.getElementById("enter").style.backgroundColor = "#575d6955"
  document.getElementById("food").style.backgroundColor = "#575d6955"
  document.getElementById("shop").style.backgroundColor = "#575d6955"
  document.getElementById("study").style.backgroundColor = "#575d6955"
  document.getElementById("others").style.backgroundColor = "#575d6955"


}

function study() {

  localStorage.setItem("Category", "Study");

  document.getElementById("study").style.backgroundColor = "#aa25fda8"
  document.getElementById("enter").style.backgroundColor = "#575d6955"
  document.getElementById("food").style.backgroundColor = "#575d6955"
  document.getElementById("shop").style.backgroundColor = "#575d6955"
  document.getElementById("health").style.backgroundColor = "#575d6955"
  document.getElementById("others").style.backgroundColor = "#575d6955"


}

function others() {

  localStorage.setItem("Category", "Others");

  document.getElementById("others").style.backgroundColor = "#aa25fda8"
  document.getElementById("enter").style.backgroundColor = "#575d6955"
  document.getElementById("food").style.backgroundColor = "#575d6955"
  document.getElementById("shop").style.backgroundColor = "#575d6955"
  document.getElementById("study").style.backgroundColor = "#575d6955"
  document.getElementById("health").style.backgroundColor = "#575d6955"


}

localStorage.setItem("Balance", Number(localStorage.getItem("Limit")) - Number(localStorage.getItem("Spent")))

let where = [];
let spent = [];
let cat = [];

let date = [];

var livedate = new Date();
localStorage.setItem("Livedate", livedate)  ;


function record(){


  var livedate = new Date();
  localStorage.setItem("Livedate", livedate)  ;



  if(localStorage.getItem("Category") == "Entertainment" ){

    localStorage.setItem("Entertainmentspent", Number(localStorage.getItem("Entertainmentspent")) + Number(document.getElementById("amountspent").value));
  
  }
  
  else if(localStorage.getItem("Category") == "Food" ){
  
    localStorage.setItem("Foodspent", Number(localStorage.getItem("Foodspent")) + Number(document.getElementById("amountspent").value));
  
  }
  
  else if(localStorage.getItem("Category") == "Shopping" ){
  
    localStorage.setItem("Shoppingspent", Number(localStorage.getItem("Shoppingspent")) + Number(document.getElementById("amountspent").value));
  
  
  }
  
  else if(localStorage.getItem("Category") == "Health" ){
  
    localStorage.setItem("Healthspent", Number(localStorage.getItem("Healthspent")) + Number(document.getElementById("amountspent").value));
  
    
  }
  
  else if(localStorage.getItem("Category") == "Study" ){
  
    localStorage.setItem("Studyspent", Number(localStorage.getItem("Studyspent")) + Number(document.getElementById("amountspent").value));
  
    
  }
  
  else if(localStorage.getItem("Category") == "Others" ){
  
    localStorage.setItem("Othersspent", Number(localStorage.getItem("Othersspent")) + Number(document.getElementById("amountspent").value));
  
    
  }


setTimeout(() => {
  document.getElementById("spentwhere").value = "";
  document.getElementById("amountspent").value = "";
}, 100);


  var draudio = new Audio('dr.mp3');
  draudio.play();

  localStorage.setItem("Balance", Number(localStorage.getItem("Balance")) - document.getElementById("amountspent").value);

  localStorage.setItem("Spent", Number(localStorage.getItem("Limit")) - Number(localStorage.getItem("Balance")));

  localStorage.setItem("Transactioncount", Number(localStorage.getItem("Transactioncount")) + 1);

  where[localStorage.getItem("Transactioncount")] = document.getElementById("spentwhere").value;
  spent[localStorage.getItem("Transactioncount")] = document.getElementById("amountspent").value;
  cat[localStorage.getItem("Transactioncount")] = localStorage.getItem("Category");
  date[localStorage.getItem("Transactioncount")] = localStorage.getItem("Livedate");



  localStorage.setItem("where" + localStorage.getItem("Transactioncount"), where[localStorage.getItem("Transactioncount")])

  localStorage.setItem("spent" + localStorage.getItem("Transactioncount"), spent[localStorage.getItem("Transactioncount")])


  localStorage.setItem("cat" + localStorage.getItem("Transactioncount"), cat[localStorage.getItem("Transactioncount")])

  localStorage.setItem("date" + localStorage.getItem("Transactioncount"), date[localStorage.getItem("Transactioncount")])


  
}

function emerrecord(){
  var livedate = new Date();
  localStorage.setItem("Livedate", livedate)  ;

  

if(localStorage.getItem("Category") == "Entertainment" ){

  localStorage.setItem("Entertainmentspent", Number(localStorage.getItem("Entertainmentspent")) + Number(document.getElementById("amountspent").value));

}

else if(localStorage.getItem("Category") == "Food" ){

  localStorage.setItem("Foodspent", Number(localStorage.getItem("Foodspent")) + Number(document.getElementById("amountspent").value));

}

else if(localStorage.getItem("Category") == "Shopping" ){

  localStorage.setItem("Shoppingspent", Number(localStorage.getItem("Shoppingspent")) + Number(document.getElementById("amountspent").value));


}

else if(localStorage.getItem("Category") == "Health" ){

  localStorage.setItem("Healthspent", Number(localStorage.getItem("Healthspent")) + Number(document.getElementById("amountspent").value));

  
}

else if(localStorage.getItem("Category") == "Study" ){

  localStorage.setItem("Studyspent", Number(localStorage.getItem("Studyspent")) + Number(document.getElementById("amountspent").value));

  
}

else if(localStorage.getItem("Category") == "Others" ){

  localStorage.setItem("Othersspent", Number(localStorage.getItem("Othersspent")) + Number(document.getElementById("amountspent").value));

  
}


  setTimeout(() => {
    document.getElementById("spentwhere").value = "";
    document.getElementById("amountspent").value = "";
  }, 100);

  var draudio = new Audio('dr.mp3');
  draudio.play();

  // localStorage.setItem("Balance", Number(localStorage.getItem("Balance")) - document.getElementById("amountspent").value);

  localStorage.setItem("Spent", Number(localStorage.getItem("Limit")) - Number(localStorage.getItem("Balance")));

  localStorage.setItem("Transactioncount", Number(localStorage.getItem("Transactioncount")) + 1);

  where[localStorage.getItem("Transactioncount")] = document.getElementById("spentwhere").value + " (E)"; 
  spent[localStorage.getItem("Transactioncount")] = document.getElementById("amountspent").value;
  cat[localStorage.getItem("Transactioncount")] = localStorage.getItem("Category");
  date[localStorage.getItem("Transactioncount")] = localStorage.getItem("Livedate");


  localStorage.setItem("where" + localStorage.getItem("Transactioncount"), where[localStorage.getItem("Transactioncount")])

  localStorage.setItem("spent" + localStorage.getItem("Transactioncount"), spent[localStorage.getItem("Transactioncount")])


  localStorage.setItem("cat" + localStorage.getItem("Transactioncount"), cat[localStorage.getItem("Transactioncount")])
  

  localStorage.setItem("date" + localStorage.getItem("Transactioncount"), date[localStorage.getItem("Transactioncount")])


}



















