import { Outlet, Link, useLocation } from "react-router";
import { Home, Stethoscope, User, Phone, MapPin } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/services", icon: Stethoscope, label: "Services" },
    { path: "/about", icon: User, label: "About Dr." },
    { path: "/contact", icon: MapPin, label: "Visit Us" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd] flex flex-col font-sans">
      {/* Premium Desktop Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="size-12 bg-primary rounded-[18px] flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
              <span className="text-white text-2xl font-bold">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none text-foreground tracking-tight">
                Om Homeopathic
              </h1>
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mt-1">
                Store & Clinic
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="ml-4 h-6 w-[1px] bg-border/50" />
            <a
              href="tel:+919837188088"
              className="ml-4 inline-flex items-center gap-2 bg-foreground text-background px-8 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-foreground/10 hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="size-4" />
              Call to Book
            </a>
          </nav>

          {/* Mobile Call Icon */}
          <a
            href="tel:+919837188088"
            className="lg:hidden size-11 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20"
          >
            <Phone className="size-5" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border/50 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">ॐ</span>
                </div>
                <h2 className="text-2xl font-bold">Om Homeopathic Clinic</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Dedicated to providing natural, safe, and effective homeopathic treatments 
                and genuine homeopathic medicines for your entire family. Led by Dr. Ravindar Kumar with 15+ years of experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Quick Links</h3>
              <ul className="space-y-4">
                {navItems.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Location</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                383, Tarouli, Sector 6,<br />
                Jagrati Vihar, Meerut,<br />
                Uttar Pradesh 250004
              </p>
            </div>
          </div>
          <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm font-medium">
              © 2026 Om Homeopathic Clinic. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <nav className="fixed bottom-6 left-6 right-6 lg:hidden z-50">
        <div className="bg-foreground/95 backdrop-blur-lg border border-white/10 rounded-[32px] p-2 flex items-center justify-between shadow-2xl shadow-black/20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1.5 px-6 py-3 rounded-[24px] transition-all ${
                  isActive
                    ? "bg-white text-foreground shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Icon className="size-5" />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
