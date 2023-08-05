
import './App.css';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/Photos.js';


function App() {
  return (
    <div className="App">
   <div>
      <RecipePhoto className="recipePhotoBlock"/>
      
      <div className="recipePhotoBlock">
         <RecipeDescription />
         <RecipeIngredients />
      </div>
   </div>
 </div>
  );
}

export default App;
