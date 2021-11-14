export const restourants = () => {
  return (
    <div class="col-md-4 mt-5 mb-5">
      <div id="myCarousel2" class="carousel slide mb-2" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel2" data-slide-to="1"></li>
          <li data-target="#myCarousel2" data-slide-to="2"></li>
          <li data-target="#myCarousel2" data-slide-to="3"></li>
          <li data-target="#myCarousel2" data-slide-to="4"></li>
          <li data-target="#myCarousel2" data-slide-to="5"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              onClick={() => window.open("images/restourant/1home.png")}
              src="images/restourant/1home.png"
              alt="Los Angeles"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/restourant/2search.png")}
              src="images/restourant/2search.png"
              alt="Chicago"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/restourant/3list.png")}
              src="images/restourant/3list.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/restourant/4restourant.png")}
              src="images/restourant/4restourant.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/restourant/5order.png")}
              src="images/restourant/5order.png"
              alt="New York"
              height="200"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => window.open("images/restourant/6orderlist.png")}
              src="images/restourant/6orderlist.png"
              alt="New York"
              height="200"
            />
          </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel2" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel2" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <div class="projects_details">
       <a className="text-light" href="https://awesomerestaurant.herokuapp.com" target="_blank"> <h5>Restaurant Management</h5></a>
        <p>
        it's a single page application for restaurant management for different cities, using latest technologies
        like node, react, express, mongo, api. you can visit <a className="text-warning" href="https://awesomerestaurant.herokuapp.com" target="_blank">here</a>
    
        </p>
      </div>
    </div>
  );
};
