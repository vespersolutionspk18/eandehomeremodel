'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Implement form submission
  }

  const offices = [
    {
      name: 'San Fernando Valley',
      address: '18340 Ventura Blvd, Tarzana, CA 91356',
      phone: '(818) 200-1334',
    },
    {
      name: 'Ventura County',
      address: '300 E Esplanade Dr, 9th Floor, Oxnard, CA 93036',
      phone: '(805) 590-0908',
    },
    {
      name: 'Santa Barbara',
      address: '7 W Figueroa St, Ste 217, Santa Barbara, CA 93101',
      phone: '(805) 845-7264',
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-0">
      {/* Left Section - Contact Info */}
      <div className="relative w-full lg:w-[45%] p-6 md:p-8 flex flex-col justify-between rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden min-h-[400px] lg:min-h-0 bg-cyan-700">
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold mb-4">
              Let&apos;s Start Your<br />
              Dream Project
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-md">
              Fill out the form and we&apos;ll get back to you within 24 hours. Or give us a call — we love hearing from homeowners!
            </p>

            {/* Quick Contact */}
            <div className="flex flex-col gap-4 mb-8">
              <a href="tel:+18776389429" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">(877) 638-9429</span>
              </a>
              <a href="mailto:info@eandehomeremodel.com" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">info@eandehomeremodel.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span>Mon-Fri: 8am - 6pm | Sat: 9am - 3pm</span>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-white font-semibold text-lg mb-4">Our Offices</h3>
            <div className="grid grid-cols-1 gap-4">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/60 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium text-sm">{office.name}</p>
                    <p className="text-white/70 text-sm">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="text-white/90 text-sm hover:text-white">
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-[55%] p-6 md:p-8 bg-white rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black/90 tracking-tight mb-2">Request a Free Consultation</h2>
          <p className="text-black/60 text-sm">Get your FREE 3D design with every consultation!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street"
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all placeholder:text-black/30"
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                City <span className="text-red-500">*</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Select city</option>
                <optgroup label="Ventura County">
                  <option value="ventura">Ventura</option>
                  <option value="oxnard">Oxnard</option>
                  <option value="camarillo">Camarillo</option>
                  <option value="thousand-oaks">Thousand Oaks</option>
                  <option value="moorpark">Moorpark</option>
                  <option value="simi-valley">Simi Valley</option>
                </optgroup>
                <optgroup label="Santa Barbara County">
                  <option value="santa-barbara">Santa Barbara</option>
                  <option value="goleta">Goleta</option>
                  <option value="carpinteria">Carpinteria</option>
                </optgroup>
                <optgroup label="Los Angeles County">
                  <option value="calabasas">Calabasas</option>
                  <option value="woodland-hills">Woodland Hills</option>
                  <option value="tarzana">Tarzana</option>
                  <option value="encino">Encino</option>
                  <option value="sherman-oaks">Sherman Oaks</option>
                  <option value="burbank">Burbank</option>
                </optgroup>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              What type of project are you interested in? <span className="text-red-500">*</span>
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">Select project type</option>
              <option value="kitchen">Kitchen Remodeling</option>
              <option value="bathroom">Bathroom Remodeling</option>
              <option value="whole-house">Whole House Renovation</option>
              <option value="room-addition">Room Addition</option>
              <option value="adu">ADU / Garage Conversion</option>
              <option value="outdoor">Outdoor Living / Patio Cover</option>
              <option value="multiple">Multiple Projects</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Timeline & Budget Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                When do you want to start?
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="planning">Just planning / researching</option>
              </select>
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Estimated Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all appearance-none bg-white cursor-pointer"
              >
                <option value="">Select budget range</option>
                <option value="under-25k">Under $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-200k">$100,000 - $200,000</option>
                <option value="200k-plus">$200,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Tell us about your project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, goals, and any specific requirements..."
              rows={4}
              className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-black/10 rounded-xl focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/10 transition-all placeholder:text-black/30 resize-none"
            />
          </div>

          {/* Free 3D Design Note */}
          <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4">
            <p className="text-sm text-cyan-800">
              <strong>FREE 3D Design Included!</strong> Every consultation includes a complimentary 3D rendering of your project so you can visualize your transformation before we start.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 md:py-3.5 px-6 rounded-full text-sm md:text-base font-semibold hover:bg-cyan-700 transition-all flex items-center justify-center gap-2 group"
            >
              Request Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-black/50 text-center">
            By submitting this form, you agree to be contacted by E&E Home Remodeling regarding your project.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Form
