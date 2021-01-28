import React from 'react'
import Button from 'elements/Button'

export default function MostPicked(props) {
    return (
        <section 
            ref={props.refMostPicked}
            className="container"
            style={{height: 2000}}
            >
            <h4 className="mb-3">Most Picked</h4>
                <div className="container-grid">
                    {
                        props.data.map( (item, index) => {
                            return (
                                <div
                                    key={`mostpicked-${index}`} 
                                    className={`item column-4${(index === 0 ? " row-2" : " row-1" )}`}>
                                    <div className="card card-feature">
                                        <div className="tag">
                                            ${item.price}
                                            <span className="font-weight-light">per {item.unit}</span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button 
                                                type="link"
                                                className="streched-link d-block text-white"
                                                href={`/properties/${item._id}`}
                                            >
                                                {item.name}
                                            </Button>
                                            <span>
                                                {item.city}, {item.country}
                                            </span>
                                        </div>
                                    </div>
                                </div>            
                            )
                        } )
                    }
                </div>
        </section>
    )
}
