export const upcoming_projects=()=>{


const toggle=()=>{
document.querySelector(".upcoming_project_list_box").classList.toggle("hidden_class")
}



    return(
       <>
       <button onClick={toggle} className="p-1 upcoming_project">Under Construction Projects<br/></button>
            <div className="btn_upcoming_project">
            <i onClick={toggle} class="fas fa-2x btn_arrow  fa-arrow-circle-down"></i>
            </div>
            
            <div className="hidden_class upcoming_project_list_box   text-light">
            
            <div class="row p-3 container  rounded upcoming_project_list">
    <div class="col-md-3 p-1 border">Resume Builder</div>
    <div class="col-md-3 p-1 border">Vehicle Tracker</div>
  </div>
            </div>
       </>
    )
}
