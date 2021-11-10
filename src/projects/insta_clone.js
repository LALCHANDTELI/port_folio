export const insta_clone = () => {
  return (
    <div class="col-md-4">
      <div id="myCarousel3" class="carousel slide mb-2" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#myCarousel3" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel3" data-slide-to="1"></li>
          <li data-target="#myCarousel3" data-slide-to="2"></li>
          <li data-target="#myCarousel3" data-slide-to="3"></li>
          <li data-target="#myCarousel3" data-slide-to="4"></li>
          <li data-target="#myCarousel3" data-slide-to="5"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              onClick={() => window.open("Images/insta_clone/1signup.png")}
              src="Images/insta_clone/1signup.png"
              alt="Los Angeles"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/insta_clone/2login.png")}
              src="Images/insta_clone/2login.png"
              alt="Chicago"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() =>
                window.open("Images/insta_clone/3forgotpassword.png")
              }
              src="Images/insta_clone/3forgotpassword.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/insta_clone/4home.png")}
              src="Images/insta_clone/4home.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/insta_clone/5profile.png")}
              src="Images/insta_clone/5profile.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/insta_clone/6following.png")}
              src="Images/insta_clone/6following.png"
              alt="New York"
              height="200"
            />
          </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel3" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel3" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <div class="projects_details">
        <h3>Restaurant Management</h3>
        <p>
          fdgfhgjhkjghfdfsagfhjh gfddasfdgfhhgfsdasfdgf hjghfgdfsdgfhgjhkjhgfsd
          hfdsfdhfjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf...
          <span class="more_text hidden_class">
            I built a " Restaurant Management " app as a final project of my 6
            months full stack web developer Internship at Edureka, using REACT,
            EXPRESS, MongoDB, NODE.
          </span>
          <a onclick="SeeMore()" class="btnSeeMore">
            see more
          </a>
        </p>
      </div>
    </div>
  );
};
