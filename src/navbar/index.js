export const navbar=()=>{
    return(
        <nav hidden class="navbar navbar-expand-lg   fixed-top">
                <div class="container">
                  <a href="#" class="profile-nav-photo">
                  
                    <img src="images/my_photo.jpg" />
                    <span class="name">Lal Chand Teli</span>
                  </a>

                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <i class="fas fa-bars fa-lg"></i>
                  </button>

                  <div
                    class="collapse navbar-collapse justify-content-center"
                    id="collapsibleNavbar"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a
                          class="nav-link border btn btn-primary"
                          href="#about"
                        >
                          About me
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link border btn btn-primary"
                          href="#education"
                        >
                          Education
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link border btn btn-primary"
                          href="#skills"
                        >
                          Skills
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link border btn btn-primary"
                          href="#achivements"
                        >
                          Achievements
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link border btn btn-primary"
                          href="#projects"
                        >
                          Projects
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link border btn btn-primary"
                          href="#contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
    )
}
