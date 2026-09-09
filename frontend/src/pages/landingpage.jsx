import React, { useState } from "react";
import { api } from "../services/api";

const services = [
  {
    name: "Solar Design",
    description:
      "Complete solar system design including panel layout, equipment planning and optimized system configuration."
  },
  {
    name: "Electrical",
    description:
      "Electrical design support including single-line diagrams, wiring plans, load calculations and code-compliant layouts."
  },
  {
    name: "Battery Design",
    description:
      "Battery storage planning based on energy usage, backup requirements, battery capacity and system compatibility."
  },
  {
    name: "Engineering",
    description:
      "Professional engineering review for structural, electrical and technical requirements of your solar project."
  },
  {
    name: "BOQ/BOM",
    description:
      "Detailed Bill of Quantities and Bill of Materials covering panels, inverters, cables, mounting hardware and accessories."
  },
  {
    name: "PV Analysis",
    description:
      "Solar production and performance analysis using system size, location, shading and expected energy generation."
  },
  {
    name: "Site Survey",
    description:
      "Site assessment support for roof condition, available area, shading, electrical infrastructure and installation feasibility."
  },
  {
    name: "Installation",
    description:
      "Installation planning and technical guidance to help ensure the solar system is installed safely and correctly."
  }
];

function LandingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    systemType: "",
    systemSize: "",
    panels: "",
    inverter: "",
    battery: "",
    services: []
  });
  const [message, setMessage] = useState("");

  const update = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      const { data } = await api.post("/projects", form);
      setMessage(`Project submitted successfully. Reference: ${data.project.publicId}`);
      setForm({
        name: "",
        email: "",
        address: "",
        systemType: "",
        systemSize: "",
        panels: "",
        inverter: "",
        battery: "",
        services: []
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Submission failed.");
    }
  };

  return (
    <div>
      <header className="hero">
   

        <div className="heroContent">
          <p className="eyebrow">PROFESSIONAL SOLAR DESIGN & ENGINEERING</p>
          <h1>Build your solar project with confidence.</h1>
          <p className="lead">
            Submit your project details, get expert engineering support,
            installer review, and final plans delivered in one streamlined workflow.
          </p>
          <a className="primary" href="#project-form">START YOUR PROJECT</a>
        </div>
      </header>

      <main>
        <section className="section">
          <p className="eyebrow">SERVICES</p>
          <h2>What we can help with</h2>
          <div className="grid">
            {services.map((item) => (
              <div className="card" key={item.name}>
                <div className="icon">☀</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section alt">
          <p className="eyebrow">PROCESS</p>
          <h2>How does it work?</h2>
          <div className="steps">
            {[
              "Submit Project Information",
              "We Review Your Project",
              "Engineering & Design",
              "Expert / Installer Review",
              "Final Plans Delivered"
            ].map((step, i) => (
              <div className="step" key={step}>
                <span>{i + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section formSection" id="project-form">
          <div className="formIntro">
            <p className="eyebrow">PROJECT INTAKE</p>
            <h2>Tell us about your project</h2>
            <p>
              Share the basics and we’ll review whether the project is a good fit.
              You can add detailed documents and equipment information later.
            </p>
          </div>

          <form className="projectForm" onSubmit={submit}>
            <input name="name" value={form.name} onChange={update} placeholder="Name" required />
            <input name="email" value={form.email} onChange={update} placeholder="Email" type="email" required />
            <input name="address" value={form.address} onChange={update} placeholder="Project Address" required />
            <input name="systemType" value={form.systemType} onChange={update} placeholder="System Type (Grid-Tied, Battery, Hybrid)" />
            <input name="systemSize" value={form.systemSize} onChange={update} placeholder="System Size (e.g. 10 kW)" />
            <input name="panels" value={form.panels} onChange={update} placeholder="Panels" />
            <input name="inverter" value={form.inverter} onChange={update} placeholder="Inverter" />
            <input name="battery" value={form.battery} onChange={update} placeholder="Battery" />

            <div className="servicePicker">
              {services.map((service) => (
                <button
                  key={service.name}
                  type="button"
                  className={form.services.includes(service.name) ? "selected" : ""}
                  onClick={() => toggleService(service.name)}
                >
                  {service.name}
                </button>
              ))}
            </div>

            <button className="primary submitBtn" type="submit">SUBMIT PROJECT</button>
            {message && <p className="message">{message}</p>}
          </form>
        </section>
      </main>

      <footer>
        <strong>Solar Goat × EnergyHub</strong>
        <span>Professional solar design, engineering and project review.</span>
      </footer>
    </div>
  );
}

export default LandingPage;
