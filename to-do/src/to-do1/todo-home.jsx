
import { ToDologin } from "./todo-login";
import { ToDoRegister } from "./todo-register";
export function ToDoHome() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="text-center mt-3 fs-1">
                        <span className="fw-bold mt-5 fs-1 text-primary"> Master your Day ,</span>
                        <br />
                        <span > One Task at a Time  </span>
                        <div className="border border-3 border-dark">
                            <img src="appointment.jpg" width="100%" height="100%" alt="appointment" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mt-5 ms-5">
                        <ul className=" nav nav-tabs">
                            <li className="nav-item"> <a className="nav-link-active">UserLogin</a></li>
                            <li className="nav-item"><a className="nav-link">Register</a></li>
                        </ul>
                      
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane active" id="login">
                            <ToDologin/> 
                        </div>
                        <div className="tab-pane" id="register">
                            <ToDoRegister/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}