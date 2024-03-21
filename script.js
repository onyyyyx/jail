function verify() {
   input=document.getElementById("input").value;
   if(input=="password") {
      document.getElementById("output").innerHTML="Welcome";
   }
   else {
      document.getElementById("output").innerHTML="Access denied";
   }
}
