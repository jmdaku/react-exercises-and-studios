import './styles.css';

function Button() {
   function onLearnMore() {
      alert("Splash!");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;