import { Award, GraduationCap, Heart, Users, Phone, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { getBaseAssetUrl } from "../utils/base-path";

export function About() {
  const doctorImage = getBaseAssetUrl("doctor_real.jpg");
  const clinicSignImage = getBaseAssetUrl("clinic_sign.jpg");

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            >
              Meet Your <span className="text-primary italic">Expert Doctor</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Dr. Ravindar Kumar is a highly experienced homeopathic physician dedicated to 
              providing holistic and natural healing for a variety of health conditions.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={doctorImage}
                  alt="Dr. Ravindar Kumar"
                  className="h-full w-full object-cover"
                  style={{ transform: "rotate(-90deg) scale(1.42)" }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="size-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+ Years</div>
                    <div className="text-muted-foreground">Professional Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">Dr. Ravindar Kumar</h2>
                <p className="text-primary text-xl font-medium mb-6">Senior Homeopathic Consultant</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With over 15 years of dedicated practice, Dr. Ravindar Kumar has built a 
                  reputation for excellence in diagnosis and personalized patient care. 
                  He believes that homeopathy is not just a system of medicine, but a 
                  comprehensive way to restore health naturally.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <GraduationCap className="size-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">Expert in Classical Homeopathy and Advanced Diagnosis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="size-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Specialization</h3>
                    <p className="text-sm text-muted-foreground">Kidney Disorders, Corona Recovery, Skin & Chronic Diseases.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Expert in complex diagnostic cases",
                  "Personalized treatment protocols",
                  "Genuine homeopathic medicine store",
                  "Holistic approach to patient well-being"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Treatment Philosophy */}
          <div className="bg-primary/5 rounded-[60px] p-12 md:p-20 mb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-primary/10 select-none">
              <Heart className="size-64" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <Heart className="size-8 text-primary" />
                  Treatment Philosophy
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    "I believe in treating the person, not just the disease. Every patient is
                    unique, and so is their healing journey. My approach focuses on understanding
                    the root cause of illness rather than just managing symptoms."
                  </p>
                  <p>
                    "At Om Homeopathic Clinic, we prioritize patient comfort and thorough 
                    consultations. Whether it's a chronic condition or post-viral recovery, 
                    our goal is to restore the body's natural balance."
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="-mx-12 w-[calc(100%+6rem)] overflow-hidden rounded-3xl border-4 border-white shadow-xl md:mx-0 md:w-full"
              >
                <img src={clinicSignImage} alt="Om Homeopathic Clinic Sign" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">Clinical Expertise</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Kidney Stone Care",
                "Corona Recovery",
                "Chronic Skin Issues",
                "Hair Fall Solutions",
                "Thyroid Management",
                "Respiratory Care",
                "Digestive Disorders",
                "Immunity Boosting",
                "Pediatric Homeopathy",
                "General Wellness"
              ].map((expertise) => (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  key={expertise}
                  className="px-8 py-4 bg-white border border-border text-foreground font-bold rounded-full shadow-sm"
                >
                  {expertise}
                </motion.span>
              ))}
            </div>
            <div className="mt-20">
              <a
                href="tel:+919837188088"
                className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                <Phone className="size-5" />
                Call to Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
