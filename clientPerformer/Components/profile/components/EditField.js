import React from "react";


const EditField = (props) =>{
    return (
        <div className="input-group">
            <textarea style={{color:"#e4e6eb", backgroundColor:"#6c6c6c"}} onChange={props.onChange} value={props.currentText} type="text" className="form-control" placeholder={props.currentText} aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
            <div className="input-group-append" id="button-addon4">
                <button style={{color:"#34acbc"}} onClick={props.cancel} className="btn btn-outline-secondary" type="button">Cancel</button>
                <button style={{color:"#34acbc"}} onClick={props.save} className="btn btn-outline-secondary" type="button">Save</button>
            </div>
        </div>
    )
}

export default EditField;