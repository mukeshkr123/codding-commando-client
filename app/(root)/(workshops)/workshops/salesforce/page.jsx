"use client";

import DetailsDialogBox from "@/components/workshops/Details-dialog-box";
// eslint-disable-next-line no-unused-vars
import styles from "./style.css";
import { useEffect, useState } from "react";
import apiClient from "lib/api-client";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function WorkshopPage() {
  const [workshopData, setWorkshopData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiClient.get(`${pathname}`);
        setWorkshopData(data?.workshop);
      } catch (error) {
        toast.error("Something went wrong");
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-purple-950" />
      </div>
    );
  }

  return (
    <>
      <header>
        <div className="parent_header">
          <div className="top_head">
            <p>Unleash Your Potential:</p>
          </div>
          <div>
            <p>
              <span className="salesforce_career">Salesforce</span>
              <span> Career Kickstart Workshop</span>
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
            <DetailsDialogBox pathname={pathname}>
              <p>
                Grab Your Spot for ₹{workshopData?.final_price}{" "}
                <span>₹{workshopData?.original_price}</span>
              </p>
            </DetailsDialogBox>
          </div>
        </div>
      </section>

      <section className="limited">
        <div className="limited_seat">
          <div className="photo_parent">
            <div className="">
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/MlRDdR0j0wE?si=ZGaNeBvQpqXj2sJh"
              ></iframe>
            </div>
          </div>
          <div className="information">
            <div className="">
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
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="grids_content">
                <img
                  src="/assets/workshop-img/tick.png"
                  alt="Coding Commando"
                />
                <span>
                  <b>{criteria.title}</b> {criteria.description}
                </span>
              </div>
            ))}
          </div>
          <div className="program_bottom">
            <p>
              Kickstart Your Salesforce Career at Just ₹
              {workshopData?.final_price}{" "}
              <span>₹{workshopData?.original_price}</span>
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
            {benefitItems.map((item, index) => (
              <div key={index} className="images">
                <img
                  className={
                    item.image.includes("Bulb")
                      ? "benefits_img_bulb"
                      : "benefits_img_in"
                  }
                  src={item.image}
                  alt="Coding Commando"
                />
                <p className="image_content">{item.text}</p>
              </div>
            ))}
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
            {agendaItems.map((item, index) => (
              <div key={index} className="agenda_content">
                <img
                  src="/assets/workshop-img/tick.png"
                  alt="Coding Commando"
                />
                <p>
                  <b>{item.title}</b> {item.description}
                </p>
              </div>
            ))}
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
            {faqItems.map((item, index) => (
              <div key={index} className="">
                <button className="accordion">{item.question}</button>
                <div className="panel">
                  <ul>
                    <li>{item.answer}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="register_btn">
        <section>
          <div className="reserve_seat">
            <div className="reserve_seat_in">
              <DetailsDialogBox>
                <p>Register Now Only For ₹{workshopData?.final_price}/-</p>
              </DetailsDialogBox>
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

const agendaItems = [
  {
    title: "Salesforce Basics:",
    description: "Understand the fundamentals of Salesforce.",
  },
  {
    title: "IT Career Strategies:",
    description: "Learn how to build a successful IT career.",
  },
  {
    title: "Interactive Q&A:",
    description: "Engage in live discussions and ask questions.",
  },
  {
    title: "High-Paying IT Jobs:",
    description: "Discover the path to high-paying roles.",
  },
  {
    title: "Salesforce Career Path:",
    description: "Explore Salesforce as a career choice.",
  },
];

const eligibilityCriteria = [
  {
    title: "Job Seekers in IT:",
    description:
      "Newcomers to the IT industry actively seeking job opportunities.",
  },
  {
    title: "Final-Year Students:",
    description:
      "Students in their last year looking to gain expertise in high-demand skills.",
  },
  {
    title: "Career Changers:",
    description:
      "Individuals with gaps in their IT career, actively pursuing opportunities in Salesforce.",
  },
  {
    title: "Returning Professionals:",
    description:
      "Housewives and others eager to re-enter the IT industry and advance their careers.",
  },
];

const faqItems = [
  {
    question: "How can I join the workshop?",
    answer:
      'To join, simply visit our website and click on the "Register" button for the workshop. Follow the instructions to complete the registration process.',
  },
  {
    question: "Is this a FREE Webinar?",
    answer:
      "No, this is not a free webinar. There is a fee associated with the workshop, which covers access to all the sessions, course materials, and support.",
  },
  {
    question: "Will I get the recording of the workshop?",
    answer:
      "Yes, recordings of the workshop sessions will be made available to participants. You'll have access to these recordings for a certain period after the workshop ends.",
  },
  {
    question: "Will it be in English or Hindi or both?",
    answer:
      "It will be a mix of Hindi plus English language so that everybody can take advantage of the same.",
  },
  {
    question: "Can I ask questions during the workshop?",
    answer:
      "Absolutely! We encourage active participation. You can ask questions and interact with the instructors during designated Q&A sessions or through chat, depending on the format of the workshop.",
  },
];

const benefitItems = [
  {
    image: "/assets/workshop-img/pen.png",
    text: "Learn the foundations of Salesforce from scratch",
  },
  {
    image: "/assets/workshop-img/start.png",
    text: "Understand the career opportunities in the Salesforce ecosystem",
  },
  {
    image: "/assets/workshop-img/Bulb.png",
    text: "Gain insights from real-world industry experiences",
  },
  {
    image: "/assets/workshop-img/video.png",
    text: "Interactive Q&A session to get your queries answered",
  },
];
