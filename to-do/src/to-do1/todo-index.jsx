import { BrowserRouter,Route,Routes ,Link } from 'react-router-dom'
import { ToDoHome } from './todo-home'
import { ToDoRegister } from './todo-register'


export function ToDoIndex() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className='d-flex justify-content-between p-3 m-1'>
                    <div> <span className='fs-4 fw-bold bi bi-pencil-fill  '> <Link to="/">TaskBar</Link></span></div>
                    <div>
                        <button className='btn'>Features</button>
                        <button className='btn'>Pricing</button>
                        <button className='btn mx-2'>About</button>
                        <button className=' btn btn-primary'>Get started</button>
                    </div>
                </header>
                <section className='mt-2'>
                    <Routes>
                        <Route path="/" element={<ToDoHome/>} />
                        <Route path="/register" element={<ToDoRegister/>} />
                    </Routes>
                </section>

            </BrowserRouter>
        </div>
    )
}