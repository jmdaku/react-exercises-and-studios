import ClickedButton from "./ClickedButton.js";
import SaveButton from "./SaveButton.js";



function Button(props) {
   const saveButton = props.saveButton;
   return (saveButton ? SaveButton : ClickedButton)
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 