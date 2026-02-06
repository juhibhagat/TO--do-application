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
        axios.post(`http://localhost/user`, user)
        .then(()=>{
            console.log('registered')
        })
        alert('Register Succesfully...')
    }
})
    return(
        <div className="container-fluid">
            <from className="p-4 w-50" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User_Id</dt>
                    <dd><input type="number" className="from-control" name="user_id"  onSubmit={formik.handleChange}/></dd>
                    <dt>User_name</dt>
                    <dd><input type="text" className="from-control" name="user_name"  onSubmit={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="from-control" name="password"  onSubmit={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" className="from-control" name="email"  onSubmit={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary w-25" type="submit" > Register</button>
            </from>
            
        </div>
    )
}