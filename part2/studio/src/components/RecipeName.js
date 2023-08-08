import recipedata from "./recipe.json";


const props = recipedata

function RecipeName() {
  const recipeName = recipedata.map((data) => (
    <h1>
      <div key={data.name}>
      </div>
    </h1> 
  )
  )
    return RecipeName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header