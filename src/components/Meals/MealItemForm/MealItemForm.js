import FormGroup from '../../UI/FormGroup/FormGroup';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const input = {
    id: `amount_${props.id}`,
    type: 'number',
    min: '1',
    max: '5',
    defaultValue: '1'
  }
  return (
    <form className={classes.form}>
      <FormGroup parentStyleType={'flexRow'} inputStyleClass={'quarterWidth borderedInput'} id='Amount' label='Amount' input={input}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
