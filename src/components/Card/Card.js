import "./Card.css";

const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt="" />
    if(props.image === undefined){
        cardImage = <img src={"/img/Error.jpg"} alt="" />;
    }   
    return (
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.jordanText || "Default text"}</p>
            </section>
        </article>
    )
}

export default Card;