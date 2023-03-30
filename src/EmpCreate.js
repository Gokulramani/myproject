import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[Firstname,namechange]=useState("");
    const[Lastname,lastnamechange]=useState("");
    const[email,emailchange]=useState("");
    const[city,citychange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,Firstname,Lastname,email,city,active};
      

      fetch("http://localhost:8000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Student Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>FirstName</label>
                                            <input required value={Firstname} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                        {Firstname.length==0 && validation && <span className="text-danger">Enter the firstname</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>LastName</label>
                                            <input required value={Lastname} onMouseDown={e=>valchange(true)} onChange={e=>lastnamechange(e.target.value)} className="form-control"></input>
                                        {Lastname.length==0 && validation && <span className="text-danger">Enter the lastname</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input value={city} onChange={e=>citychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Submit</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;