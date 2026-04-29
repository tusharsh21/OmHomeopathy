import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Get in <span className="text-primary italic">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Visit Om Homeopathic Clinic for a professional consultation. We're here to help you on your journey to natural health.
          </motion.p>
        </div>

        {/* Address + Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[40px] shadow-sm border border-border p-10 hover:shadow-xl hover:shadow-primary/5 transition-all">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="size-6 text-primary" />
                </div>
                📍 Clinic Address
              </h2>
              <address className="not-italic text-xl text-muted-foreground leading-relaxed mb-8">
                <p className="font-bold text-foreground text-2xl mb-2">Om Homeopathic Clinic & Store</p>
                <p>383/6, Jagriti Vihar,</p>
                <p>Meerut, Uttar Pradesh, India</p>
              </address>
              <a
                href="https://maps.app.goo.gl/KNyAZxL4hw9Pk58N8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              >
                <MapPin className="size-5" />
                View on Google Maps
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-[40px] shadow-sm border border-border p-10">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="size-5 text-primary" />
                  Hours
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-bold text-foreground">Mon – Sat</p>
                    <p>9:00 AM – 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Sunday</p>
                    <p>10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[40px] shadow-sm border border-border p-10">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="size-5 text-primary" />
                  Contact
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-bold text-foreground">Phone</p>
                    <a href="tel:+919837188088" className="block hover:text-primary transition-colors">+91 98371 88088</a>
                    <a href="tel:+917895185437" className="block hover:text-primary transition-colors">+91 78951 85437</a>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <a href="mailto:info@omhomeopathy.com" className="hover:text-primary transition-colors">info@omhomeopathy.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] shadow-sm border border-border p-10">
              <h2 className="text-2xl font-bold mb-6">Homeopathic Medicine Store</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our clinic also has a homeopathic medicine store where you can buy genuine medicines, refill ongoing prescriptions, and get guidance on the right remedies.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Genuine homeopathic medicines",
                  "German and Indian brands",
                  "Medicines as advised by doctor",
                  "Convenient refill support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-primary/5 px-5 py-4 font-medium text-foreground"
                  >
                    <span className="size-2.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="tel:+919837188088"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <Phone className="size-5" />
                Call for Medicine Enquiry
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-[40px] overflow-hidden min-h-[500px] border border-border shadow-2xl relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.5644837549!2d77.7289!3d28.9396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6569f688e70b%3A0xc39a48d88701041d!2sOm%20Homeopathic%20Clinic!5e0!3m2!1sen!2sin!4v1714380000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </motion.div>
        </div>

        {/* Conditions We Treat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] border border-border shadow-sm p-12 md:p-16 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🩺 Conditions We Treat</h2>
          <p className="text-muted-foreground text-lg mb-10">
            We offer safe, effective, and affordable homeopathic treatment for:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Diabetes",
              "Arthritis",
              "Joint Pain",
              "Migraine",
              "Psoriasis",
              "Eczema",
              "Herpes",
              "Scabies",
              "Thyroid Disorders",
              "All Types of Allergies",
              "Constipation & Acidity",
              "Piles",
              "Calcium & Iron Deficiency",
              "Asthma & Pneumonia",
              "Uterine Fibroids",
              "White Discharge",
              "Menstrual Problems",
              "Prostate Issues",
              "De-addiction",
              "Kidney & Gall Bladder Stones",
              "Burning Urination",
              "Hypertension",
              "Hair Fall & Greying",
              "Acne & Pimples",
            ].map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors"
              >
                <span className="size-2 rounded-full bg-primary shrink-0" />
                {condition}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] border border-border shadow-sm p-12 md:p-16 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">💬 Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "✔", title: "Safe & Natural", desc: "100% natural treatment with no chemicals" },
              { icon: "✔", title: "No Side Effects", desc: "Completely safe for all ages" },
              { icon: "✔", title: "Personalized", desc: "Individualized consultation for every patient" },
              { icon: "✔", title: "Affordable", desc: "Quality care at accessible prices" },
              { icon: "✔", title: "Trusted Locally", desc: "Trusted by thousands in Meerut" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-primary/5 text-center">
                <div className="text-3xl text-primary font-bold mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-[60px] p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">📞 Call to Book</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            To book a consultation, call our clinic directly on the number below.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+919837188088"
              className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
            >
              <Phone className="size-6" />
              Call +91 98371 88088 to Book
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
