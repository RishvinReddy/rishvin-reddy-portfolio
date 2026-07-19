import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact | Rishvin',
  description: 'Get in touch with Rishvin Reddy',
};

export default function Contact() {
  return (
    <main className="flex-grow pt-24 pb-16 bg-background-light">


    

      {/*  ===========================
     CONTACT — Upgraded, Spacious & Accessible
     Replace your current contact section with this block.
     Assumes Tailwind CSS + your animation utilities are available.
     JS below handles client validation + UX (no backend).
     ===========================  */}
      <section id="contact" className="pb-20 sm:pb-28">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/*  LEFT COLUMN: Info, Map, FAQ  */}
            <div className="space-y-10 lg:col-span-5 xl:col-span-4">

              {/*  Heading  */}
              <div className="">
                <h1
                  className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                  Get in Touch</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-xl">I'm open to new opportunities and collaborations. Tell me
                  about your project — I’ll reply within 1–2 business days.</p>
              </div>

              {/*  Contact Information  */}
              <div className="card-premium p-8 spotlight-card shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
                <div className="mt-5 space-y-4 text-gray-700">
                  <p className="flex items-center gap-3">
                    {/*  email  */}
                    <svg className="h-5 w-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.5l-10 6-10-6V4z"></path>
                      <path d="M2 7.5V20a2 2 0 002 2h16a2 2 0 002-2V7.5l-10 6-10-6z"></path>
                    </svg>
                    <a href="mailto:rishvinreddy@gmail.com" className="hover:text-primary transition-colors"
                      aria-label="Email rishvinreddy@gmail.com">rishvinreddy@gmail.com</a>
                  </p>

                  <p className="flex items-center gap-3">
                    {/*  phone  */}
                    <svg className="h-5 w-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path
                        d="M6.6 10.2a14.9 14.9 0 006.2 6.2l2-2a1 1 0 011-.2 11.7 11.7 0 003.7.6 1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 015 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.4.6 3.7a1 1 0 01-.2 1l-2 2z">
                      </path>
                    </svg>
                    <a href="tel:+919848723235" className="hover:text-primary transition-colors"
                      aria-label="Call +91 98487 23235">+91 98487 23235</a>
                  </p>

                  <p className="flex items-center gap-3">
                    {/*  meeting / booking  */}
                    <svg className="h-5 w-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                      <path d="M16 2v4M8 2v4"></path>
                      <path d="M3 10h18"></path>
                    </svg>
                    <a href="index.html" className="hover:text-primary transition-colors">Book a meeting</a>
                  </p>
                </div>
              </div>

              {/*  Map  */}
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md">
                <h3 className="sr-only">My Location</h3>
                <div className="w-full h-64 md:h-72">
                  <iframe className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.850123456789!2d78.11944183674599!3d18.69865706504396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a0b5b5b5b5%3A0x0!2sRishvin%20Location!5e0!3m2!1sen!2sin!4v1700000000000"
                    style={{ border: "0" }} title="Rishvin's location on Google Maps" aria-hidden="false"></iframe>
                </div>
              </div>

              {/*  FAQ  */}
              <div className="card-premium p-6">
                <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
                <div className="mt-4 space-y-3">
                  <details className="group rounded-lg bg-gray-50 p-4 transition-colors duration-200">
                    <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900">
                      What's your design process?
                      <svg className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-gray-600">I follow a collaborative and iterative process: research → wireframes
                      → prototypes → testing → handoff. I prioritize accessibility and measurable outcomes.</p>
                  </details>

                  <details className="group rounded-lg bg-gray-50 p-4 transition-colors duration-200">
                    <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-900">
                      What tools do you use?
                      <svg className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-gray-600">I use Python, Arduino/ESP toolchains, Flask, Figma, Git, and common
                      data-analysis libraries. I also work with MySQL, Firebase and small-scale cloud deployments.</p>
                  </details>
                </div>
              </div>
            </div>

            {/*  RIGHT COLUMN: Contact Form  */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="card-premium p-8 spotlight-card shadow-xl transition-all duration-500">
                <form id="contact-form" className="space-y-8" noValidate>
                  <div className="mb-4">
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Send a Detailed Inquiry</h3>
                    <p className="mt-2 text-sm text-gray-600 font-medium">Please provide as much context as possible. I typically respond within 24-48 hours.</p>
                  </div>

                  {/*  Personal Details  */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input type="text" id="first_name" name="first_name" className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300" placeholder=" " required />
                      <label htmlFor="first_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">First Name <span className="text-primary">*</span></label>
                      <p className="mt-1 text-xs text-red-600 hidden" id="err-first_name" role="alert"></p>
                    </div>
                    <div className="relative group">
                      <input type="text" id="last_name" name="last_name" className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300" placeholder=" " />
                      <label htmlFor="last_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Last Name</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input type="email" id="email" name="email" className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300" placeholder=" " required />
                      <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Email Address <span className="text-primary">*</span></label>
                      <p className="mt-1 text-xs text-red-600 hidden" id="err-email" role="alert"></p>
                    </div>
                    <div className="relative group">
                      <input type="tel" id="phone" name="phone" className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300" placeholder=" " />
                      <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Phone / WhatsApp</label>
                    </div>
                  </div>

                  <div className="relative group">
                    <input type="text" id="company_input" name="company_input" className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300" placeholder=" " />
                    <label htmlFor="company_input" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Company / Organization</label>
                  </div>

                  <hr className="border-gray-200/60" />

                  {/*  Inquiry Type  */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase text-xs">Inquiry Type <span className="text-primary">*</span></label>
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                      <label className="cursor-pointer">
                        <input type="radio" name="inquiry_type" value="Project" className="peer sr-only" required />
                        <div className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-600 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:shadow-inner hover:bg-gray-50 shadow-md">Project</div>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="inquiry_type" value="Job" className="peer sr-only" />
                        <div className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-600 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:shadow-inner hover:bg-gray-50 shadow-md">Job Opportunity</div>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="inquiry_type" value="Collaboration" className="peer sr-only" />
                        <div className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-600 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:shadow-inner hover:bg-gray-50 shadow-md">Collaboration</div>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="inquiry_type" value="General" className="peer sr-only" />
                        <div className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-600 transition-all peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:shadow-inner hover:bg-gray-50 shadow-md">General</div>
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-red-600 hidden" id="err-inquiry_type" role="alert"></p>
                  </div>

                  {/*  Services Needed  */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase text-xs">Services Needed <span className="text-gray-400 font-medium ml-1 normal-case">(Select all that apply)</span></label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-md">
                        <input type="checkbox" name="services" value="Web Dev" className="rounded text-primary focus:ring-primary focus:ring-2 focus:ring-offset-1 w-4 h-4 border-gray-300" />
                        <span className="text-sm text-gray-800 font-medium">Web Dev</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-md">
                        <input type="checkbox" name="services" value="Backend API" className="rounded text-primary focus:ring-primary focus:ring-2 focus:ring-offset-1 w-4 h-4 border-gray-300" />
                        <span className="text-sm text-gray-800 font-medium">Backend API</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-md">
                        <input type="checkbox" name="services" value="AI/ML" className="rounded text-primary focus:ring-primary focus:ring-2 focus:ring-offset-1 w-4 h-4 border-gray-300" />
                        <span className="text-sm text-gray-800 font-medium">AI / ML</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-md">
                        <input type="checkbox" name="services" value="IoT" className="rounded text-primary focus:ring-primary focus:ring-2 focus:ring-offset-1 w-4 h-4 border-gray-300" />
                        <span className="text-sm text-gray-800 font-medium">IoT / Hardware</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-md">
                        <input type="checkbox" name="services" value="UI/UX" className="rounded text-primary focus:ring-primary focus:ring-2 focus:ring-offset-1 w-4 h-4 border-gray-300" />
                        <span className="text-sm text-gray-800 font-medium">UI / UX Design</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-gray-200 bg-white/50 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-md">
                        <input type="checkbox" name="services" value="Consulting" className="rounded text-primary focus:ring-primary focus:ring-2 focus:ring-offset-1 w-4 h-4 border-gray-300" />
                        <span className="text-sm text-gray-800 font-medium">Consulting</span>
                      </label>
                    </div>
                  </div>

                  {/*  Budget & Timeline  */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="currency" className="block text-xs font-bold text-gray-900 tracking-wide uppercase mb-1">Currency</label>
                      <select id="currency" name="currency" className="block w-full rounded-xl border border-gray-200 px-4 py-3 bg-white/70 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 shadow-md font-medium">
                        <option value="USD ($)">USD ($)</option>
                        <option value="EUR (€)">EUR (€)</option>
                        <option value="GBP (£)">GBP (£)</option>
                        <option value="INR (₹)">INR (₹)</option>
                        <option value="AUD ($)">AUD ($)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-bold text-gray-900 tracking-wide uppercase mb-1">Budget</label>
                      <select id="budget" name="budget" className="block w-full rounded-xl border border-gray-200 px-4 py-3 bg-white/70 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 shadow-md font-medium">
                        <option value="Not sure / N/A">Not sure / N/A</option>
                        <option value="< 1,000">&lt; 1,000</option>
                        <option value="1,000 - 5,000">1,000 - 5,000</option>
                        <option value="5,000 - 10,000">5,000 - 10,000</option>
                        <option value="10,000+">10,000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-xs font-bold text-gray-900 tracking-wide uppercase mb-1">Timeline</label>
                      <select id="timeline" name="timeline" className="block w-full rounded-xl border border-gray-200 px-4 py-3 bg-white/70 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700 shadow-md font-medium">
                        <option value="Flexible">Flexible</option>
                        <option value="ASAP">ASAP (Urgent)</option>
                        <option value="1-3 Months">1 - 3 Months</option>
                        <option value="3-6 Months">3 - 6 Months</option>
                      </select>
                    </div>
                  </div>

                  <hr className="border-gray-200/60" />

                  {/*  Message Details  */}
                  <div className="relative group">
                    <input type="text" id="subject" name="subject" required className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300" placeholder=" " />
                    <label htmlFor="subject" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Subject / Project Name <span className="text-primary">*</span></label>
                    <p className="mt-1 text-xs text-red-600 hidden" id="err-subject" role="alert"></p>
                  </div>

                  <div className="relative group">
                    <textarea id="message" name="message" rows={5} maxLength={2000} className="peer block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-white/70 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-md shadow-md group-hover:border-gray-300 resize-y min-h-[140px]" placeholder=" "></textarea>
                    <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary pointer-events-none font-medium">Message Details <span className="text-primary">*</span></label>
                    <span id="char-count" className="absolute right-3 bottom-3 text-xs text-gray-400 font-medium bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm border border-gray-100">0 / 2000</span>
                    <p className="mt-1 text-xs text-red-600 hidden" id="err-message" role="alert"></p>
                  </div>

                                    

                  {/*  Preferred Contact  */}
                  <div>
                    <label className="block text-xs font-bold text-gray-900 tracking-wide uppercase mb-3">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-5">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="preferred_contact" value="Email" className="text-primary focus:ring-primary border-gray-300 shadow-md w-4 h-4 transition-all" checked />
                        <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="preferred_contact" value="Phone" className="text-primary focus:ring-primary border-gray-300 shadow-md w-4 h-4 transition-all" />
                        <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Phone Call</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="preferred_contact" value="WhatsApp" className="text-primary focus:ring-primary border-gray-300 shadow-md w-4 h-4 transition-all" />
                        <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">WhatsApp</span>
                      </label>
                    </div>
                  </div>

                  {/*  honeypot (hidden)  */}
                  <div className="hidden">
                    <label htmlFor="company_honey" className="sr-only">Company Honey (leave blank)</label>
                    <input id="company_honey" name="company_honey" type="text" autoComplete="off" tabIndex={-1} />
                  </div>

                  {/*  Anti-spam CAPTCHA  */}
                  <div className="rounded-2xl bg-white p-5 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <div>
                        <label htmlFor="captcha" className="block text-sm font-bold text-gray-900">Security Check</label>
                        <p className="text-xs text-gray-500 font-medium mt-1">Please answer: <strong className="text-gray-900 text-sm">3 + 4 = ?</strong></p>
                      </div>
                    </div>
                    <div className="w-full sm:w-28 relative">
                      <input id="captcha" name="captcha" type="text" required className="block w-full rounded-xl border border-gray-200 px-4 py-3 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-center font-extrabold text-xl shadow-inner transition-all" placeholder="?" />
                      <p className="absolute -bottom-5 left-0 w-full text-[10px] text-red-600 hidden text-center font-medium" id="err-captcha" role="alert"></p>
                    </div>
                  </div>

                  {/*  submit  */}
                  <div className="pt-4">
                    <button id="submitBtn" type="submit" className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-[#ff477e] py-4 px-6 text-lg font-bold text-white shadow-[0_8px_30px_rgb(242,13,70,0.3)] hover:shadow-[0_12px_40px_rgb(242,13,70,0.5)] hover:-translate-y-1 transition-all duration-300 btn-shine relative overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                      <svg id="btnSpinner" className="hidden animate-spin h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4"></path>
                      </svg>
                      <span id="btnText">Send Inquiry Now</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500 font-medium">Estimated response time: 1–2 business days. By submitting you agree to our <a href="index.html" className="text-primary hover:underline font-bold">Privacy Policy</a>.</p>

                  {/*  live region for status  */}
                  <div aria-live="polite" className="sr-only" id="formStatus" role="status"></div>
                </form>

                {/*  success state (hidden by default)  */}
                <div id="successBox" className="hidden mt-6 text-center">
                  <svg className="mx-auto h-14 w-14 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <h4 className="mt-4 text-xl font-semibold text-gray-900">Message Sent!</h4>
                  <p className="mt-2 text-gray-600">Thanks for reaching out — I'll reply within 1–2 business days.</p>
                  <div className="mt-4">
                    <a id="backToForm" href="#"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-200 bg-white text-black hover:shadow">Send
                      another message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  small footer note  */}
        <div className="container mx-auto px-6 lg:px-20 mt-8 text-center">
          <p className="text-xs text-gray-500">Prefer email? <a className="text-primary underline"
              href="mailto:rishvinreddy@gmail.com">rishvinreddy@gmail.com</a></p>
        </div>
      </section>



    

      {/*  ===========================
     Client-side form JS (validation + anti-spam + UX)
     ===========================  */}
      

    </main>
  );
}
