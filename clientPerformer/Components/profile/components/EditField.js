import React from "react";


const EditField = (props) =>{

console.log(props.currentText)

    
    return (
        <div className="input-group">
            <input onChange={props.onChange} value={props.currentText} type="text" className="form-control" placeholder={props.currentText} aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
            <div className="input-group-append" id="button-addon4">
                <button onClick={props.cancel} className="btn btn-outline-secondary" type="button">Cancel</button>
                <button onClick={props.save} className="btn btn-outline-secondary" type="button">Save</button>
            </div>
        </div>
    )
        





}

export default EditField;