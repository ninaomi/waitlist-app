import Hero from "@/components/hero"
import WaitlistForm from "@/components/waitlist-form"

import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WaitlistForm />
      
      <Footer />
    </div>
  )
}

