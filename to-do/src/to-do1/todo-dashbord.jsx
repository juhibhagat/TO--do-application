export function ToDoDashboard(){
    return(
        <div className="continer-fluid">
            <div className="row">
                <div className="col-2">
                    <nav>
                        <div className="bi bi-pencil">Task</div>
                        <div className="bi bi-calendar-date my-4"> Calendar</div>
                        <div className="bi bi-folder">Categories</div>
                    </nav>

                </div>
                <div className="col-10 mt-4 ">
                     <div className="d-flex justify-content-between align-content-center">
                        <div className="w-50">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="search appointment" />
                             <button className="btn btn-secondary  bi bi-search"></button>
                        </div>
                        </div>
                        <div>
                             <button className="btn btn-primary bi bi-plus mx-2">Add New</button>
                              <button className="btn btn-success bi bi-person-circle"> Signout</button>
                        </div>
                     </div>
                </div>
                <div role="filter mx-3 bg-light">
                    <div className="d-flex justify-content-baseline align-content-center">
                   <button className="btn bi bi-funnel"> Filter</button>     
                    <button className="btn bi bi-sort-alpha-down"> Filter</button> 
                    <select className="from-select w-25">
                       <option>Select Date</option>    
                    </select>  
                    </div>

                </div>

            </div>


        </div>
    )
}