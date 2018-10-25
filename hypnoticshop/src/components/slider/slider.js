import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider from './slider.css'
import image from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'

const Slider = () => {
    return (      
        <div className="mt0 center">           
            <AwesomeSlider>
                <div className="mt-3 w-100 h-100" style={{backgroundColor:'#364859'}}>
                    <div>
                        <p className="f3 lh-copy center white pb2">
                            Nagłówek
                        </p>
                    </div>
                   <div>
                     <img alt='image-slider-1' src={image} className="w-100 h-25" text="HELLO"/>
                   </div>                   
                </div>
                <div className="w-100 h-100" style={{backgroundColor:'#364859'}}>
                    <div>
                        <caption className="f3 lh-copy center white">
                                            Nagłówek
                        </caption>
                    </div>
                    <div>
                            <img  alt='resume' src={image2} className="w-100 h-25"/>
                    </div>                   
                </div>
                <div className="w-100 h-100"> 
                    <caption className="f3 lh-copy center white" style={{backgroundColor:'#364859'}}>
                        Nagłówek
                    </caption>
                    <img  alt='resume' src={image3} className="w-100 h-25"/>
                </div>                
            </AwesomeSlider>
        </div>   
      );
} 

export default Slider;