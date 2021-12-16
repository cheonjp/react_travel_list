import React,{useState} from 'react'


const Tours = ({ trip, removeTour }) => {
    const [readMore,setReadMore]=useState(false)
    return (
        <section className="itemSection">
            {trip.map((item) => {
                const { id, image, info, name, price } = item
                return (
                    <div className="item" key={id}>
                        <img src={image} alt={name} />
                        <div className="itemNameBox">
                            <div className="itemName">{name}</div>
                            <div className="price">$ {price}</div>
                        </div>
                        <p>{readMore ? info : `${info.substring(0,200)}...`} <span className="readMore" onClick={()=>setReadMore(!readMore)}>{readMore ? 'Read Less' : 'Read More'}</span></p>
                        <button onClick={()=>removeTour(id)}>Not interested</button>
                    </div>
                )
            })}
        </section>
    )
}

export default Tours