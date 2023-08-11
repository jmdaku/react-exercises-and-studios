import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label:"breakfastLabel",
         value: "breakfastValue"
      }, 
      {  label:"dessertLabel",
         value: "dessertValue"
      },
      {
         label:"pastryLabel",
         value: "pastryValue"
      },       
   ];

   const [boardName, setBoardName] = useState("no boards yet!");
   

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>

      <select value={boardName} onChange={handleChange}>
      {boards.map((post) => (
         <option value={post.label}>{post.value}</option>
      ))}; 
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}