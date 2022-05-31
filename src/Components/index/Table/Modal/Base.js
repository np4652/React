import React, {useState} from "react";

function Base(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    e.preventDefault();
    handleClose();
  }
    return(
        <div>
             <div className="col-md-2">
                    <div className="position-absolute top-center">
                      <button type="button" className="btn btn-primary" onClick={handleShow}  >Click Here</button>
                    </div>
                  </div>
        </div>
    )
};

export default Base;