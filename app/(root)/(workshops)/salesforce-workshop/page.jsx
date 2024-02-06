import Head from "next/head";
// eslint-disable-next-line no-unused-vars
import styles from "./style.css";

export default function WorkshopPage() {
  return (
    <>
      <Head>
        <title>SF-workshop | Coding Commando</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join our Salesforce One-Day Workshop and master the fundamentals of Salesforce CRM. Learn from industry experts, explore hands-on exercises, and accelerate your career in Salesforce administration and customization."
        />
        <meta
          name="keywords"
          content="Salesforce workshop, Salesforce training, CRM fundamentals, Salesforce one day course, Salesforce administration, Salesforce customization"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;0,800;1,500;1,700;1,800&display=swap"
          rel="stylesheet"
        /> */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/workshop-img/tick.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* <link rel="stylesheet" href="./style.css" /> */}
      </Head>
      <header>
        <div className="parent_header">
          <div className="top_head">
            <p>Unleash Your Potential:</p>
          </div>
          <div>
            <p>
              <span className="salesforce_career">Salesforce</span>
              <span>Career Kickstart Workshop</span>
            </p>
          </div>
        </div>
        <div className="child_header">
          <p>
            Master the salesforce domain with industry expert{" "}
            <span className="salesforce_career">Prateek Prasoon!</span>
          </p>
        </div>
      </header>
      <section>
        <div className="reserve_seat">
          <div className="reserve_seat_in">
            <p>
              Grab Your Spot for ₹399 <span>₹1499</span>
            </p>
          </div>
        </div>
      </section>
      <section className="limited">
        <div className="limited_seat">
          <div className="photo_parent">
            <div className="photo">
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/MlRDdR0j0wE?si=ZGaNeBvQpqXj2sJh"
              ></iframe>
            </div>
          </div>
          <div className="information">
            <div className="introduction">
              <p className="intro">Introduced By</p>
              <p className="name">Prateek Prasoon</p>
              <p className="founder">
                Salesforce Architect, Entrepreneur at CloudPrism
              </p>
            </div>
            <div className="date">
              <p>26 Sept, 2023</p>
              <p>11:00 AM - 12:00 PM</p>
            </div>
            <div className="availability">
              <p>Limited seats available</p>
            </div>
          </div>
        </div>
      </section>
      <section className="program">
        <div className="program_in">
          <div className="program_header">
            <p>Who is eligible for this workshop?</p>
          </div>
          <div className="grids">
            <div className="grids_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <span>
                <b>Job Seekers in IT:</b> Newcomers to the IT industry actively
                seeking job opportunities.
              </span>
            </div>
            <div className="grids_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <span>
                <b>Final-Year Students:</b> Students in their last year looking
                to gain expertise in high-demand skills.{" "}
              </span>
            </div>
            <div className="grids_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <span>
                <b>Career Changers:</b> Individuals with gaps in their IT
                career, actively pursuing opportunities in Salesforce
              </span>
            </div>
            <div className="grids_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <span>
                <b>Returning Professionals:</b> Housewives and others eager to
                re-enter the IT industry and advance their careers.
              </span>
            </div>
          </div>
          <div className="program_bottom">
            <p>
              Kickstart Your Salesforce Career at Just ₹399 <span>₹1499</span>
            </p>
          </div>
        </div>
      </section>
      <section className="benefit_parent">
        <div className="benefit_parent_in">
          <div className="benifits">
            <p>Benefits</p>
          </div>
          <div className="benifits_img">
            <div className="images">
              <img
                className="benefits_img_in"
                src="/assets/workshop-img/pen.png"
                alt="Coding Commando"
              />
              <p className="image_content">
                Learn the foundations of Salesforce from scratch
              </p>
            </div>
            <div className="images">
              <img
                className="benefits_img_in"
                src="/assets/workshop-img/start.png"
                alt="Coding Commando"
              />
              <p className="image_content">
                Understand the career opportunities in the Salesforce ecosystem
              </p>
            </div>
            <div className="images">
              <img
                className="benefits_img_bulb"
                src="/assets/workshop-img/Bulb.png"
                alt="Coding Commando"
              />
              <p className="image_content">
                Gain insights from real-world industry experiences
              </p>
            </div>
            <div className="images">
              <img
                className="benefits_img_in"
                src="/assets/workshop-img/video.png"
                alt="Coding Commando"
              />
              <p className="image_content">
                Interactive Q&A session to get your queries answered
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="agenda">
        <div className="agenda_box">
          <div>
            <p className="agenda_text">
              What will be covered in this workshop?
            </p>
          </div>
          <div className="agenda_in">
            <div className="agenda_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <p>
                <b>Salesforce Basics:</b> Understand the fundamentals of
                Salesforce.
              </p>
            </div>
            <div className="agenda_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <p>
                <b>IT Career Strategies:</b> Learn how to build a successful IT
                career.{" "}
              </p>
            </div>
            <div className="agenda_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <p>
                <b>Interactive Q&A:</b> Engage in live discussions and ask
                questions.
              </p>
            </div>
            <div className="agenda_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <p>
                <b>High-Paying IT Jobs:</b> Discover the path to high-paying
                roles.
              </p>
            </div>
            <div className="agenda_content">
              <img src="/assets/workshop-img/tick.png" alt="Coding Commando" />
              <p>
                <b>Salesforce Career Path:</b> Explore Salesforce as a career
                choice.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="instructor">
        <div className="instructor_in">
          <div>
            <p className="instructor_text">
              Meet Your <span>Instructor</span>
            </p>
          </div>
          <div className="indstructor_img">
            <div className="instructot_img_in">
              <img
                src="/assets/workshop-img/Prateek.png"
                alt="Prateek Prasoon"
              />
            </div>
            <div className="img_text">
              <p className="instructor_name">Prateek Prasoon</p>
              <p className="instructor_info">
                Prateek Prasoon, founder of Coding Commando, brings years of
                expertise to the table with a Salesforce journey dating back to
                2012. Since 2016, he has successfully trained over a thousand
                individuals, contributing significantly to their skill
                development in the Salesforce domain.
              </p>
              <br />
              <p className="instructor_info">
                In 2017, he founded CloudPrism as a visionary force with a dual
                purpose – to nurture the brilliance of young minds and to
                illuminate the path for Salesforce enthusiasts. Today, it is
                thriving with 3 successful branches around the globe. Now with a
                mission to bridge the skills gap in smaller cities and make
                natives job ready, he has launched Coding Commando.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="faq_in">
          <div className="faq_head">
            <p>Frequently Asked Questions</p>
          </div>
          <div className="faq_section">
            <div className="faq_main_section">
              <button className="accordion">
                How can I join the workshop?{" "}
              </button>
              <div className="panel">
                <ul>
                  <li>
                    To join, simply visit our website and click on the
                    {"Register"} button for the workshop. Follow the
                    instructions to complete the registration process.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq_main_section">
              <button className="accordion">Is this a FREE Webinar?</button>
              <div className="panel">
                <ul>
                  <li>
                    No, this is not a free webinar. There is a fee associated
                    with the workshop, which covers access to all the sessions,
                    course materials, and support.
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq_main_section">
              <button className="accordion">
                Will I get the recording of the workshop?
              </button>
              <div className="panel">
                <ul>
                  <li>
                    Yes, recordings of the workshop sessions will be made
                    available to participants. You&apos;ll have access to these
                    recordings for a certain period after the workshop ends.
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq_main_section">
              <button className="accordion">
                Will it be in English or Hindi or both?
              </button>
              <div className="panel">
                <ul>
                  <li>
                    It will be a mix of Hindi plus English language so that
                    everybody can take advantage of the same.
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq_main_section">
              <button className="accordion">
                Can I ask questions during the workshop?
              </button>
              <div className="panel">
                <ul>
                  <li>
                    Absolutely! We encourage active participation. You can ask
                    questions and interact with the instructors during
                    designated Q&A sessions or through chat, depending on the
                    format of the workshop.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="register_btn">
        <section>
          <div className="reserve_seat">
            <div className="reserve_seat_in">
              <p>Register Now Only For ₹399/-</p>
            </div>
          </div>
        </section>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                var acc = document.getElementsByClassName("accordion");
                var i;
                
                for (i = 0; i < acc.length; i++) {
                    acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                    });
                }
            `,
        }}
      />
    </>
  );
}
