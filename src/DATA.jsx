import uniqid from "uniqid";

const DATA = {
  personalData: {
    fullName: "Adewale Theophilus",
    email: "theo.examplemail@gmail.com",
    telephone: "234-801-001-6711",
    address: "Lagos, Nigeria",
    description:
      "Aerospace by Education, Web Dev by Passion | Coding My Path Forward",
  },

  subSections: {
    educationArray: [
      {
        degree: "Bachelors in Engineering",
        institution: "National Aerospace University",
        location: "Kharkiv, Ukraine",
        start: "09/2013",
        end: "07/2017",
        isCollapsed: true,
        isVisible: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in JavaScript",
        institution: "Odin Web Varsity",
        location: "world-wide-web, Planet Earth",
        start: "09/2020",
        end: "present",
        isCollapsed: true,
        isVisible: true,
        id: uniqid(),
      },
    ],

    workExperienceArray: [
      {
        employer: "Q-Net International",
        position: "Network Marketer",
        location: "Kharkiv, Ukraine",
        job_description: "",
        start: "04/2017",
        end: "01/2019",
        isCollapsed: true,
        isVisible: false,
        id: uniqid(),
      },
      {
        employer: "DSi - Hub",
        position: "Resource Personnel",
        location: "Delta, Nigeria",
        job_description: "",
        start: "11/2017",
        end: "06/2018",
        isCollapsed: true,
        isVisible: false,
        id: uniqid(),
      },
    ],
  },
};

export default DATA;
