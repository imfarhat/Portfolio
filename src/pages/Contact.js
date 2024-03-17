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
    const submitButton = et.querySelector('button[type="submit"]');

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
        "https://script.google.com/macros/s/AKfycbx4mZrF_arBlAqVwtlB1F63njETwBNwN0scd_zZ97gmVD4wIjL4azHIgF8PCHRVN4Q/exec",
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
      setUser({
        name: "",
        gender: "",
        email: "",
        phone: "",
        message: "",
      });
      et.reset(); // Reset the form
      setTimeout(() => {
        submitButton.innerHTML = submitBtnInitailaValue;
        submitButton.disabled = false; // Enable submit button
      }, 2500);
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
  return (
    <>
      <Header />
      <main className="pt-16 py-24 ficjc flex-col gap-0 bg-[#16181d]">
        <section className="w-full max-w-7xl flex flex-col ficjc gap-8">
          <article className="flex flex-col items-center justify-center gap-4 text-white md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="font-semibold px-2 text-center text-3xl">Contact</h1>
            <p className="px-2 md:px-4 text-justify text-white/75 drop-shadow shadow-black">
              I'd love to hear from you, whether you have a question, a project
              idea, feedback, or just want to say hi. Feel free to reach out to
              us using the contact information provided above or by submitting a
              message below. We'll get back to you as soon as possible.
            </p>
          </article>
        </section>
        <section className="max-w-7xl md:rounded-md overflow-hidden p-2 md:p-4 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <article className="px-2 py-4 md:px-4 md:py-6 flex items-center justify-center gap-3 md:gap-4 w-full text-3xl">
            <SocialLinks />
          </article>
          <article className=" w-full flex flex-col items-center justify-center gap-4 text-white">
            <h3 className="font-semibold text-xl">Send a mesage</h3>
            <form
              action=""
              method="post"
              name="Contact"
              onSubmit={handleContactForm}
              className="flex flex-col gap-2 md:gap-4 items-center justify-center w-full"
            >
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  maxLength="50"
                  size="30"
                  required
                  pattern="[a-zA-Z ]{2,}"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={user.name}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <span>Gender:</span>
                <aside className="flex items-start justify-center gap-4">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      id="male"
                      checked={user.gender === "male"}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-row items-center justify-center gap-2">
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="female"
                      id="female"
                      checked={user.gender === "female"}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-row items-center justify-center gap-2">
                    <label htmlFor="other">Other</label>
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="other"
                      id="other"
                      checked={user.gender === "other"}
                      onChange={handleInputChange}
                    />
                  </div>
                </aside>
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  maxLength="35"
                  size="30"
                  required
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={user.email}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone (+91):</label>
                <input
                  type="tel"
                  maxLength="10"
                  size="10"
                  required
                  pattern="[0-9]{10}"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={user.phone}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  rows="5"
                  minLength="10"
                  maxLength="500"
                  required
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={user.message}
                  autoComplete="off"
                  onChange={handleInputChange}
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
