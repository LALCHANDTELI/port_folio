export const profile=()=>{
    return(
        <div class="col-sm-12 parent_div">
                <div class="child_div">
                  <div class="profile-photo">
                    <img src="Images/my_photo.jpg" />
                  </div>

                  <div class="social-accounts">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/lalchand.teli.507/"
                          target="_blank"
                        >
                          <i class="fa fa-facebook fa-lg"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/teli_chand"
                          target="_blank"
                        >
                          <i class="fa fa-twitter fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                    <h1>Lal Chand Teli</h1>
                    <ul>
                      <li>
                        <a
                          href="mailto:lalchandteli13@gmail.com"
                          target="_blank"
                        >
                          <i class="fa fa-envelope fa-lg"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/lal-chand-teli-758961170/"
                          target="_blank"
                        >
                          <i class="fa fa-linkedin fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="first_row_second_part">
                    <div class="one_words">
                      <span>
                        <i class="fa fa-users fa-lg"></i>TEAM WORK
                      </span>
                    </div>

                    <div>
                      <span>
                        <a href="#about">
                          <button class="btn_know_me">
                            <i class="fa fa-bookmark"></i>Know me better
                          </button>
                        </a>
                      </span>
                      <span>
                        <a href="#contact">
                          <button class="btn_hire_me">
                            <i class="fa fa-location-arrow"></i>Hire me
                          </button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
    )
}