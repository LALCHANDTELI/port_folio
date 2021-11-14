export const insta_clone = () => {
  return (
    <div class="col-md-4 mt-5 mb-5">
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
              onClick={() => window.open("images/insta_clone/1signup.png")}
              src="images/insta_clone/1signup.png"
              alt="Los Angeles"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/insta_clone/2login.png")}
              src="images/insta_clone/2login.png"
              alt="Chicago"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() =>
                window.open("images/insta_clone/3forgotpassword.png")
              }
              src="images/insta_clone/3forgotpassword.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/insta_clone/4home.png")}
              src="images/insta_clone/4home.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/insta_clone/5profile.png")}
              src="images/insta_clone/5profile.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/insta_clone/6following.png")}
              src="images/insta_clone/6following.png"
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
       <a className="text-light" href="https://instagram2o.herokuapp.com" target="_blank"> <h5>INSTA CLONE</h5></a>
        <p>
        It is a clone of Instagram with which we can share our photos,
using latest functionalities G-login, OTP verifications,following and followers, search users by username.
         
        </p>
      </div>
    </div>
  );
};
