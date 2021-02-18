import React from "react";
import Card from "../components/Card.js";

export default function Work() {
  return (
    <main>
      <div className={"flex flex-col gap-8  mb-20 mt-40 text-left"}>
        <div className={"flex flex-col gap-4 "}>
          <h4
            className={
              "text-xl dark:text-gray-200 font-semibold text-green-500"
            }
          >
            UX Designer & Developer
          </h4>
          <h1 className={"text-7xl font-bold text-gray-700 dark:text-white"}>
            Chris Northcutt
          </h1>
        </div>
        <p
          className={"text-2xl font-semibold dark:text-gray-200 text-gray-500"}
        >
          I’m a product designer, podcaster, and writer, living in San
          Francisco.
          <br />
          I’m currently building native mobile apps at GitHub.
        </p>
      </div>
      <Card title={"MyMedicalLocker"} link={"mymedicallocker"} />
      <Card
        title={"OfficeEMR Mobile"}
        gradient={"linear-gradient(104.77deg, #CA9C42 -7.17%, #FBC255 96.95%)"}
        link={"anywherecare"}
      />
      <Card
        title={"AnywhereCare"}
        gradient={"linear-gradient(104.77deg, #8BB3C5 -7.17%, #4CD9D1 96.95%)"}
        link={"anywherecare"}
      />
    </main>
  );
}
