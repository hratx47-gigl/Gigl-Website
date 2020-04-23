import React, {Component} from 'react'
import EditField from "./components/EditField"

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
            currentText : ''
            
        }

        this.editField = this.editField.bind(this);
        this.saveAbout = this.saveAbout.bind(this);
        this.saveExperience = this.saveExperience.bind(this);
        this.saveEducation = this.saveEducation.bind(this);
        this.handleOnChange=this.handleOnChange.bind(this);
        this.cancel = this.cancel.bind(this)
    }

    componentDidMount(){
      //get info specifc to the user
    }

    editField(event){
        event.preventDefault();
        console.log(event.target.value)
        let choice = parseInt(event.target.value)
        let text = choice === 0 ? this.state.about : choice === 1? this.state.experience : this.state.education 
        if(choice === 0) this.setState({editAbout : true, editEducation : false, editExperience : false, currentText : text})
        if(choice === 1) this.setState({editExperience : true, editAbout : false, editEducation : false, currentText : text})
        if(choice === 2) this.setState({editEducation : true, editExperience : false, editAbout : false, currentText : text})
        
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
        this.setState({about: text, editAbout : false})
    }
    saveExperience(event){
        event.preventDefault();
        let text = this.state.currentText
        this.setState({experience: text, editExperience : false})
    }
    saveEducation(event){
        event.preventDefault();
        let text = this.state.currentText;
        this.setState({education: text, editEducation : false})
    }

    

    render(){
        return (
            <>
            <div style={{fontFamily:"lalezar"}}>
            <div>
                <div className="bg-dark">
                    <nav className=" container navbar navbar-expand-lg navbar-dark bg-dark">
                        
                        <div className="">
                        <img style={{maxHeight:40}} src="https://i.imgur.com/JWCVUEL.png" alt="Logo" href="/"/>
                        <a className="navbar-brand" href="#home">Gigl</a>
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#logout">Logout</a>
                                </li>
                                </ul>
                            </div>
                    </nav>
                </div>
            
               
            </div>
            <div className="bg-dark">
            <div className="container py-2">
                <div style={{height:50, width:"auto"}}></div>
                <div className="row d-flex align-items-end">
                    <div className="col-md-3 p-0">
                    <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                    </div>    
                    <div className="col-md-4 text-md-center" style={{fontSize:30, color:"white"}}> {this.state.username} </div>
                    <div className="col-md-5 text-md-center">
                        <div className="ml-auto" style={{marginRight:10, fontSize:30, color:"white"}}> {this.state.location} </div>
                    </div>      
                </div>
            </div>

            </div>

            <div style={{height:50}}></div>
                
            <div style={{}} className="container">
                <div >
                    <div className="">
                        <div className="my-4">
                            <h2>About <span></span><button value='0' onClick={this.editField} className="btn btn-outline-secondary btn-sm">Edit</button></h2>
                            {this.state.editAbout === true? <EditField cancel={this.cancel} save={this.saveAbout} onChange={this.handleOnChange} currentText={this.state.currentText}/> : <p> {this.state.about} </p> } 
                        </div>
                        <div className="mt-4">
                            <h2>Experience <span></span><button value='1' onClick={this.editField} className="btn btn-outline-secondary btn-sm">Edit</button></h2>
                            {this.state.editExperience === true? <EditField cancel={this.cancel} save={this.saveExperience} onChange={this.handleOnChange} currentText={this.state.currentText}/> : <p> {this.state.experience} </p> } 
                        </div>
                        <div className="mt-4">
                            <h2>Education <span></span><button value='2' onClick={this.editField} className="btn btn-outline-secondary btn-sm">Edit</button></h2>
                            {this.state.editEducation === true? <EditField cancel={this.cancel} save={this.saveEducation}  onChange={this.handleOnChange} currentText={this.state.currentText}/> : <p> {this.state.education} </p> } 
                        </div>
                    </div>
                </div>
                </div>



            </div>
            </>
        )
    }
}

export default PerformerProfile

// render(){
//     return (
//     <div className="input-group">
//         <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
//         <div className="input-group-append" id="button-addon4">
//             <button className="btn btn-outline-secondary" type="button">Button</button>
//             <button className="btn btn-outline-secondary" type="button">Button</button>
//         </div>
//     </div>
// )
//     }

