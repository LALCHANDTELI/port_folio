export const Tech_and_soft = () => {

const showTech=()=>{
  document.querySelector(".soft").classList.add("hidden_class")
document.querySelector(".tech").classList.toggle("hidden_class");
}

const showSoft=()=>{
  document.querySelector(".tech").classList.add("hidden_class")
  document.querySelector(".soft").classList.toggle("hidden_class");
}



  return (
    <div className="container-fluid text-light mx-auto row_tech_and_soft text-center row">
      <div className="col-md-12 mb-1 mx-auto">
        <button onClick={showTech} className="bg-warning mr-1 btn_tech  p-2 rounded-circle ">
          Tech
        </button>
        <button onClick={showSoft} className="bg-danger ml-1 p-2 btn_soft  rounded-circle">
          Soft
        </button>
      </div>

      <div className="col-md-12 bg-warning tech tech_and_soft hidden_class  mx-auto">
<table class="table  table-dark table-hover">
    <thead>
      <tr>
        <th colSpan="3">Technologies</th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>REACT</td>
        <td>10/7</td>
      </tr>

      <tr>
        <td>EXPRESS</td>
        <td>10/6</td>
      </tr>


      <tr>
        <td>MONGO</td>
        <td>10/5</td>
      </tr>

      <tr>
        <td>NODE</td>
        <td>10/6</td>
      </tr>


      <tr>
        <td>API</td>
        <td>10/7</td>
      </tr>

      <tr>
        <td>PHP</td>
        <td>10/4</td>
      </tr>


      <tr>
        <td>PYTHON</td>
        <td>10/4</td>
      </tr>


      <tr>
        <td>REACT</td>
        <td>10/5</td>
      </tr>

      <tr>
        <td>REACT</td>
        <td>10/5</td>
      </tr>

      <tr>
        <td>FIREBASE</td>
        <td>10/3</td>
      </tr>

      <tr>
        <td>C</td>
        <td>10/3</td>
      </tr>


      <tr>
        <td>JAVA</td>
        <td>10/3</td>
      </tr>
     
     
    </tbody>
  </table>
      </div>


      <div className="col-md-12 bg-danger soft tech_and_soft hidden_class  mx-auto">
<table class="table  table-dark table-hover">
    <thead>
      <tr>
        <th colSpan="3">Softwares</th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>VISUAL STUDIO CODE</td>
        <td>10/8</td>
      </tr>

      <tr>
        <td>POSTMAN</td>
        <td>10/7</td>
      </tr>


      <tr>
        <td>FIGMA</td>
        <td>10/6</td>
      </tr>

      <tr>
        <td>MONGO COMPASS</td>
        <td>10/6</td>
      </tr>


      <tr>
        <td>GIT AND GITHUB</td>
        <td>10/5</td>
      </tr>

      <tr>
        <td>MS OFFICE</td>
        <td>10/6</td>
      </tr>


      <tr>
        <td>ADOBE PHOTO SHOP</td>
        <td>10/4</td>
      </tr>


      <tr>
        <td>NET BEANS</td>
        <td>10/4</td>
      </tr>

      <tr>
        <td>ECLIPSE</td>
        <td>10/4</td>
      </tr>


      <tr>
        <td>INTELLI J</td>
        <td>10/3</td>
      </tr>

      <tr>
        <td>TURBO C++</td>
        <td>10/3</td>
      </tr>

      <tr>
        <td>ANDROID STUDIO</td>
        <td>10/4</td>
      </tr>

      <tr>
        <td>DEV C++</td>
        <td>10/5</td>
      </tr>

      <tr>
        <td>HEROKU</td>
        <td>10/5</td>
      </tr>


    </tbody>
  </table>
      </div>


    </div>
  );
};
