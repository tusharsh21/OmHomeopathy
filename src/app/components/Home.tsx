import { Phone, Award, Users, Clock, MapPin, Star, Activity, BadgeCheck, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { getBaseAssetUrl } from "../utils/base-path";

export function Home() {
  const clinicExteriorImage = getBaseAssetUrl("clinic_exterior.jpg");
  const clinicSignImage = getBaseAssetUrl("clinic_sign.jpg");

  const services = [
    { name: "Kidney Care", icon: "💎", desc: "Expert treatment for kidney stones and renal health." },
    { name: "Corona Recovery", icon: "🦠", desc: "Holistic support for post-viral recovery and immunity." },
    { name: "Chronic Diseases", icon: "❤️", desc: "Long-term solutions for persistent health issues." },
    { name: "Skin & Hair", icon: "🌸", desc: "Natural remedies for glowing skin and healthy hair." },
    { name: "Homeopathic Store", icon: "💊", desc: "Genuine homeopathic medicines at best prices." },
    { name: "General Wellness", icon: "🌿", desc: "Personalized care for your family's daily health." },
  ];

  const testimonials = [
    {
      name: "Ashutosh Sharma",
      condition: "General Health",
      text: "Excellent experience at all, Dr Ravindar Kumar is well experienced dr & good at diagnosis.",
      date: "a year ago"
    },
    {
      name: "Pradeep Yadav",
      condition: "Kidney & Corona",
      text: "Experience was very good when I visit clinic, and I feel that He is good Kidney Doctor and also helpful for Corona Disease recovery.",
      date: "5 years ago"
    },
    {
      name: "love solver",
      condition: "Patient Care",
      text: "The doctor here is very intelligent and pays full attention and is very careful towards the patient his medicines really suits us.",
      date: "5 years ago"
    },
    {
      name: "Navneesh Sharma",
      condition: "Clinic Environment",
      text: "Best clinic with friendly environment & best treatment by best doctors.",
      date: "6 years ago"
    },
    {
      name: "Rajesh tomar",
      condition: "Medicine Price",
      text: "Best homoeopatic doctor And suggestion good advice, and medicine good price.",
      date: "a year ago"
    },
    {
      name: "Raghav Rastogi",
      condition: "Clinic & Store",
      text: "Best homeopathic clinic and store😊",
      date: "2 months ago"
    }
  ];

  const reviewBreakdown = [
    { label: "5", width: "100%" },
    { label: "4", width: "10%" },
    { label: "3", width: "3%" },
    { label: "2", width: "2%" },
    { label: "1", width: "1%" },
  ];

  const trustPoints = [
    "5.0 stars on Google Maps",
    "4.9 stars on Justdial",
    "62 Google reviews",
    "102 Justdial ratings",
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={clinicExteriorImage}
            alt="Om Homeopathic Clinic Exterior" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Trusted Homeopathic Care in Meerut
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-foreground">
                Natural Healing. <br />
                <span className="text-primary italic">Personalized Care.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                We provide safe, effective, and affordable homeopathic treatment for a wide range of acute and chronic health conditions, and we also offer genuine homeopathic medicines at our clinic store. Our approach focuses on treating the root cause of illness, not just the symptoms.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 bg-white/85 rounded-full text-sm font-semibold text-foreground shadow-sm border border-border/60">
                  Genuine Homeopathic Medicines
                </span>
                <span className="px-4 py-2 bg-white/85 rounded-full text-sm font-semibold text-foreground shadow-sm border border-border/60">
                  German and Indian Brands
                </span>
              </div>
              <a
                href="tel:+919837188088"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform text-center"
              >
                <Phone className="size-5" />
                Call +91 98371 88088 to Book
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-20 -mt-12 pb-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[40px] border border-border/60 bg-white shadow-[0_30px_90px_rgba(26,26,26,0.08)]"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Trusted by Local Families
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Strong reviews on Google Maps and Justdial
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Patients trust Om Homeopathic Store & Clinic for thoughtful consultations, genuine medicines, and reliable long-term care in Meerut.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-border bg-[#fbfaf7] p-6">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Review Summary
                        </p>
                        <div className="mt-3 flex items-end gap-3">
                          <span className="text-6xl font-bold leading-none text-foreground">5.0</span>
                          <div className="pb-1">
                            <div className="flex gap-1 text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-5 fill-current" />
                              ))}
                            </div>
                            <p className="mt-2 text-sm font-semibold text-primary">62 Google reviews</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {reviewBreakdown.map((row) => (
                        <div key={row.label} className="grid grid-cols-[20px_1fr] items-center gap-3">
                          <span className="text-lg font-medium text-muted-foreground">{row.label}</span>
                          <div className="h-3 rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-amber-400"
                              style={{ width: row.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {trustPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 rounded-[24px] border border-border/70 bg-white px-4 py-4 shadow-sm"
                      >
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10">
                          <BadgeCheck className="size-5 text-primary" />
                        </div>
                        <span className="font-semibold text-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://maps.app.goo.gl/KNyAZxL4hw9Pk58N8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 font-semibold text-background transition-all hover:scale-105"
                  >
                    Read Google Reviews
                    <ExternalLink className="size-4" />
                  </a>
                  <a
                    href="tel:+919837188088"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    <Phone className="size-5 text-primary" />
                    Call the Clinic
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f5ef_0%,#ffffff_100%)] p-8 md:p-12 lg:p-14">
                <div className="absolute right-0 top-0 size-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative space-y-5">
                  <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Google Maps
                        </p>
                        <div className="mt-3 flex items-center gap-3">
                          <span className="text-5xl font-bold leading-none text-foreground">5.0</span>
                          <div>
                            <div className="flex gap-1 text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-5 fill-current" />
                              ))}
                            </div>
                            <p className="mt-2 text-base font-semibold text-primary">62 reviews</p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-[#eef7ff] px-3 py-2 text-sm font-bold text-[#1a73e8]">
                        Google
                      </div>
                    </div>
                  </div>

                  <div className="translate-x-4 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-2xl bg-[#198a1f] px-4 py-2 text-3xl font-bold text-white">
                        4.9
                      </span>
                      <div className="flex items-center gap-2 text-xl font-semibold text-foreground">
                        <Star className="size-5 fill-amber-400 text-amber-400" />
                        <span>102 Ratings</span>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                        <BadgeCheck className="size-4" />
                        Claimed
                      </div>
                    </div>
                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-foreground">
                      Om Homoeopathic Store & Clinic
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-base font-medium text-muted-foreground">
                      <div className="inline-flex items-center gap-2">
                        <MapPin className="size-4 text-primary" />
                        Jagriti Vihar, Meerut
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <BadgeCheck className="size-4 text-primary" />
                        13 Years in Healthcare
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "15+", icon: Award },
              { label: "Happy Patients", value: "2k+", icon: Users },
              { label: "Success Rate", value: "98%", icon: Activity },
              { label: "Expert Doctors", value: "Best in Class", icon: Star },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 text-center hover:shadow-md transition-shadow"
              >
                <stat.icon className="size-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          {/* Om Homeopathic Store Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 bg-primary/5 rounded-[60px] p-12 md:p-20 relative overflow-hidden"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">💊 Om Homeopathic Store</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We also provide high-quality German and Indian homeopathic medicines at our clinic store. You can visit us to buy authentic remedies, refill prescribed medicines, and get guidance on the right medicines from our team.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Authentic homeopathic medicines",
                    "German and Indian brands available",
                    "Medicines as per consultation",
                    "Easy repeat medicine refills",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-5 py-4 shadow-sm">
                      <span className="size-2.5 rounded-full bg-primary shrink-0" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-white rounded-full font-bold shadow-sm">German Medicines</span>
                  <span className="px-6 py-3 bg-white rounded-full font-bold shadow-sm">Indian Remedies</span>
                  <span className="px-6 py-3 bg-white rounded-full font-bold shadow-sm">Authentic Quality</span>
                </div>
                <a
                  href="tel:+919837188088"
                  className="mt-8 inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <Phone className="size-5" />
                  Call to Ask About Medicines
                </a>
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img src={clinicSignImage} alt="Clinic Store" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 tracking-tight">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: "✔", title: "Safe & Natural", desc: "100% natural treatments" },
              { icon: "✔", title: "No Side Effects", desc: "Completely safe for all ages" },
              { icon: "✔", title: "Personalized", desc: "Tailored consultations" },
              { icon: "✔", title: "Affordable", desc: "Quality care for everyone" },
              { icon: "✔", title: "Trusted", desc: "By thousands of local patients" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[40px] border border-border hover:border-primary/50 transition-all group">
                <div className="text-3xl text-primary mb-4 font-bold">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Care</h2>
            <p className="text-muted-foreground text-lg">
              We offer a wide range of homeopathic treatments tailored to your specific needs, 
              focusing on the root cause of the ailment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-3xl bg-white border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="text-4xl mb-6 bg-primary/5 size-16 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">What Our Patients Say</h2>
              <p className="text-muted-foreground text-lg">
                Real stories from patients who found healing and comfort at Om Homeopathic Clinic.
              </p>
            </div>
            <a 
              href="https://maps.app.goo.gl/KNyAZxL4hw9Pk58N8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View all 27+ reviews on Google <Star className="size-5 fill-primary" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.date} • {t.condition}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Visit Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-border flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20">
              <h2 className="text-4xl font-bold mb-8">Visit Om Homeopathic Clinic</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Our Location</div>
                    <p className="text-muted-foreground leading-relaxed">
                      383/6, Jagriti Vihar,<br />
                      Meerut, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Opening Hours</div>
                    <div className="text-muted-foreground">
                      <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p>Sun: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Contact Details</div>
                    <p className="text-muted-foreground">+91 98371 88088</p>
                    <p className="text-muted-foreground">+91 78951 85437</p>
                    <p className="text-muted-foreground">info@omhomeopathy.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a 
                  href="https://maps.app.goo.gl/KNyAZxL4hw9Pk58N8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-all"
                >
                  <MapPin className="size-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[400px] bg-muted relative">
              {/* Google Maps Embed UI Snippet mockup */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.5644837549!2d77.7289!3d28.9396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6569f688e70b%3A0xc39a48d88701041d!2sOm%20Homeopathic%20Clinic!5e0!3m2!1sen!2sin!4v1714380000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
