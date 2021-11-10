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
                  onClick={()=>window.open("Images/insta_clone/1signup.png")}
                    src="Images/insta_clone/1signup.png"
                    alt="Los Angeles"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("Images/insta_clone/2login.png")}
                    src="Images/insta_clone/2login.png"
                    alt="Chicago"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("Images/insta_clone/3forgotpassword.png")}
                    src="Images/insta_clone/3forgotpassword.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("Images/insta_clone/4home.png")}
                    src="Images/insta_clone/4home.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("Images/insta_clone/5profile.png")}
                    src="Images/insta_clone/5profile.png"
                    alt="New York"
                    width="1100"
                    height="500"
                  />
                </div>
                <div class="carousel-item">
                  <img
                   onClick={()=>window.open("Images/insta_clone/6following.png")}
                    src="Images/insta_clone/6following.png"
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

          <div class="col-md-6">
            <h1>rooms for rant develop in php</h1>
            <ul>
              <li>fghjkjhgxfgg:sfdgfhgjhkjhg</li>
              <li>fghjkjhgxfgg:sfdgfhgjhkjhg</li>
              <li>fghjkjhgxfgg:sfdgfhgjhkjhg</li>
              <li>fghjkjhgxfgg:sfdgfhgjhkjhg</li>
              <li>fghjkjhgxfgg:sfdgfhgjhkjhg</li>
              <li>fghjkjhgxfgg:sfdgfhgjhkjhg</li>
            </ul>

            <p>
              fdgfhgjhkjghfdfsagfhjh gfddasfdgfhhgfsdasfdgf
              hjghfgdfsdgfhgjhkjhgfsd hfdsfdhfjkjhfdgsfadgf
              gfddasfdgfhhgfsdasfdgf hjghfgdfsdgfhgjhkjhgfsd
              hfdsfdhfjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf
              hjghfgdfsdgfhgjhkjhgfsd hfdsfdhfjkjhfdgsfadgf
              gfddasfdgfhhgfsdasfdgffjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf
              hjghfgdfsdgfhgjhkjhgfsd hfdsfdhfjkjhfdgsfadgf
              gfddasfdgfhhgfsdasfdgffjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf
            </p>
          </div>
        </div>
      </div>
    )
}

