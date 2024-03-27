import {Component} from 'react'
import MapWithClickCoordinates from "../MapWithClickCoordinates"
import MpPredictor from '../MpPredictor'
import "./index.css"


class mainpage extends Component{
    render(){
        return(
            <div className='header-align'>
                <div className='Navigation'>
                <a className='section' href="#section1">Interactive Map</a>
                <a className='section' href="#section2">Raster Maps</a>
                </div>

                <div id="section1">
                <h1 className='heading'>Interactive Map</h1>
                <div className="predictor">
                    <MapWithClickCoordinates />
                    <MpPredictor />
                </div>
                </div>
                <div id="section2">
                    <h1 className='heading'>Contour map depicting concentrations of Microplastics in the Indian Ocean</h1>
                    <div className='maps-align'>
                        <div class="img-para">
                            <img className='map-img' src={require('../project/templates/RasterOverlaps.png')} alt="RasterOverlaps"/>
                            <p>Darker shades of red depict areas of markedly higher concentrations of 
                                microplastics,posinga threat to marine and human life</p>
                        </div>
                        <div className="img-para">
                            <img className='map-img' src={require('../project/templates/turboramp.png')} alt="RasterOverlaps"/>
                            <p>this is to inform that there must be some content in this area</p>
                        </div>
                    
                </div>
                

                </div>
            </div>
        )
    }
}

export default mainpage