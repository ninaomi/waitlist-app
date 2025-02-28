import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_25%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
         
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to the <span className="text-primary">waitlist</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We're building something amazing and we want you to be the first to know when we launch. Join our waitlist
            to get early access.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

