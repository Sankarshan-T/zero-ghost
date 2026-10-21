import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BrandHero } from "@/components/brand-hero";
import { CatalogSections } from "@/components/catalog-sections";
import styles from "@/components/home.module.css";
import {
  Mail,
  Menu,
  MoveRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className={`${styles.nav} border-b border-border/70`}>
        <div className={`${styles.navInner} ${styles.container} flex items-center justify-between`}>
          <a
            href="#top"
            className={`${styles.brand} flex items-center gap-2 font-heading text-sm font-bold tracking-[0.08em]`}
          >
            <Image
              src={"/logo.png"}
              alt="ZeroGhost"
              height={32}
              width={32}
            />
            ZERO<span>GHOST</span>
          </a>

          <div className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:flex">
            <a
              className="transition-colors hover:text-foreground"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="#kits"
            >
              Kits
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="transition-colors hover:text-foreground"
              href="#contact"
            >
              Contact
            </a>
          </div>

          <Button
            asChild
            size="icon-sm"
            variant="outline"
            className="sm:hidden text-primary"
            aria-label="Open menu"
          >
            <a href="#contact">
              <Menu />
            </a>
          </Button>
        </div>
      </nav>

      <BrandHero />

      <CatalogSections />

      <section
        id="contact"
        className={`${styles.contact} ${styles.container} border-t border-border py-16 sm:py-20`}
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={styles.contactEyebrow}>{"// 05 — GET IN TOUCH"}</p>
            <h2 className="font-heading text-4xl font-bold leading-none sm:text-6xl">
              Let&apos;s
              <br />
              <span className="text-primary">make </span>
              cool stuff.
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-muted-foreground">
              Whether you&apos;re a student, parent, investor, or corporate sponsor, we&apos;d love to hear from you. Reach out to our team and let&apos;s build something extraordinary together.
            </p>

            <a
              href="mailto:zeroghostservices@gmail.com"
              className="mt-8 flex items-center gap-3 text-sm font-semibold hover:text-primary"
            >
              <Mail className="size-4 text-primary" />
              zeroghostservices@gmail.com
            </a>
          </div>

          <form
            className="grid gap-5"
            action="mailto:zeroghostservices@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Name
                <input
                  name="name"
                  required
                  className="h-12 border-b border-border bg-transparent text-base tracking-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="h-12 border-b border-border bg-transparent text-base tracking-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Message
              <textarea
                name="message"
                required
                className="min-h-32 resize-y border-b border-border bg-transparent py-3 text-base tracking-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                placeholder="What are we building?"
              />
            </label>

            <div>
              <Button type="submit" size="lg">
                Send message <MoveRight />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}