import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToDoHome } from './todo-home'


export function ToDoIndex() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className='d-flex justify-content-between p-3 m-1'>
                    <div> <span className='fs-4 fw-bold bi bi-pencil-fill '>Task manager</span></div>
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
                    </Routes>
                </section>

            </BrowserRouter>
        </div>
    )
}