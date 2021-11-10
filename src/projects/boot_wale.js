import React from "react";

export const boot_wale = () => {
  return (
    <div class="col-md-4">
      <div id="myCarousel1" class="carousel slide mb-2" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel1" data-slide-to="1"></li>
          <li data-target="#myCarousel1" data-slide-to="2"></li>
          <li data-target="#myCarousel1" data-slide-to="3"></li>
          <li data-target="#myCarousel1" data-slide-to="4"></li>
          <li data-target="#myCarousel1" data-slide-to="5"></li>
          <li data-target="#myCarousel1" data-slide-to="6"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              onClick={() => window.open("Images/boot_wale/1login.png")}
              src="Images/boot_wale/1login.png"
              alt="Los Angeles"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() =>
                window.open("Images/boot_wale/2forgotpassword.png")
              }
              src="Images/boot_wale/2forgotpassword.png"
              alt="Chicago"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/boot_wale/3admin.png")}
              src="Images/boot_wale/3admin.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/boot_wale/4collections.png")}
              src="Images/boot_wale/4collections.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/boot_wale/5update.png")}
              src="Images/boot_wale/5update.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/boot_wale/6cart.png")}
              src="Images/boot_wale/6cart.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("Images/boot_wale/7filtter.png")}
              src="Images/boot_wale/7filtter.png"
              alt="New York"
              height="200"
            />
          </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel1" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel1" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <div class="projects_details">
        <h3>rooms for rant </h3>
        <p>
          fdgfhgjhkjghfdfsagfhjh gfddasfdgfhhgfsdasfdgf hjghfgdfsdgfhgjhkjhgfsd
          hfdsfdhfjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf...
          <span class="more_text hidden_class">
            hjghfgdfsdgfhgjhkjhgfsd hfdsfdhfjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf
            hjghfgdfsdgfhgjhkjhgfsd hfdsfdhfjkjhfdgsfadgf
            gfddasfdgfhhgfsdasfdgffjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf
            hjghfgdfsdgfhgjhkjhgfsd hfdsfdhfjkjhfdgsfadgf
            gfddasfdgfhhgfsdasfdgffjkjhfdgsfadgf gfddasfdgfhhgfsdasfdgf
          </span>
          <a onclick="SeeMore()" class="btnSeeMore">
            see more
          </a>
        </p>
      </div>
    </div>
  );
};
