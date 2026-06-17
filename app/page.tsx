import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Showcase } from "@/components/showcase"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="grain relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  )
}
