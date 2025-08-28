'use client'

import Image from "next/image"
import { useReactToPrint } from "react-to-print"
import { useRef } from "react"

const profile = {
  name: "Luong Ngo",
  title: "Software Engineer - Frontend",
  email: "luong.ngogia1997@gmail.com",
  phone: "+84823871997",
  address: "Hanoi, Vietnam",
  photo: "/profile-placeholder.JPG",
}

const overview = [
  "More than 5 years of experience as Front-End engineer",
  "Stay updated on industry trends and new technologies",
  "Propose and implement improvements to development processes and tools",
  "HTML5, CSS Framework: BEM SCSS, Antd, Material UI, PrimeVue, TailwindCSS, RadixUI, styled-components",
  "UI Framework/Library: ReactJS, NextJS, Vuejs 2, Vuejs 3, Nuxtjs 2, Nuxtjs 3",
  "Experienced with CMS like Strapi and Contentful",
  "Experienced with Storybook",
  "Experienced with e2e test using Cypress and unit test using Jest, Vitest",
  "Experienced working in Agile team (Scrum, Kanban)",
  "Experienced with GraphQL and RESTFUL API",
  "Experienced with Git flow",
  "Experienced with Subversion control",
  "Experienced with container technology (Docker)",
]

const workExperience = [
  {
    company: "SmartOSC",
    period: "03/2020 – Present",
    title: "Front End - Senior Software Engineer",
  },
  {
    company: "EOS BlockSmith",
    period: "2019/09 – 2019/12",
    title: "Front End - Junior Software Engineer",
  },
]

const education = [
  {
    school: "George Brown College",
    period: "2019 – 2020",
    major: "Ontario College Certificate in Blockchain Development",
  },
  {
    school: "Hanoi University Of Science And Technology",
    period: "2015 – 2019",
    major: "Software Engineering",
  }
]

const certifications = [
  {
    date: "03/2019",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
  },
  {
    date: "07/2019",
    name: "Google Cloud Platform Essentials",
    issuer: "Google",
  },
]

const projects = [
  {
    name: "Smartbox Ecommerce",
    period: "4/2022 - now",
    client: "Smartbox Group",
    description: "Ecommerce project (selling gift box)",
    team: 8,
    position: "Senior Front End Developer",
    responsibilities: [
      "Develop SSR website module with Vue + Nuxtjs",
      "Created component base and styleguide to reuse",
      "Write unit test, e2e and integration test",
      "Built structure for project (store, component, page, assets, API, plugins)",
      "Migrate project from Nuxt 2 to Nuxt 3",
      "SEO optimization for SSR ecommerce website",
      "Create a component library build to serve both Magento CMS and Nuxtjs app",
      "Using Gitlab-CI to build pipeline for deployment to S3 AWS and Npm package for library",
      "Review merge request from other members",
      "Planning for technical roadmap, make decisions on technology selection and migration",
    ],
    tech: ["Vue 2, Vue 3, Nuxt-bridge, Nuxt 3, i18n, pinia, Jest, Vitest, Cypress, Storybook, Gitlab-CI"],
  },
  {
    name: "DMSX",
    period: "6/2023 - 5/2024",
    client: "Company under NDA policy",
    description: "DMSX Document Management System",
    team: 5,
    position: "Senior Front End Developer (FE Lead)",
    responsibilities: [
      "Built structure for project (layouts, store, components, pages, assets, API query, plugins, husky, commitlint)",
      "Followed designs (using Figma) to build UI (for Desktop, Mobile, Tablet), config the Tailwind CSS variables",
      "Utilize styled-components for a modular and maintainable approach to styling React components",
      "Ensure a consistent and aesthetically pleasing visual style throughout the application",
      "Defined git-flow for the team to follow",
      "Implement unit testing and end-to-end testing strategies",
      "Created Front-End web application with NextJS 13 page directory",
      "Managing front-end components using Storybook",
      "Implemented features, and styling for the website using Sass (SCSS) and StyledComponent",
      "Implemented e2e tests for new features using Jest and React testing library",
      "Implemented UI components and layouts using Material-UI for a consistent and visually appealing design",
      "Customize and style Material-UI components to align with the application's design guidelines",
      "Integrate React Query for efficient data fetching and state management",
      "Optimize queries to minimize data transfer and improve application performance",
      "Review and evaluate the implementation of other team members",
      "Promptly debug and troubleshoot issues, providing effective solutions",
    ],
    tech: ["Typescript, ReactJS, NextJS, React, ReactQuery, MUI, NextJs, styled components"],
  },
    {
    name: "Carma Australia",
    period: "12/2022 - 5/2023",
    client: "Carma Australia",
    description: "Carma Used Cars - The Easy Way To Buy Used Cars",
    team: 5,
    position: "Middle Front End Developer",
    responsibilities: [
      "Communicate effectively with different stakeholders from other countries to clear requirements before implementation",
      "Plan workloads for future implementation",
      "Coordinate with other teams to find best solutions for the project",
      "Develop module with ReactJs + GraphQL + Contentful + CommerceTools",
      "Follow the perfect pixel design from Figma to develop UI/UX of the website",
      "Optimize code and Code review",
    ],
    tech: ["ReactJS, NextJS, GraphQL, Contentful"],
  },
  {
    name: "Rabbit Finance",
    period: "8/2021 - 3/2022",
    client: "Rabbit Care",
    description: "Rabbit Finance - Personal Finance Management Application",
    team: 4,
    position: "Front End Developer",
    responsibilities: [
      "Review Design (Figma) fully responsive",
      "Built structure for project (store, component, page, assets, API, plugins)",
      "Defined git-flow for the team to follow",
      "Implemented authentication for projects",
      "Created component base to reuse",
      "Review pull request from other members",
    ],
    tech: ["React, TypeScript, Redux, MUI , styled components"],
  },
]

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({ contentRef })

  return (
    <div className="max-w-5xl mx-auto pt-4 font-sans">
      {/* Export PDF Button */}
      <div className="mb-6 flex justify-end pr-4">
        <button
          onClick={reactToPrintFn}
          className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Export PDF
        </button>
      </div>

      {/* CV Content */}
      <div id="cv-content" ref={contentRef} className="p-6 rounded-lg">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center gap-6 mb-8 border-b pb-6">
          <div className="flex-shrink-0">
            <Image
              src={profile.photo}
              alt="Profile photo"
              width={120}
              height={120}
              className="rounded-xl border shadow-md object-cover bg-gray-100"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile.name}</h1>
            <h2 className="text-lg text-gray-600 mb-2">{profile.title}</h2>
            <div className="text-gray-500 text-sm flex flex-col sm:flex-row gap-1 sm:gap-4 items-center sm:items-start justify-center sm:justify-start">
              <span><b>Email:</b> <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></span>
              <span><b>Phone:</b> <a href={`tel:${profile.phone}`} className="underline">{profile.phone}</a></span>
              <span><b>Address:</b> {profile.address}</span>
            </div>
          </div>
        </header>

        {/* Overview */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <span>Overview</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {overview.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <span>Work Experience</span>
          </h3>
          <ul className="space-y-2">
            {workExperience.map((exp, i) => (
              <li key={i} className="border-l-4 border-blue-300 pl-4">
                <div className="font-bold text-gray-900">{exp.company}</div>
                <div className="text-gray-600 text-sm">{exp.period}</div>
                <div className="text-gray-600 text-sm">{exp.title}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-2">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <span>Education</span>
          </h3>
          <ul className="space-y-2">
            {education.map((edu, i) => (
              <li className="border-l-4 border-blue-300 pl-4" key={i}>
                <div className="font-bold text-gray-900">{edu.school}</div>
                <div className="text-gray-600 text-sm">{edu.period}</div>
                <div className="text-gray-700 text-sm">Major: {edu.major}</div>
              </li>
            ))}
          </ul>
        </section>

        <div style={{ pageBreakBefore: "always" }}>&nbsp;</div>


        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <span>Certifications</span>
          </h3>
          <ul className="space-y-1">
            {certifications.map((cert, i) => (
              <li key={i} className="border-l-4 border-blue-300 pl-4">
                <div className="font-bold text-gray-900">{cert.name}</div>
                <div className="text-gray-600 text-sm">{cert.issuer} &mdash; {cert.date}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            <span>Projects</span>
          </h3>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <div key={i}>
                <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div className="font-bold text-gray-900 text-lg">{proj.name}</div>
                    <div className="text-gray-500 text-sm">{proj.period}</div>
                  </div>
                  <div className="text-gray-700 mb-1"><b>Client:</b> {proj.client}</div>
                  <div className="text-gray-700 mb-1"><b>Description:</b> {proj.description}</div>
                  <div className="text-gray-700 mb-1"><b>Team size:</b> {proj.team}</div>
                  <div className="text-gray-700 mb-1"><b>Position:</b> {proj.position}</div>
                  <div className="text-gray-700 mb-1"><b>Responsibilities:</b>
                    <ul className="list-disc pl-6">
                      {proj.responsibilities.map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-700"><b>Technology in use:</b> {proj.tech.join(", ")}</div>
                </div>
                {i <= 1 && <div key='break' style={{ pageBreakBefore: "always" }}></div>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
