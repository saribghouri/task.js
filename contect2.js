let contects = localStorage.getItem("contects")
  ? JSON.parse(localStorage.getItem("contects"))
  : [];
  let idGenerator = 1;
  function addcontect(e) {
    e.preventDefault();
    console.log("KASAM KHUDA KI MAIN CHAL GYA");
  let fname = document.getElementById("fname");
   let lname = document.getElementById("lname");
   let emailValue = document.getElementById("emailValue");
   let PhoneNumber = document.getElementById("PhoneNumber");
   let textform = document.getElementById("EnterText");

  let ContectDetails = {
    id: idGenerator,
    firstName: fname.value,
    LastName: lname.value,
    emailValue: emailValue.value,
    PhoneNumber: PhoneNumber.value,
    address : textform.value,
  };
  contects.push(ContectDetails);
  console.log("contects", contects)
  localStorage.setItem("contects", JSON.stringify(contects));
  fname.value = "";
  lname.value = "";
  emailValue.value = "";
  textform.value="";
  PhoneNumber.value="";
  idGenerator++;
  location.href ="/contects2.html"
  update(index)
  function update(index){
      index.preventDefault(index)
    const formdata =  localStorage.getItem("data");
   
    localStorage.setItem("data", JSON.stringify(formdata));
    formdata.location.href ="/contects2.html"
  }
}