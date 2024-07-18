import Card from './card'
import airbnbexperiences from '../airbnbexperiences'
export default 

function Cards() {
    const cardElements = airbnbexperiences.map((exp) => {
        return  <Card key={exp.id} exp ={exp} />
    })

    return(
        <div className='cardsDiv'>
           {cardElements}
        </div>
    )

}
