export const port_polio = () => {
  return (
    <div class="col-md-4 mt-5 mb-5">
      <div id="myCarousel5" class="carousel slide mb-2" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#myCarousel5" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel5" data-slide-to="1"></li>
          <li data-target="#myCarousel5" data-slide-to="2"></li>
          <li data-target="#myCarousel5" data-slide-to="3"></li>
          <li data-target="#myCarousel5" data-slide-to="4"></li>
          <li data-target="#myCarousel5" data-slide-to="5"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              onClick={() => window.open("images/port_polio/1home.png")}
              src="images/port_polio/1home.png"
              alt="Los Angeles"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/2info.png")}
              src="images/port_polio/2info.png"
              alt="Chicago"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/3do.png")}
              src="images/port_polio/3do.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/4certificates.png")}
              src="images/port_polio/4certificates.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/5work.png")}
              src="images/port_polio/5work.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/6projects.png")}
              src="images/port_polio/6projects.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/7tech.png")}
              src="images/port_polio/7tech.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/port_polio/8contact.png")}
              src="images/port_polio/8contact.png"
              alt="New York"
              height="200"
            />
          </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel5" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel5" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <div class="projects_details">
        <a className="text-light" href="/">
          <h3>PORT POLIO</h3>
        </a>
        <p>
          Here all the information about me is available like about my studies,
          about my school and college, my projects, my skills, certificates, my
          upcoming projects and my contact.
        </p>
      </div>
    </div>
  );
};
