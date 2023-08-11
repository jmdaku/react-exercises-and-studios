import { useState } from 'react';

export default function StatusChange () {


   const [notes, setNotes] = useState("");
   const handleChange = (event) => {
      event.preventDefault();
      setNotes(event.target.value);
   }

   const [recipeStatus, setRecipeStatus] = useState(false);
   const handleSubmit = (event) => {
      setRecipeStatus(event.target.true)
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         
         <p>{recipeStatus === false ? "I have not tried this recipe!" : {notes}} </p>
                
      </div>
   );
}