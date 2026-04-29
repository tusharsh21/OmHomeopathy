import { Phone, CheckCircle2, ShieldCheck, HeartPulse, Microscope } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const serviceCategories = [
    {
      category: "Chronic Diseases",
      icon: "❤️",
      services: [
        "Diabetes & Hypertension",
        "Arthritis & Joint Pain",
        "Thyroid Disorders",
        "Migraine & Headaches",
        "Asthma & Pneumonia",
      ],
    },
    {
      category: "Specialized Care",
      icon: "💎",
      services: [
        "Kidney & Gall Bladder Stones",
        "De-addiction Recovery",
        "Urinary Problems",
        "Prostate Issues",
        "Calcium & Iron Deficiency",
      ],
    },
    {
      category: "Skin & Hair",
      icon: "🌸",
      services: [
        "Psoriasis & Eczema",
        "Herpes & Scabies",
        "Acne & Pimples",
        "Hair Fall & Greying",
        "All Types of Allergies",
      ],
    },
    {
      category: "Women's Health",
      icon: "👩",
      services: [
        "Uterine Fibroids",
        "Menstrual Problems",
        "White Discharge",
        "Hormonal Balance",
        "PCOD/PCOS support",
      ],
    },
    {
      category: "Digestive Health",
      icon: "🔬",
      services: [
        "Constipation",
        "Acidity & Gastritis",
        "Piles treatment",
        "Liver Health",
        "Metabolism boost",
      ],
    },
    {
      category: "Clinic Store",
      icon: "💊",
      services: [
        "German Homeopathy",
        "Indian Homeopathy",
        "High-quality Medicines",
        "Expert Consultation",
        "Authentic Remedies",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 font-['Montserrat']">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Comprehensive <span className="text-primary italic">Natural Healing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            At Om Homeopathic Clinic, we specialize in treating the root cause of your health 
            concerns with personalized, side-effect-free homeopathic remedies. We also run a homeopathic medicine store with genuine medicines available at the clinic.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[40px] shadow-sm border border-border p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="text-5xl mb-8 size-20 bg-primary/5 flex items-center justify-center rounded-3xl group-hover:bg-primary group-hover:scale-110 transition-all">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">{category.category}</h2>
              <ul className="space-y-4">
                {category.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-center gap-3 font-medium"
                  >
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Conditions We Treat */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">🩺 Conditions We Treat</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide effective homeopathic treatment for a wide range of acute and chronic conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Diabetes", "Arthritis", "Joint Pain", "Migraine",
              "Psoriasis", "Eczema", "Herpes", "Scabies",
              "Thyroid Disorders", "All Types of Allergies", "Constipation & Acidity", "Piles",
              "Calcium & Iron Deficiency", "Asthma & Pneumonia", "Uterine Fibroids", "White Discharge",
              "Menstrual Problems", "Prostate Issues", "De-addiction", "Kidney & Gall Bladder Stones",
              "Burning Urination", "Hypertension", "Hair Fall & Greying", "Acne & Pimples",
            ].map((condition, i) => (
              <motion.div
                key={condition}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="flex items-center gap-3 p-5 bg-white border border-border rounded-2xl text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <span className="size-2.5 rounded-full bg-primary shrink-0" />
                {condition}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32 rounded-[50px] bg-white border border-border shadow-sm p-12 md:p-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Homeopathic Medicines Available</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Along with consultation and treatment, we also provide genuine homeopathic medicines at our clinic store. Patients can buy prescribed medicines, refill ongoing medicines, and get trusted products from German and Indian homeopathic brands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Genuine homeopathic medicines",
              "German and Indian brands",
              "Prescription-based guidance",
              "Repeat medicine refills",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-primary/5 px-5 py-5 font-semibold text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute -top-12 -left-12 size-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Why Choose Homeopathy?</h2>
            <div className="grid md:grid-cols-3 gap-12 mb-16 text-left">
              <div className="bg-white rounded-[32px] p-10 shadow-sm border border-border/50">
                <ShieldCheck className="size-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">100% Safe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Natural substances derived from plants and minerals. Safe for infants, children, and pregnant women.
                </p>
              </div>
              <div className="bg-white rounded-[32px] p-10 shadow-sm border border-border/50">
                <HeartPulse className="size-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Holistic Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just treat symptoms; we treat you as a whole person—physical, mental, and emotional.
                </p>
              </div>
              <div className="bg-white rounded-[32px] p-10 shadow-sm border border-border/50">
                <Microscope className="size-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Root Cause Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Detailed analysis to find the underlying cause of your ailment for permanent and sustainable healing.
                </p>
              </div>
            </div>
            <a
              href="tel:+919837188088"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
            >
              <Phone className="size-5" />
              Call to Book Your Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
