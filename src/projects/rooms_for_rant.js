export const rooms_for_rant = () => {
    return (
      <div class="col-md-4 mt-5 mb-5">
        <div id="myCarousel4" class="carousel slide mb-2" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#myCarousel4" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel4" data-slide-to="1"></li>
            <li data-target="#myCarousel4" data-slide-to="2"></li>
            <li data-target="#myCarousel4" data-slide-to="3"></li>
            <li data-target="#myCarousel4" data-slide-to="4"></li>
            <li data-target="#myCarousel4" data-slide-to="5"></li>
          </ul>
  
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                onClick={() => window.open("images/rooms_for_rent/1home.png")}
                src="images/rooms_for_rent/1home.png"
                alt="Los Angeles"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                onClick={() => window.open("images/rooms_for_rent/2home.png")}
                src="images/rooms_for_rent/2home.png"
                alt="Chicago"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                onClick={() =>
                  window.open("images/rooms_for_rent/3signup.png")
                }
                src="images/rooms_for_rent/3signup.png"
                alt="New York"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                onClick={() => window.open("images/rooms_for_rent/4login.png")}
                src="images/rooms_for_rent/4login.png"
                alt="New York"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                onClick={() => window.open("images/rooms_for_rent/5forgot_password.png")}
                src="images/rooms_for_rent/5forgot_password.png"
                alt="New York"
                height="200"
              />
            </div>
            <div class="carousel-item">
              <img
                onClick={() => window.open("images/rooms_for_rent/6admin.png")}
                src="images/rooms_for_rent/6admin.png"
                alt="New York"
                height="200"
              />
            </div>
          </div>
  
          <a class="carousel-control-prev" href="#myCarousel4" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#myCarousel4" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        <div class="projects_details">
         <a className="text-light" href="https://privaterepo.000webhostapp.com/r4r.php" target="_blank"> <h5>ROOMS FOR RENT</h5></a>
          <p>
          This Site For Those Peoples That Are Away From Home And Parents During Studying and Work.
And They Need Immediately Secure Clean And Silence Environment Room For Rent.
           
          </p>
        </div>
      </div>
    );
  };
  
