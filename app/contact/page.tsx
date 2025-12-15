'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from './components/Form'
import { CheckCircle2 } from 'lucide-react'

const ContactPage = () => {
  return (
    <>
      <Header enableScrollEffects={false} />
      <main className="pt-[5rem] sm:pt-[5.5rem] md:pt-[6rem]">
        {/* Form Section */}
        <div className="px-3 sm:px-5 pb-4 md:pb-5">
          <Form />
        </div>

        {/* Trust Signals */}
        <section className="py-8 px-4 md:px-8 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">CA Lic #1087571</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">Family Owned</span>
              </div>
              <div className="flex items-center gap-2 text-black/60">
                <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                <span className="text-sm font-medium">FREE 3D Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-black/90 mb-3">
                Service Areas
              </h2>
              <p className="text-black/60 max-w-xl mx-auto">
                Proudly serving homeowners throughout Ventura, Santa Barbara, and Los Angeles Counties.
              </p>
            </div>

            {/* Map placeholder - replace with actual Google Maps embed */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1702666800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="E&E Home Remodeling Service Area"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default ContactPage
