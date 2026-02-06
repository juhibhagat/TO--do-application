import { useFormik } from "formik"
import axios from 'axios'


export function ToDoRegister(){

const formik = useFormik({
    initialValues : {
        user_id : "",
        user_name :"",
        password : "",
        email : "",
    },
    onSubmit: (user) =>{
        axios.post(`http://localhost:3000/users`, user)
        .then(()=>{
            console.log('registered')
        })
        alert('Register Succesfully...')
    }
})
    return(
        <div className="container-fluid">
            <form className="p-4 w-50" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User_Id</dt>
                      <dd><input type="number" className="form-control" name="user_id"  onChange={formik.handleChange}/></dd>
                    <dt>User_name</dt>
                    <dd><input type="text" className="form-control" name="user_name"  onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="from-control" name="password"  onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" className="from-control" name="email"  onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary w-25" type="submit" > Register</button>
            </form>
            
        </div>
    )
}