import {Component} from 'react'
import "./index.css"

class MpPredictor extends Component{
    state={lat:"",lon:"",value:""}

    latchange=(event)=>{
        this.setState({lat:event.target.value,value:""})
    }

    sendData = async (dataToSend) => {
        try {
          const response = await fetch('http://localhost:5000/api/receive_data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
          });
    
          const result = await response.json();
          console.log('Server response:', result);
          return result
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

    lonchange=(event)=>{
        this.setState({lon:event.target.value,value:""})
        console.log(event.target.value)
    }

    onSubmit=async (event)=>{
        const {lat,lon}=this.state
        event.preventDefault()
        try {
          const {message}= await this.sendData({lat:parseFloat(lat),lng:parseFloat(lon)})
          this.setState({lon:"",lat:"",value:message})
        } catch (error) {
          this.setState({value:"Invalid Data"})
        }     
    }

    validateResult=(value)=>{
      const invalid=()=>{
        return(
          <p className='redcolor-para'>*Latitude or Longitude is Invalid</p>
        )
      }
      
      const result=`The predicted microplastic is ${value}`
      return value === "" ? "": value==="Invalid Data"?invalid():result
    }

    render(){
        const {lat,lon,value}=this.state 
        console.log(lat,lon)
        return(
            <div className='Predictor-align'>
                <p className='para-head'><strong>Manual Prediction</strong></p>
                <form onSubmit={this.onSubmit}>
                <label htmlFor="myInput">Enter Latitude:</label>
                <input required type="text" onChange={this.latchange} id="myInput" value={lat} />
                <br></br>
                <label htmlFor="myInput">Enter Longitude:</label>
                <input required type="text" onChange={this.lonchange} id="myInput" value={lon} />
                <br></br>
                <div className='button-align'>
                <button className='button button1' type="submit" >Submit</button>
                </div>
                </form>
                <p>{this.validateResult(value)}</p>
            </div>
        )
    }
}


export default MpPredictor
