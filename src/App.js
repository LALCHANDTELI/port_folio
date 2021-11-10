import "./App.css";
import { latest_work } from "./latest_work";
import { boot_wale } from "./projects/boot_wale";
import { restourants } from "./projects/restourants";
import { insta_clone } from "./projects/insta_clone";
import { Contact } from "./contact";
import { introduction } from "./introduction";
import { social_media } from "./social_media";
import { achievements } from "./achievements";
import { navbar } from "./navbar";
import { profile } from "./profile";
import { what_i_do } from "./what_i_do";
import { footer } from "./footer";
const { useEffect } = require("react");

const App = () => {
  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        document.getElementsByClassName("one_words")[0].innerHTML =
          "<span>CREATIVE CODER<i class='fa fa-code fa-lg'></i></span>";
      }, 1500);
      setTimeout(() => {
        document.getElementsByClassName("one_words")[0].innerHTML =
          "<span><i class='fa fa-trophy fa-lg'></i>SELF MOTIVATED</span>";
      }, 3000);
      setTimeout(() => {
        document.getElementsByClassName("one_words")[0].innerHTML =
          "<span>I<i class='fa fa-heart fa-lg'></i>PROBLEM-SOLVING</span>";
      }, 4500);
    }, 4600);

    setInterval(() => {
      let nav_tag = document.getElementsByTagName("nav")[0];
      if (window.pageYOffset >= window.innerHeight / 2) {
        nav_tag.removeAttribute("hidden");
      } else nav_tag.setAttribute("hidden", "");
    }, 100);

    let my_skills = document.querySelector("#my_skills");

    my_skills.addEventListener("click", () => {
      document.querySelector(".my_skills").classList.toggle("hidden_class");
    });
  }, []);

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="row first-row">
              {navbar()}

              {profile()}
            </div>
          </div>

          {introduction()}

          {what_i_do()}

          {social_media()}

          {achievements()}

          {latest_work()}

          <div id="projects" class="col-sm-12">
            <div class="row seventh_row">
              <div class="col-md-12 mb-5">
                <h1>All projects</h1>
                <p>these all projects are built by myself</p>
              </div>

              {boot_wale()}

              {restourants()}

              {insta_clone()}
            </div>
          </div>

          {Contact()}
        </div>
      </div>

      {footer()}
    </>
  );
};

export default App;
