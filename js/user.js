document.getElementById("si2").addEventListener("click", function () {
  document.querySelector(".signin2").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});

document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".signin2").style.display = "none";
  document.getElementById('overlay').style.display="none";
});
document.getElementById("su1").addEventListener("click", function () {
  document.querySelector(".signup").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});

document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".signup").style.display = "none";
  document.getElementById('overlay').style.display="none";
});

document.getElementById("gmail").addEventListener("click", function () {
  document.querySelector(".signin").style.display = "none";
  document.querySelector(".signin2").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".signin").style.display = "none";
  document.getElementById('overlay').style.display="none";
});

document.getElementById("go2sup").addEventListener("click", function () {
  document.querySelector(".signin").style.display = "none";
  document.querySelector(".signup").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});

document.getElementById("gosup").addEventListener("click", function () {
  document.querySelector(".signin2").style.display = "none";
  document.querySelector(".signup").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});

document.getElementById("go2si").addEventListener("click", function () {
  document.querySelector(".signup").style.display = "none";
  document.querySelector(".signin2").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});

document.getElementById("sinwo").addEventListener("click", function () {
  document.querySelector(".signin2").style.display = "none";
  document.querySelector(".signin").style.display = "flex";
  document.getElementById('overlay').style.display="block";
});

document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".signin2").style.display = "none";
  document.getElementById('overlay').style.display="nonw";
});

document.getElementById("continue").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;

  const person = [
    {
      name: "anc",
      email: "abc@gmail.com",
      mobile: 123456,
      password: "asdf123",
    },
  ];

  if (name == "" || mobile == "" || email == "" || password == "") {
    alert("Please enter all the fields");
  } else {
    function details(n, e, m, p) {
      this.name = n;
      this.email = e;
      this.mobile = m;
      this.password = p;
    }

    let user1 = new details(name, email, mobile, password);
    person.push(user1);

    localStorage.setItem("person", JSON.stringify(person));

    alert("Account created successfully");

    function goLog() {
      window.location.href = "home.html";
    }
    setTimeout(goLog(), 1000);
  }
});

document.getElementById("sinbtn").addEventListener("click", function () {
  let em = document.getElementById("email2").value;
  let pw = document.getElementById("password2").value;

  let user = JSON.parse(localStorage.getItem("person"));
  var flag = false;
  for (let i = 0; i < user.length; i++) {
    if (
      (user[i].email == em && user[i].password == pw) ||
      (user[i].mobile == em && user[i].password == pw)
    ) {
      document.querySelector(".signin2").style.display = "none";

      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Signied In");
    window.location.href = "home.html";
  } else {
    alert("Your username or password is incorrect");
  }
});
