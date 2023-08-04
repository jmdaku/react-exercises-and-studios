
import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
    let authorLink = "https://www.foodandwine.com/author/grant-achatz"
    let authorPhoto = "https://www.foodandwine.com/thmb/aI9ephkTYeKaEynmggD3Yp9Thig=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Grant_Achatz-2000-6e7f9d7dbae7421385a179c40dfe0606.jpeg"
    let authorName = "Grant Achatz";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Grant Achatz" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Author Bio</a> 
           </div>
        </div>
     );
}


 class RecipeDescription extends React.Component {
    render () {
        return (       
         <div> 
        <div>
        <h1>Recipe Title</h1>
        <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
        </div>
        )
    }
}

export default RecipeDescription;