
import PropTypes from 'prop-types'
export const Giffitem = ({url,tittle,id}) => {
    return (
     <div className="card">
        <img src={url} alt={id} />
        <p>{tittle}</p>

     </div>
        
   
    
  )
}

Giffitem.propTypes ={
   tittle: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
}
