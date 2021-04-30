import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <form className="form">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="name"></input>
                </div>

                <div className="form-group">
                    <label>Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            
        </div>
    )
}

export default Contact
