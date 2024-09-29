import MealItem from './meal-item';
import classes from './mealsgrid.module.css';
export default function Mealsgrid({ meals }){
    return(
        <>
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                <MealItem {...meal} />
            </li>
            ))}
        </ul>
        
        </>

    )
}