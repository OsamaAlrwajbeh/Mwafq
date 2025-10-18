import React from "react";
import contact from "@images/Contact/contact.png";
import CustomIntro from "@/components/ui/CustomIntro";
function ContactUs() {
  return (
    <CustomIntro
      title="Contact Us"
      subtitle="We’re here to support you every 
step of the way."
      description1="Our team will get back to you
as soon as possible."
      image={contact}
    />
  );
}

export default ContactUs;
