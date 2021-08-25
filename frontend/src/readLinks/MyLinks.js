import ButtonDelete from '../Small-Components/ButtonDelete'
import ButtonEdit from '../Small-Components/ButtonEdit'
import * as timeago from 'timeago.js'
import TimeAgo from 'react-timeago'

const MyLinks = ({card}) => {
     
  const mytimeago = timeago.format(`${card.created_at}`);
 //  timeago.render(document.querySelectorAll('.demo'))
  const react_time = new Date(`${card.created_at}`)

  const created_at = Date(Date.now());
console.log(created_at)

     return (
          <>
           <div className="MyLinks">
                <div className="card classCard">
                   
                    <div className="card-body">
                    <a href={card.url} target="_blank" rel="noopener noreferrer">
                          <h5 className="card-header">{card.title}</h5>
                    </a>
                    <p className="card-text">{card.description}</p>
                    
                    </div>
                  
                    <div className="mytimeago">
                         {mytimeago}
                    </div>
                    <div className="">
                         <TimeAgo date={react_time}/>
                    </div>
                    {/* <p>{card.created_at}</p> */}

                    <div className="button">
                              <ButtonDelete id={card.id}/>
                              <ButtonEdit id={card.id}/>
                      </div>
                   
               </div>
           </div>
               

          </>
     )
}



export default MyLinks