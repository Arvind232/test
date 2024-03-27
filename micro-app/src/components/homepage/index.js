import {Component} from 'react'
import "./index.css"


class home extends Component{
    render(){
        return(
            <div className='header-align'>
                <div className='allign'>
                <div>
                    <h1 className='heading'>
                        Microplastics Mapper using Predictive Modeling for Sustainable Environmental Management in the Indian Ocean
                    </h1>
                <div className='problem-statement'>
                    <p>
                        Microplastics are a growing threat to ecosystems, wildlife, 
                        and human health, making it crucial to understand their distribution 
                        and impact for effective conservation efforts. The NCEI has records 
                        of microplastics distribution for every other country other than India.
                    </p>
                    <p>
                        Assessing the economic consequences of microplastic pollution provides 
                        incentives for sustainable management practices, reducing the financial 
                        burden of environmental damage.
                    </p>
                    <p>
                        It serves as a reliable alternative to the time-consuming process of 
                        manual testing, enabling proactive decision-making and implementing 
                        sustainable strategies.
                    </p>
                </div>
                </div>
                <div>
                    <div className='paraAndImage'>
                    <p>
                        

                        <strong>Lack of Comprehensive Data:</strong> There is a substantial lack of comprehensive data on the distribution and concentration of microplastics in various environments. The project aims to fill this knowledge gap by employing predictive modeling techniques to map and understand the spatial distribution of microplastics.<br></br>

                        <strong>Predictive Modeling for Intervention:</strong> Predictive modeling allows for the identification of hotspots and areas most susceptible to microplastic pollution. This information can guide targeted intervention strategies, such as cleanup efforts, waste management improvements, and the implementation of preventive measures.<br></br>

                        <strong>Economic Consequences:</strong> Microplastic pollution has far-reaching economic implications, affecting industries like fisheries, tourism, and public health. An economic impact analysis can quantify the costs associated with microplastic pollution, providing policymakers and businesses with valuable information to make informed decisions for sustainable development.<br></br>

                        <strong>Sustainable Environmental Management:</strong> The overarching goal of the project is to contribute to sustainable environmental management. By understanding the distribution, sources, and economic consequences of microplastics, the project aims to propose effective and sustainable management strategies that mitigate the environmental impact while considering economic implications.
                      </p>
                      <div className='image-div'>
                        <div className='imgAndLink'>
                            <img className='microplastic-image' src="https://images.newscientist.com/wp-content/uploads/2020/05/15170625/gettyimages-1208601300_web.jpg"
                                alt="microplastic" />
                            <p className='link-para'>Credit:<a className='link-color' href="https://www.newscientist.com/article/2243731-we-may-have-missed-half-the-microplastics-in-the-ocean/">www.newscientist.com</a></p>
                        </div>
                        <div className='imgAndLink'>
                            <img className='microplastic-image' src="https://media.istockphoto.com/id/1393825220/photo/microplastics-at-hand-microplastics-air-pollution-aquatic-microplastics-food-microplastics.webp?b=1&s=170667a&w=0&k=20&c=CReU5PkEI70Wm9OjN-czF9y-adyrC4gFrkNG3GQyf7w="
                            alt="microplastic" />
                            <p className='link-para'>Credit:<a className='link-color' href="https://unsplash.com/s/photos/microplastic-pollution">www.unsplash.com</a></p>
                        </div>
                      </div>
                      </div>
                </div>
                </div>

            </div>
        )
    }
}

export default home