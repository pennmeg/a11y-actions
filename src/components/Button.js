export const Button = ({text}) => {
  return (
    <button className="button" type="button" onClick={() => console.log("-- Click")}>{text}</button>
  )
}
