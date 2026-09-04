import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowUpRight,
  Cpu,
  Mail,
  Menu,
  MoveRight,
  Radio,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-border/70 px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-1 font-heading text-lg font-bold tracking-tight"
        >
          <Image
            src={"/logo.png"}
            alt="logo"
            height={40}
            width={40}
          />
          ZERO<span className="text-primary">GHOST</span>
        </a>

        <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:flex">
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
            className="text-primary transition-colors hover:text-foreground"
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
      </nav>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32"
      >
        <div className="relative z-10">
          <h1 className="max-w-4xl font-heading text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl">
            BUILD
            <br />
            <span className="text-primary">ANYTHING</span> YOURSELVES.
          </h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground">
            ZeroGhost makes advanced but easy to understand hardware kits, and tools for people who like to understand how things work.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#kits">
                Explore our kits <MoveRight />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="#projects">See the work</a>
            </Button>
          </div>
        </div>

        <div className="group hover:-translate-1 hover:shadow-[4px_4px_0] transition relative mx-auto aspect-square w-full max-w-md border border-border bg-card p-2 shadow-[12px_12px_0] shadow-primary sm:p-8">
          <div className="absolute left-0 top-0 h-12 w-12 border-r border-b group-hover:bg-primary transition border-primary" />
          <div className="absolute bottom-0 right-0 h-12 w-12 border-l border-t group-hover:bg-primary transition border-primary" />
          <div className="absolute right-0 top-0 h-12 w-12 border-l border-b group-hover:bg-black transition border-primary" />
          <div className="absolute bottom-0 left-0 h-12 w-12 border-r border-t group-hover:bg-black transition border-primary" />

          <Image
            src="/logo.png"
            alt="ZeroGhost"
            fill
            className="object-contain p-12 sm:p-20"
            priority
          />
        </div>
      </section>

      <section
        id="kits"
        className="border-y border-border bg-card/40"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="font-heading text-4xl font-bold sm:text-5xl">
              Kits for everyone
            </h2>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              All the fully funciional kits ZeroGhost offers
            </p>
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              {
                name: "Item 1",
                tag: "tag-1",
                detail:
                  "dlfhglsfhkjmlikvfmivkmfvk;lmfkdl",
                color: "bg-primary",
              },
              {
                name: "item-2",
                tag: "tag2",
                detail:
                  "b,cmfxlkffkdgirgdglbfkfgofdkl;foggidkojikhudyfhfisSSS",
                color: "bg-emerald-400",
              },
              {
                name: "item 3",
                tag: "TAG-3",
                detail:
                  "yrghwbfvghvbdgfvuyfhdrdjfvixcydfvi yvhf",
                color: "bg-orange-400",
              },
            ].map((kit, index) => (
              <article
                key={kit.name}
                className="group flex min-h-80 flex-col justify-between bg-background p-6 transition-colors hover:bg-muted sm:p-8"
              >
                <div>
                  <div
                    className={`mb-10 flex size-12 items-center justify-center ${kit.color} text-background`}
                  >
                    <Cpu className="size-5" />
                  </div>

                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {index + 1} - {kit.tag}
                  </p>

                  <h3 className="font-heading text-2xl font-bold">
                    {kit.name}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                    {kit.detail}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary"
                >
                  View kit
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>

            <h2 className="font-heading text-4xl font-bold sm:text-5xl">
              Cool
              <br />
              projects.
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground">
              A list of crazy projects you can make with our kits and components.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {[
              {
                title: "FPV Racing drone",
                type: "Custom-built first person view racing drone",
                amt: "₹ 35,000",
                icon: Radio,
              },
              {
                title: "Combat Robot",
                type: "Armored battle robot built for combat competitions. Including robot chasis, weapon systems and more.",
                amt: "₹ 40,000",
                icon: Sparkles,
              },
              {
                title: "Robo Scooter",
                type: "Self-balancing electric scooter robot using gyroscopic control systems and AI-assisted balance algorithms. Full electronics integration.",
                amt: "₹ 38,000",
                icon: Wrench,
              },
              {
                title: "And a lot more!",
                type: "Contact us to know all the projects we offer including custom built robots.",
                amt: "Contact Us",
                icon: User,
              },
            ].map((project) => {
              const Icon = project.icon;

              return (
                <a
                  href="#contact"
                  key={project.title}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6"
                >
                  <Icon className="size-5 text-primary" />

                  <div>
                    <h3 className="font-heading text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {project.type}
                    </p>
                  </div>

                  <span className="flex items-center gap-3 text-xs text-muted-foreground">
                    {project.amt}
                    <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-heading text-5xl font-bold leading-none sm:text-7xl">
              Let&apos;s
              <br />
              <span className="text-primary">make </span>
              cool stuff.
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-muted-foreground">
              Whether you're a student, parent, investor, or corporate sponsor, we'd love to hear from you. Reach out to our team and let's build something extraordinary together.
            </p>

            <a
              href="mailto:hello@zeroghost.studio"
              className="mt-8 flex items-center gap-3 text-sm font-semibold hover:text-primary"
            >
              <Mail className="size-4 text-primary" />
              zeroghostservices@gmail.com
            </a>
          </div>

          <form
            className="grid gap-5"
            action="mailto:hello@zeroghost.studio"
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