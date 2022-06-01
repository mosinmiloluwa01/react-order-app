import { dummyMeals } from "../../../mocks/dummyData";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealsList = dummyMeals.map(meal => (
    <MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}>{meal.name}
    </MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;
