
    let username=document.querySelector("#username").value.trim();
    let password=document.querySelector("#password").value.trim();
    let fullname=document.querySelector("#fullname").value.trim();
    let address=document.querySelector("#address").value.trim();
    let country=document.querySelector("#country").value.trim();
    let zipcode=document.querySelector("#zipcode").value.trim();
    let email=document.querySelector("#mail").value.trim();



    function checkRequired(inputs){
        inputs.forEach((input) =>{
            if(input.value === "")
          {
            errorInput(input,"please fill")
          }
          else{
            successInput(input);
          }
        });
    }
    function errorInput(input,message){
        let inputbox=input.parentElement;
        inputbox.className= "inputbox error";
        let msg=document.querySelector("#error");
        msg.innerHTML=message;

    }

    function successInput(input){
        let inputbox=input.parentElement;
        inputbox.className="inputbox success";
        let msg=document.getElementById("error");
        msg.innerHTML="";
    }

    const form2=document.forms.registrationform;

    
            form2.addEventListener('submit',function(e) {
                e.preventDefault();
                checkRequired(['username','mail','password','zipcode','fullname','gender']) ; 
                console.log(e);
            });


       
    
   


        // function validateInputs(){
            // let usernamevalue=userid.trim();
            // let pwordvalue=pword.trim();
            // let fnamevalue=fname.trim();
            // let addressvalue=address.trim();
            // let countryvalue=country.trim();
            // let codevalue=code.trim();
            // let mailvalue=mail.trim();
            // let gendervalue=gender.trim();
            // let languagevalue=language.trim();

        // if(usernamevalue === ''){
            // let errormsg=document.getElementsByClassName("error");
            // errormsg.innerHTML="User id must be required";
            // document.getElementsByClassName("error").style.color("red");
        // }
        // else{

        // }
        // }
