import './outcome.css';

export default function Outcome(props){
  const textArray =  props.children.split("")
  return(
    <div className='back'>
      {
        textArray.map((text, index) => {
          return <span key={index}>{text}</span>
        })
      }
    </div>
  )
}