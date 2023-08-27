import React, { useRef } from 'react'

const Signin = () => {
    const email = useRef();
    const password = useRef();

    const HandleSignin = ()=>{

    }

    return (
        <>
            <div className="container mt-4 d-flex justify-content-center">
                <div className="card p-3" style={{ width: "50rem" }}>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" ref={email} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">password</label>
                            <input className="form-control" rows="20" ref={password}/>
                        </div>

                        <div className="col-12">
                            <button type="Signin" className="btn btn-primary" onClick={HandleSignin}>POST</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin