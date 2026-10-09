import { HandNote, Scribble } from "@/components/ui/Doodles";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2
            id="contact-title"
            className="mt-4 text-[clamp(2.4rem,6.5vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em]"
          >
            Let’s build something <Scribble kind="underline">remarkable</Scribble>.
          </h2>
          <HandNote rotate={-3} className="mt-5 text-2xl text-accent">
            I reply faster than my code compiles ⚡
          </HandNote>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Have a product challenge, AI automation project, cybersecurity inquiry, community meetup idea, or creative collaboration in mind? Drop a message below or email directly at{" "}
            <a href="mailto:dhwanilb8@gmail.com" className="font-semibold text-ink underline decoration-accent underline-offset-4">
              dhwanilb8@gmail.com
            </a>.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
