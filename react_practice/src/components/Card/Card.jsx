import img1 from '../../assets/Flex Image Ratio.png'
import './Card.css'

function Card(){
    return(
        <div className="card-container">
            <div className="card">
                <img src={img1} alt="Telephone image" className='card-img'></img>
            </div>
            <p className='new'>NEW ARRIVAL</p>
            <h2>SMARTPHONE XYZ</h2>
            <div className="badges">
                <p className='Free'>Free Shipping</p>
                <p className='Offer'>Limited Offer</p>
            </div>
            <div className="divider"></div>
            <div className="colors">
                <span className="blue"></span>
                <span className="green"></span>
            </div>
            <div className="price">
                <h1>999,999</h1>
            </div>
            <div className="content">
                <p>The SmartPhone XYZ combines cutting-edge mobile technology with sleek design and a powerful camera.
                    Perfect for those seeking performance and style.
                </p>
            </div>
        <button className='card-button'>BUY NOW</button>
        </div>
    )
}

export default Card;