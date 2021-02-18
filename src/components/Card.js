import React from "react";
import { motion } from "framer-motion";
export default function Card(props) {
  const { title, description, link, gradient } = props;
  return (
    <section
      className={
        " py-16 mb-12 flex gap-16 flex-col-reverse md:flex-row dark:text-white text-gray-700"
      }
      style={{ maxWidth: 960 }}
    >
      <div
        className={"text-left flex-col flex gap-16 self-auto justify-center"}
        style={{ maxWidth: 300 }}
      >
        <div className={"flex gap-4 flex-col"}>
          <h3 className={"font-bold text-4xl"}>{title}</h3>
          <p className={"text-base font-regular opacity-75"}>{description}</p>
        </div>
        <a
          href={link}
          className={
            "text-green-500 dark: text-green-200 font-semibold text-lg"
          }
        >
          View Project
        </a>
      </div>
      <div style={{ height: 400 }} className={"md:flex-1 bg-blue-100"}></div>
    </section>
  );
}

Card.defaultProps = {
  title: "Title",
  description:
    "MyMedicalLocker is a secure patient portal that allows patients to access their medical records 24/7. ",
  link: "./",
  gradient: "linear-gradient(104.77deg, #3B7ABC -7.17%, #55B5FB 96.95%)",
};
