import classes from './FormGroup.module.css';
import Input from '../Input/Input';

const FormGroup = (props) => {
  return (
    <div className={props.parentStyleType === 'flexRow' ? classes.flexDirectionRow : classes.flexDirectionColumn}>
      <label htmlFor={props.id}>{props.label}</label>
      <Input inputStyleClass={props.inputStyleClass} input={props.input}/>
    </div>
  )
}

export default FormGroup;