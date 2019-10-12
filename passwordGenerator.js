function passwordGenerator (length) {
    console.log("I'm Here");

   let result           = '';
   const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
   const charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   console.log(result);
   document.getElementById("password").innerHTML = result;

//    Next step add special charachters to string.
// Allow user to toggle the type of the special characters that they want.
// Then will be able to copy to clipboard, and then style.
}
 
function copyClipboard () {
// Get the text field.
var copyText = document.getElementById("Generate Password")

// Select the text field 
copyText.select();

// Copy the text inside the text field 
document.execCommand("copy");

// Alert the copied text
alert("Copied the text: " + copyText.value);

}




'(' 
