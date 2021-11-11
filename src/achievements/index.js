export const achievements = () => {
  return (
    <div id="achivements" class="col-sm-12">
      <div class="row fivth_row">
        <div class="col-md-12">
          <h1>Achievements</h1>
          <h5>
            all achievements & certificates are achieved by the registered
            organizations
          </h5>
        </div>

        <div class="col-md-4">
          <img
            onClick={() =>
              window.open(
                "Certificates/FULL-STACK-WEB-DEVELOPMENT CERTIFICATE FROM EDUREKA-1.jpg"
              )
            }
            src="Certificates/FULL-STACK-WEB-DEVELOPMENT CERTIFICATE FROM EDUREKA-1.jpg"
          />
          <div class="certificates_details">
            <h3>FULL STACK WEB DEVELOPMENT</h3>
            <p>
              This is a "Full Stack Web Developer" course from edureka and I got
              the Super Intern certificate.
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <img
            onClick={() =>
              window.open(
                "Certificates/MERN STACK MASTER COURSE - BUILDING YOUR OWN INSTAGRAM CERTIFICATE FROM GREAT LEARNING-1.jpg"
              )
            }
            src="Certificates/MERN STACK MASTER COURSE - BUILDING YOUR OWN INSTAGRAM CERTIFICATE FROM GREAT LEARNING-1.jpg"
          />
          <div class="certificates_details">
            <h3>MERN STACK MASTER COURSE</h3>
            <p>
              this is a MERN STACK MASTER course from UDEMY - during this this
              course i learn a lot of new thinks.
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <img
            onClick={() =>
              window.open(
                "Certificates/AWS CERTIFICATE FROM GREAT LEARNING-1.jpg"
              )
            }
            src="Certificates/AWS CERTIFICATE FROM GREAT LEARNING-1.jpg"
          />
          <div class="certificates_details">
            <h3>AWS FOR BEGINNERS</h3>
            <p>
              This course from GREAT LEARNING, during this course i learn about
              AWS services and basic concept of AWS.
            </p>
          </div>
        </div>

        <div className="col-md-4 mx-auto">
          <img
            onClick={() =>
              window.open(
                "Certificates/AWS CERTIFICATE FROM GREAT LEARNING-1.jpg"
              )
            }
            src="Certificates/AWS CERTIFICATE FROM GREAT LEARNING-1.jpg"
          />
          <div class="certificates_details">
            <h3>React Training</h3>
            <p>
            It's six weeks online training on React from Internshala
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
