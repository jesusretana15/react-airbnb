
export default function Card(props) {

    console.log(props.exp.img)

    return (
        
        <div className="Card">
            <div className="imageDiv">
                <img src={props.exp.img} alt="" />
                <p className="soldOutText">{props.exp.available ? "ONLINE" : "SOLD OUT"}</p>
            </div>
            <div className="cardReviews">
            <img src="./src/imgs/star.png" alt="" />
            <p className="review1">{props.exp.calification}</p>
            <p className="review2">({props.exp.reviews}) • USA</p>
            </div>
            <h2 className="cardDescriptionTittle"> {props.exp.tittle}</h2>
            <p className="cardDescription"><strong>From ${props.exp.price}</strong>/per person</p>
        </div>
    )
}