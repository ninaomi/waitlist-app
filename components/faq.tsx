"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "When will the product launch?",
    answer: "We're planning to launch in Q2 2024. Join our waitlist to be notified as soon as we go live.",
  },
  {
    question: "Will there be a free tier?",
    answer: "Yes, we'll offer a free tier with core functionality. Premium features will be available in paid plans.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "When you join our waitlist, you'll be among the first to get access when we launch. We'll also send you exclusive updates and early-bird offers.",
  },
  {
    question: "Can I request specific features?",
    answer:
      "We love hearing from our future users. After joining the waitlist, you'll receive a welcome email where you can share your feature requests.",
  },
  {
    question: "Will there be mobile apps available?",
    answer:
      "We're focusing on a web-first approach for our initial launch, with mobile apps planned for later in our roadmap.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden bg-background/50">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

