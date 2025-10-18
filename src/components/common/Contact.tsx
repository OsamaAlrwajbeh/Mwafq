import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const Contact = () => {
  return (
    <section className="container_main ">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl p-12 text-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4">
              We&apos;re here to help you with all your inquiries about Mwafq
              Platform. Reach out to us and our team will get back to you as
              soon as possible.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-white/90">info@mwafq.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-white/90">+966 XX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-sm text-white/90">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 rounded bg-white text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 rounded bg-white text-gray-900"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded bg-white text-gray-900"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded bg-white text-gray-900"
              ></textarea>
              <Button
                type="submit"
                className="bg-indigo-900 text-white px-8 py-3 rounded font-semibold hover:bg-indigo-800 transition"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
