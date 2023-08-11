const RecipeAuthor = () => {
   let authorLink = "https://www.kingarthurbaking.com/author/charlotte-rutledge";
   let authorPhoto = "https://www.kingarthurbaking.com/sites/default/files/styles/scaled_very_small_250w/public/2022-06/Charlotte-Rutledge-.jpg?itok=UJJypdjY";
   let authorName = "Charlotte Rutledge";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["flour", "whole milk", "butter", "brown sugar", "cinnamon"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-12/perfectly-pillowy-cinnamon-rolls.jpg?itok=03h7-5jI" alt="Cinnamon Rolls" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}