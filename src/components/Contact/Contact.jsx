import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { contactInfo } from "../../data/data";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_zmpqk5d",
        "template_fmh9v4v",
        form.current,
        "J2IThgAy1vMMn1Jhr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset()
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  // const Form = () => {
  //   return (
  //     <>
  //       <form onSubmit={handleSubmit(onSubmit)} ref={form}>
  //         <div className="row">
  //           <div className="col-md-6">
  //             <div className="form-group mb-3">
  //               <input
  //                 type="text"
  //                 name="customer_name"
  //                 className="form-control"
  //                 placeholder={t("Name")}
  //                 {...register("customer_name", { required: true })}
  //               />
  //               {errors.name && errors.name.type === "required" && (
  //                 <span className="invalid-feedback">Name is required</span>
  //               )}
  //             </div>
  //           </div>
  //           {/* End .col-6 */}

  //           <div className="col-md-6">
  //             <div className="form-group mb-3">
  //               <input
  //                 type="email"
  //                 name="customer_email"
  //                 className="form-control"
  //                 placeholder={t("Email")}
  //                 // {...register(
  //                 //   "customer_email",
  //                 //   {
  //                 //     required: "Email is Required",
  //                 //     pattern: {
  //                 //       value: /\S+@\S+\.\S+/,
  //                 //       message: "Entered value does not match email format",
  //                 //     },
  //                 //   },
  //                 //   { required: true }
  //                 // )}
  //               />
  //               {errors.email && (
  //                 <span className="invalid-feedback">
  //                   {errors.email.message}
  //                 </span>
  //               )}
  //             </div>
  //           </div>
  //           {/* End .col-6 */}

  //           <div className="col-12">
  //             <div className="form-group mb-3">
  //               <input
  //                 type="text"
  //                 name="subject"
  //                 className="form-control"
  //                 placeholder={t("Subject")}
  //                 {...register("subject", { required: true })}
  //               />
  //               {errors.subject && (
  //                 <span className="invalid-feedback">Subject is required.</span>
  //               )}
  //             </div>
  //           </div>
  //           {/* End .col-12 */}

  //           <div className="col-12">
  //             <div className="form-group mb-3">
  //               <textarea
  //                 rows="4"
  //                 name="message"
  //                 className="form-control"
  //                 placeholder={t("Type_comment")}
  //                 {...register("message", { required: true })}
  //               ></textarea>
  //               {errors.comment && (
  //                 <span className="invalid-feedback">Comment is required.</span>
  //               )}
  //             </div>
  //           </div>
  //           {/* End .col-12 */}

  //           <div className="col-12">
  //             <div className="btn-bar">
  //               <button className="px-btn px-btn-white" type="submit">
  //                 {t("Send_Message")}
  //               </button>
  //             </div>
  //           </div>
  //           {/* End .col-12 */}
  //         </div>
  //       </form>
  //     </>
  //   );
  // };

  const ContactInfo = () => {
    return (
      <div className="contact-info">
        <h4>{t("Get_in_touch")}</h4>
        <p>{t("contact_desc")}</p>

        <ul>
          <li className="media">
            <i className="icon icon-map ms-2"></i>
            <span className="media-body">{contactInfo.address}</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope ms-2"></i>
            <span className="media-body">{contactInfo.email}</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone ms-1"></i>
            <span className="media-body">{contactInfo.phone}</span>
          </li>
          {/* End li */}
        </ul>
      </div>
    );
  };

  return (
    <>
      <section
        id={i18n.language === "ar" ? "التواصل" :"Contact"}
        className="section dark-bg"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>{t("Say_Something")}</h4>
                <form onSubmit={handleSubmit(sendEmail)} ref={form}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="customer_name"
                          className="form-control"
                          placeholder={t("Name")}
                          {...register("customer_name", { required: true })}
                        />
                         {errors.customer_name && (
                          <span className="invalid-feedback">
                            Name is required. {console.log(errors)}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* End .col-6 */}

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          name="customer_email"
                          className="form-control"
                          placeholder={t("Email")}
                          {...register(
                            "customer_email",
                            {
                              required: "Email is Required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                              },
                            },
                            { required: true }
                          )}
                        />
                        {errors.customer_email && (
                          <span className="invalid-feedback">
                            {errors.customer_email.message}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* End .col-6 */}

                    <div className="col-12">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder={t("Subject")}
                          {...register("subject", { required: true })}
                        />
                        {errors.subject && (
                          <span className="invalid-feedback">
                            Subject is required.
                          </span>
                        )}
                      </div>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-12">
                      <div className="form-group mb-3">
                        <textarea
                          rows="4"
                          name="message"
                          className="form-control"
                          placeholder={t("Type_comment")}
                          {...register("message", { required: true })}
                        ></textarea>
                        {errors.message && (
                          <span className="invalid-feedback">
                            Comment is required.
                          </span>
                        )}
                      </div>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-12">
                      <div className="btn-bar">
                        <button className="px-btn px-btn-white" type="submit">
                          {t("Send_Message")}
                        </button>
                      </div>
                    </div>
                    {/* End .col-12 */}
                  </div>
                </form>
              </div>
            </div>
            {/* End contact form */}
            {/* End Col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
