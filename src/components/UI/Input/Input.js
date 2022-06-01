const Input = (props) => {
  return (
    // <div className={classes.input}>
      <input className={props.inputStyleClass} {...props.input}/>
    // </div>
  )
}

export default Input;