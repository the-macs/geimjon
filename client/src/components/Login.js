import React, { useState } from 'react'

function Login({ Auth, error }) {
    const [details, setDetails] = useState({
        username: '',
        password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()

        Auth(details)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error !== '') ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor='email'>Username</label>
                        <input type="text" name='username' placeholder="Username" id='username' onKeyUp={e => setDetails({ ...details, username: e.target.value })} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Password</label>
                        <input type="password" name='password' placeholder="Password" id='password' onKeyUp={e => setDetails({ ...details, password: e.target.value })} />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" />
                </div>
            </form>
        </>
    )
}

export default Login