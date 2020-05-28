import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import "../styles/contact.styl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import team from "../images/team.svg"

const IndexPage = () => (
  <Layout className="items-center">
    <SEO title="contact" />
    <h1 className="font-sans sm:text-6xl text-4xl text-center font-bold mt-16 mb-32">
      Welcome. Do you want an incredible website?
    </h1>

    <section className="grid grid-cols-2 grid-rows-2 max-w-xl row-gap-5 m-auto justify-items-center my-40">
      <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
      <FontAwesomeIcon className="text-xl" icon={faPhone} />
      <p>contact@digitaltransform.com</p>
      <p>+52 5582821454</p>
    </section>

    <form
      id="contact-me"
      class="w-full mx-auto max-w-3xl bg-white p-8 text-gray-700"
      action="https://backend-mail.now.sh/"
      method="POST"
    >
      <h2 class="w-full my-2 text-3xl font-bold leading-tight my-5">
        Contact form
      </h2>
      <div class="flex flex-wrap mb-6">
        <div class="relative w-full appearance-none label-floating">
          <input
            class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            name="name"
            type="text"
            placeholder="Your name or company"
            required
          />
          <label
            for="name"
            class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
          >
            Your name or company
          </label>
        </div>
      </div>
      <div class="flex flex-wrap mb-6">
        <div class="relative w-full appearance-none label-floating">
          <input
            class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
          <label
            for="email"
            class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
          >
            Your email
          </label>
        </div>
      </div>
      <div class="flex flex-wrap mb-6">
        <div class="relative w-full appearance-none label-floating">
          <textarea
            class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            name="message"
            type="text"
            placeholder="Message..."
          ></textarea>
          <label
            for="message"
            class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
          >
            Message...
          </label>
        </div>
      </div>

      <div class="">
        <button
          class="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </Layout>
)

export default IndexPage
