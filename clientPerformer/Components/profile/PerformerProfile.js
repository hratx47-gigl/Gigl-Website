import React, {Component} from 'react'
import EditField from "./components/EditField"
import axios from 'axios'
import {withRouter} from "react-router-dom"


class PerformerProfile extends Component{
    constructor(props){
        super(props);

        this.state ={
            username : 'Alex Garcia',
            email : 'email address',
            location : 'Austin',
            venmoName : 'venmo name',
            about : 'Info about the performer',
            experience : 'This is the performer experience',
            education : 'This is the performer education',
            reviews : [],
            photo : "https://content.fortune.com/wp-content/uploads/2020/02/Jeff-Weiner-LinkedIn-Ceo.jpg",
            editAbout: false,
            editEducation: false,
            editExperience: false,
            editLocation: false,
            currentText : ''

        }

        this.editField = this.editField.bind(this);
        this.saveAbout = this.saveAbout.bind(this);
        this.saveExperience = this.saveExperience.bind(this);
        this.saveEducation = this.saveEducation.bind(this);
        this.saveLocation = this.saveLocation.bind(this);
        this.handleOnChange=this.handleOnChange.bind(this);
        this.cancel = this.cancel.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount(){

      axios.get('http://localhost:8000/api/performer/profile') //get info specifc to the user
      .then((response) => {
          console.log(response.data);
          this.setState({
              username: response.data.username,
              education: response.data.education,
              about: response.data.about,
              experience: response.data.experience,
              location: response.data.location
          })
      })
      .catch((error) => {
          console.log(error);
      })
    }

    editField(event){
        event.preventDefault();
        console.log(event.target.value)
        let choice = parseInt(event.target.value)
        let text = choice === 0 ? this.state.about : choice === 1? this.state.experience : choice === 2 ? this.state.education : this.state.location
        if(choice === 0) this.setState({editAbout : true, editEducation : false, editExperience : false, editLocation: false, currentText : text})
        if(choice === 1) this.setState({editExperience : true, editAbout : false, editEducation : false, editLocation: false, currentText : text})
        if(choice === 2) this.setState({editEducation : true, editExperience : false, editAbout : false, editLocation: false, currentText : text})
        if(choice === 3) this.setState({editLocation: true, editExperience : false, editAbout : false, editEducation: false, currentText : text})
    }

    handleOnChange(event){
        this.setState({currentText : event.target.value})

    }

    cancel(event){
        event.preventDefault();
        this.setState({editAbout : false, editEducation : false, editExperience : false})
    }

    saveAbout(event){
        event.preventDefault();
        let text = this.state.currentText
        axios.put("http://localhost:8000/api/performer/profile", {params: { edit : 'about', about : text}})
        .then(data =>{
            this.setState({about: text, editAbout : false})

        })
        .catch(err =>{
            this.setState({editSave:false})
        })

    }
    saveExperience(event){
        event.preventDefault();
        let text = this.state.currentText
        axios.put("http://localhost:8000/api/performer/profile", {params: { edit : 'experience', experience : text}})
        .then(data =>{
            this.setState({experience: text, editExperience : false})
        })
        .catch(err =>{
            this.setState({editExperience:false})
        })


    }
    saveEducation(event){
        event.preventDefault();
        let text = this.state.currentText;
        axios.put("http://localhost:8000/api/performer/profile", {params: { edit : 'education', education : text}})
        .then(data =>{
            this.setState({education: text, editEducation : false})
        })
        .catch(err =>{
            this.setState({editEducation:false})
        })
    }

    saveLocation(event){
        event.preventDefault();
        let text = this.state.currentText;
        axios.put("http://localhost:8000/api/performer/profile", {params: { edit : 'location', location : text}})
        .then(data =>{
            this.setState({location: text, editLocation : false})
        })
        .catch(err =>{
            this.setState({editLocation : false})
        })
    }

    logout(event){

      axios.post("http://localhost:8000/api/performer/signout")
      .then(data => {
         console.log('Bye')
      })
      .catch(err => {
          console.log(err)
      })
    }





    render(){
        return (

            <div style={{fontFamily:"lalezar", backgroundColor:"#212121", paddingBottom:400}}>

            <div>
                <div className="bg-dark">
                    <nav className=" container navbar navbar-expand-lg navbar-dark bg-dark">

                        <div className="">
                        <img style={{maxHeight:40}} src="https://i.imgur.com/JWCVUEL.png" alt="Logo" href="/"/>
                        <a style={{fontSize: 24}} className="navbar-brand" href="#home">Gigl</a>
                        </div>

                        <button className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" style={{fontSize: 20}} href="/performer/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" style={{fontSize: 20}} href="/" onClick={this.logout} >Log Out</a>
                                </li>
                                </ul>
                            </div>
                    </nav>
                </div>


            </div>
            <div className="" style={{backgroundColor:"#212121", backgroundSize:"contain", backgroundRepeat: "no-repeat" , backgroundImage:"url('https://i.imgur.com/zPgoYhe.png')"}}>

            <div className="container-fluid">
                <div style={{height:50, width:"auto"}}></div>
                <div className="row d-flex align-items-end mb-0">
                    <div className="col-md-3 mb-2">
                        <img className="img-fluid img-thumbnail"
                             src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                             alt="">
                        </img>
                    </div>
                    <div className="d-flex flex nowrap txt-sm-h5">
                    <h1 className="col-md-4 text-md-center" style={{color:"#e4e6eb"}}> {this.state.username} </h1>
                    </div>
                    <div className="col-md-3 ml-auto text-md-center text-lg-center">
                        <div className="" style={{color:"#e4e6eb"}}>
                           { this.state.editLocation === true ?
                             <EditField cancel={this.cancel} save={this.saveLocation} onChange={this.handleOnChange} currentText={this.state.currentText}/>
                             : <button onClick={this.editField}
                                       style={{fontSize:25, color:"#e4e6eb"}}
                                       value="3" className="btn btn-outline-drk">
                                          <span style={{color: "#34ACBC"}}>&#9998;  </span>
                                            { this.state.location === ""?
                                              "Add Your Location" : this.state.location
                                            }
                               </button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <div style={{height:50}}></div>

            <div style={{color:"#e4e6eb"}} className="container">
                <div >
                    <div className="">
                        <div className="mt-4 border border-secondary p-4 rounded" style={{color:"#e4e6eb", backgroundColor:"#373737"}}>
                            <h2>About
                                <span>
                                </span>
                                <button style={{color: "#34ACBC"}}
                                        value='0'
                                        onClick={this.editField}
                                        className="btn btn-outline-secondary btn-sm">
                                            Edit
                                </button>
                            </h2>
                            { this.state.editAbout === true?
                                <EditField cancel={this.cancel} save={this.saveAbout} onChange={this.handleOnChange} currentText={this.state.currentText}/>
                                : <p> {this.state.about} </p>
                            }
                        </div>
                        <div className="mt-4 border border-secondary p-4 rounded"style={{color:"#e4e6eb", backgroundColor : "#373737"}}>
                            <h2>Experience
                                <span>
                                </span>
                                <button style={{color: "#34ACBC"}}
                                        value='1'
                                        onClick={this.editField}
                                        className="btn btn-outline-secondary btn-sm">
                                            Edit
                                </button>
                            </h2>
                            { this.state.editExperience === true?
                                <EditField cancel={this.cancel} save={this.saveExperience} onChange={this.handleOnChange} currentText={this.state.currentText}/>
                                 : <p> {this.state.experience} </p>
                            }
                        </div>
                        <div className="mt-4 border border-secondary p-4 rounded" style={{color:"#e4e6eb", backgroundColor:"#373737"}}>
                            <h2>Education
                                <span>
                                </span>
                                <button style={{color: "#34ACBC"}}
                                        value='2'
                                        onClick={this.editField}
                                        className="btn btn-outline-secondary btn-sm">
                                            Edit
                                </button>
                            </h2>
                            { this.state.editEducation === true?
                                <EditField cancel={this.cancel} save={this.saveEducation}  onChange={this.handleOnChange} currentText={this.state.currentText}/>
                                : <p> {this.state.education} </p>
                            }
                        </div>
                    </div>
                </div>
            </div>



            </div>

        )
    }
}

export default withRouter(PerformerProfile);



