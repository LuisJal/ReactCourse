
export const Giffitem = ({url,tittle,id}) => {
    return (
     <div className="card">
        <img src={url} alt={id} />
        <p>{tittle}</p>

     </div>
        
   
    
  )
}
