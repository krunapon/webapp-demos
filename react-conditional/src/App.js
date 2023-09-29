import { recipes } from './data-q2.js';


export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => <h2>{recipe.name}</h2>)}
      <ul>
      {recipes.ingredients.map(ingredient => <li>{ingredient}</li>)}
      </ul>
    </div>
  );
}
