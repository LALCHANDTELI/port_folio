import { skills } from "../skills"

export const introduction=()=> {
    return (
        <div id="about" class="container col-sm-12">
            <div class="row second-row">
              <div class="image_3 col-md-3">
                <img src="images/my_photo.jpg" />
              </div>

              <div class="col-md-5">
                <span>
                  <h3>Lal Chand Teli</h3>
                  <p>
                    hello, there I am a full time WEB DEVELOPER,
                    <br />
                    I'm pursuing my B Tech from SANGAM UNIVERSITY in the computer
                    science. Right now, I am in the seventh semester.
                    I have three years of experience in web development. I
                    already developed many websites like - SHOPPING SITE, RESTAURANT MANAGEMENT,
                    INSTAGRAM CLONE, FORT-FOLIO SITE.
                    <br />
                    <br />
                    I AM SPECIALIZED IN MERN STACK WEB DEVELOPER.
                    I can build responsive single-page applications like zomato,
                    oyo, make my trip, live chat, shopping site using the latest
                    technology REACT, EXPRESS, MongoDB, NODE, ADVANCE
                    JAVASCRIPT, BOOTSTRAP, PHP, SQL, PYTHON a lot of technologies.
                    <br />I got many certificates in web development from
                    different platforms, and I also have 6 months of virtual
                    Internship experience with 'EDUREKA' and I was the super
                    intern here.
                  </p>
                </span>
              </div>

              <div id="education" class="col-md-4">
                <div class="academic_box">
                  <span class="year">2016</span>
                  <span class="flag">
                    <i class="fas fa-flag fa-lg"></i>
                  </span>
                  <span class="class">Matriculation</span>
                  <span>
                    <p>
                      from Board of Secondary Education, Rajasthan with first
                      division
                    </p>
                  </span>
                </div>

                <div class="academic_box">
                  <span class="year">2018</span>
                  <span class="flag">
                    <i class="fas fa-flag fa-lg"></i>
                  </span>
                  <span class="class">Intermediate</span>
                  <span>
                    <p>
                      from Board of Secondary Education, Rajasthan with 'A'
                      grade
                    </p>
                  </span>
                </div>

                <div id="skills" class="academic_box">
                  <span class="year">2018</span>
                  <span class="flag">
                    <i class="fas fa-flag fa-lg"></i>
                  </span>
                  <span class="class">College Joining</span>
                  <span>
                    <p>
                      I'm pursuing B Tech from 'SANGAM UNIVERSITY'<br/>(currently in seventh semester)
                    </p>
                  </span>
                </div>
              </div>

              <div id="my_skills">
                <label>
                  <i class="fas fa-arrow-circle-down"></i>check my skills
                </label>
              </div>
              
              
            </div>

           {skills()}
          </div>
    )
}
