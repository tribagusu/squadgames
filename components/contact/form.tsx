"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const notify = () =>
    toast.info("Message sent! \r\n I will reach you back shortly");
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_8ln3gjg",
        "template_uonm3vb",
        form.current,
        "9aYefTHRkGOeaGETQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsLoading(false);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        {/* ===== first line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Full Name*</label>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>WhatsApp Number*</label>
            <input
              type="text"
              name="whatsapp_number"
              placeholder="WhatsApp Number"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        {/* ===== second line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Email Address*</label>
            <input
              type="text"
              name="email_address"
              placeholder="Email Addres"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Role*</label>
            <input
              type="text"
              name="role"
              placeholder="What's your current role"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        {/* ===== third line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Company Name*</label>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Company Site*</label>
            <input
              type="text"
              name="company_site"
              placeholder="Link to your company site"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        {/* ===== fourth line ===== */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="flex flex-col w-full">
            <label>Number of employee*</label>
            <input
              type="text"
              name="number_employee"
              placeholder="Number of training participant"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Program*</label>
            <input
              type="text"
              name="program"
              placeholder="What's your training needs"
              className="input"
              required
              disabled={isLoading ? true : false}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange p-3 text-black font-semibold rounded-md hover:bg-darkOrange transition ease-out duration-200"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        closeOnClick={false}
        hideProgressBar={true}
        theme="colored"
      />
    </>
  );
}