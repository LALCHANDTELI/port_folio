export const latest_work=()=>{
    return (
        <div class="col-sm-12">
        <div class="row sixth_row">
          <div class="col-md-12">
            <h1>My latest work</h1>
            <p>
              <i class="fas fa-smile mr-3 fa-lg"></i>better than before
              <i class="fas fa-smile ml-3 fa-lg"></i>
            </p>
          </div>

          <div class="col-md-6">
            <div
              id="myCarousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <ul class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                  onClick={()=>window.open("images/insta_clone/1signup.png")}
                    src="images/insta_clone/1signup.png"
                    alt="Los Angeles"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("images/insta_clone/2login.png")}
                    src="images/insta_clone/2login.png"
                    alt="Chicago"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("images/insta_clone/3forgotpassword.png")}
                    src="images/insta_clone/3forgotpassword.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("images/insta_clone/4home.png")}
                    src="images/insta_clone/4home.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("images/insta_clone/5profile.png")}
                    src="images/insta_clone/5profile.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("images/insta_clone/6following.png")}
                    src="images/insta_clone/6following.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
              </div>

              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>

          <div class="col-md-6 mt-3">
            <h1>INSTAGRAM CLONE</h1>

            <p className="mb-5">
            It is a clone of Instagram with which we can share our photos by adding many cool functions,
Like signup and login with google, forgot password by email otp,
Change profile photo, share photo, follow and follow, search users,
In which new technologies have been used like mongo, react, express node, api, you can visit insta_clone here
            </p>


          
              <h6>FRONT END</h6>
              <p>react</p>

              <h6>BACK END</h6>
              <p>express</p>

              <h6>DATABASE</h6>
              <p>mongo db</p>

              

            
          </div>
        </div>
      </div>
    )
}

