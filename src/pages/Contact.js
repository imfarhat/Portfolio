import React, { useState } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import SocialLinks from "../components/SocialLinks.js";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const handleInputChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    const et = e.target;
    //Disbale buttons and inputs
    const submitButton = et.querySelector('button[type="submit"]');
    const inputTags = et.querySelectorAll("input, textarea");
    inputTags.forEach((element) => {
      // Check if the element is a radio-type input and is selected
      if (!(element.type === "radio" && element.checked)) {
        // If it's not a selected radio button, set the "disabled" attribute
        element.setAttribute("disabled", true);
      }
    });

    const submitBtnInitailaValue = submitButton.innerHTML;
    submitButton.innerHTML = "Wait... &#x23F3;";
    submitButton.disabled = true; // Disable submit button

    try {
      // Get current date and time
      const { submitDate, submitTime } = await getDateTime();
      // Get form data
      const formData = new FormData(et);

      // Append submitDate and submitTime to the formData
      formData.append("submitDate", submitDate);
      formData.append("submitTime", submitTime);
      formData.append("formName", "Contact");
      formData.append("origin", window.location.origin);

      // Example: log the formData for demonstration
      /* for (let pair of formData.entries()) {
        console.log(pair[0] + ":" + pair[1]);
      } */

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzOfVyYAhi4EQgeqHbWigRiyc3NxoQspPUI38I5s2HbCHQcVZ5rwch-qPRE99ZdPFE/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { result } = await response.json();
      console.log("Response:", result);
      if (result === "error") {
        throw new Error("Backend response was not ok");
      }
      submitButton.innerHTML = "Success &check;";
      // Handle success response here
    } catch (error) {
      submitButton.innerHTML = "Error !";
      console.log(error);
      // Handle error here
    } finally {
      setTimeout(() => {
        et.reset()
        setUser({
          name: "",
          gender: "",
          email: "",
          phone: "",
          message: "",
        });
        submitButton.innerHTML = submitBtnInitailaValue;
        // Enable submit button and inputs
        submitButton.disabled = false;
        inputTags.forEach((element) => {
          element.removeAttribute("disabled");
        });
      }, 7000);
    }
  };

  const getDateTime = async () => {
    const now = new Date();
    const dd = now.getDate().toString().padStart(2, "0");
    const mm = (now.getMonth() + 1).toString().padStart(2, "0");
    const yyyy = now.getFullYear();
    const submitDate = `${dd}/${mm}/${yyyy}`; // dd/mm/yyyy

    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");
    const s = now.getSeconds().toString().padStart(2, "0");
    const submitTime = `${h}:${m}:${s}`; // hh:mm:ss

    return { submitDate, submitTime };
  };

  sessionStorage.setItem("previousPage", window.location.pathname);

  return (
    <>
      <Header />
      <main className="py-4 md:pt-8 pb-16 ficjc flex-col gap-8 bg-[#16181d]">
        <section className="w-full max-w-7xl flex flex-col ficjc gap-8">
          <article className="flex flex-col items-center justify-center gap-4 text-[#f5f5f5] md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="font-semibold px-2 text-center text-3xl">Contact</h1>
            <p className="px-2 md:px-4 text-justify text-[#f5f5f5]/75 drop-shadow shadow-black">
              I'd love to hear from you, whether you have a question, a project
              idea, feedback, or just want to say hi. Feel free to reach out to
              us using the contact information provided above or by submitting a
              message below. We'll get back to you as soon as possible.
            </p>
          </article>
        </section>
        <section className="max-w-7xl md:rounded-md overflow-hidden p-2 md:p-4 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <article className="px-2 py-4 md:px-4 md:py-6 flex md:flex-col-reverse items-center justify-center gap-3 md:gap-4 w-full text-3xl">
            <SocialLinks />
          </article>
          <article className="px-2 md:px-4 w-full flex flex-col items-center justify-center gap-4 text-[#f5f5f5]">
            <h3 className="font-semibold text-xl">Send a mesage</h3>
            <form
              action=""
              method="post"
              name="Contact"
              onSubmit={handleContactForm}
              className="flex flex-col gap-4 md:gap-6 items-center justify-center w-full"
            >
              <div>
                <label>Name</label>
                <input
                  type="text"
                  maxLength="50"
                  size="30"
                  required
                  pattern="[a-zA-Z ]{2,}"
                  name="name"
                  placeholder="Your Name"
                  value={user.name}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Gender</label>
                <aside className="flex items-start justify-center gap-4 md:gap-5  radio-group">
                  <label
                    htmlFor="male"
                    className="ficjc flex-row gap-2 select-none cursor-pointer"
                  >
                    Male
                    <input
                      type="radio"
                      required
                      name="gender"
                      id="male"
                      value="male"
                      checked={user.gender === "male"}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label
                    htmlFor="female"
                    className="ficjc flex-row gap-2 select-none cursor-pointer"
                  >
                    Female
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="female"
                      id="female"
                      checked={user.gender === "female"}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label
                    htmlFor="other"
                    className="ficjc flex-row gap-2 select-none cursor-pointer"
                  >
                    Other
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="other"
                      id="other"
                      checked={user.gender === "other"}
                      onChange={handleInputChange}
                    />
                  </label>
                </aside>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  maxLength="35"
                  size="30"
                  required
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  name="email"
                  placeholder="example@gmail.com"
                  value={user.email}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Phone (+91)</label>
                <input
                  type="tel"
                  maxLength="10"
                  size="10"
                  required
                  pattern="[0-9]{10}"
                  name="phone"
                  placeholder="Phone Number"
                  value={user.phone}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Message</label>
                <textarea
                  rows="5"
                  minLength="10"
                  maxLength="500"
                  required
                  name="message"
                  placeholder="Your Message"
                  value={user.message}
                  autoComplete="off"
                  onChange={handleInputChange}
                  spellCheck={true}
                ></textarea>
              </div>

              <button type="submit" className="feedback-tab-btn">
                Submit &#10148;
              </button>
            </form>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Contact;
