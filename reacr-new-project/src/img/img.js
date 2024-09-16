import React from 'react';

const Image = () => {
    const images=[
        {src:'imag123.jpeg', alt:'image1',description:'Description for image 1'},
        {src:'imag123.jpeg', alt:'image2',description:'Description for image 2'},
        {src:'imag123.jpeg', alt:'image3',description:'Description for image 3'},
        {src:'imag123.jpeg', alt:'image4',description:'Description for image 4'},
        {src:'imag123.jpeg', alt:'image5',description:'Description for image 5'},
        {src:'imag123.jpeg', alt:'image6',description:'Description for image 6'},
    ];
    return(
        <div >
             <h1> Photo Gallery</h1>
       
       
        <div className="gallery-container">
            
            {images.map((image,index)=>(
                <div className="gallery-item" key={index}>
                    <a href={image.src} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={image.alt}/>
                    </a>
                    <div className="desc"> {image.alt}</div>
                </div>

            ))}
        </div>
        </div>

    )
}

export default Image;