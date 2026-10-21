import Image from "next/image";
import { Activity, ArrowDown, Code2, Cpu, Database, Radio } from "lucide-react";
import styles from "@/components/brand-hero.module.css";

const specialties = [
    { label: "Robotics", href: "#courses" },
    { label: "Coding", href: "#courses" },
    { label: "AI & Machine Learning", href: "#courses" },
    { label: "Ethical Hacking", href: "#courses" },
];

export function BrandHero() {
    return (
        <section id="top" className={styles.hero}>
            <div className={styles.stars} aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => (
                    <i
                        key={index}
                        style={{
                            top: `${(index * 47) % 91}%`,
                            left: `${(index * 73) % 97}%`,
                            "--star-index": index,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            <div className={styles.mesh} aria-hidden="true">
                <svg viewBox="0 0 440 440" fill="none">
                    <circle cx="220" cy="220" r="182" />
                    <ellipse cx="220" cy="220" rx="182" ry="72" />
                    <ellipse cx="220" cy="220" rx="182" ry="124" transform="rotate(60 220 220)" />
                    <ellipse cx="220" cy="220" rx="182" ry="124" transform="rotate(-60 220 220)" />
                    <path d="m72 135 105-84 118 34 72 100-42 130-106 73-117-49-41-105 58-99 174-50 114 94-53 144-132 65-116-77-14-119 83-142 125 7 93 92-24 135-99 96-134-40-72-106 45-125 119-61 117 72 40 115-77 105-134 31-112-64-49-117 57-112 115-41 120 44" />
                    <path d="m72 135 105 172 118-222m-223 20 223 152 72-152M177 51l0 256m118-222-118 222m-76-8 192-183M41 234l326-49m-308 154 308-124M220 38v364m-182-182h364" />
                    <circle cx="220" cy="38" r="3" />
                    <circle cx="367" cy="185" r="3" />
                    <circle cx="326" cy="315" r="3" />
                    <circle cx="220" cy="402" r="3" />
                    <circle cx="73" cy="315" r="3" />
                    <circle cx="41" cy="234" r="3" />
                    <circle cx="72" cy="135" r="3" />
                </svg>
            </div>

            <div className={`${styles.code} ${styles.codeTop}`} aria-hidden="true">
                <Code2 />
                <code><span>const</span> fly = () =&gt; {"{}"}</code>
            </div>
            <div className={`${styles.code} ${styles.codeLeft}`} aria-hidden="true">
                <Cpu />
                <code><span>build</span>{'("something real")'}</code>
            </div>
            <div className={`${styles.code} ${styles.codeRight}`} aria-hidden="true">
                <Radio />
                <code>SYS_STATUS <span>~ ONLINE</span></code>
            </div>
            <div className={`${styles.code} ${styles.codeLink}`} aria-hidden="true">
                <Database />
                <code>DATA_LINK <span>~ SECURE</span></code>
            </div>
            <div className={`${styles.code} ${styles.codeThermal}`} aria-hidden="true">
                <Activity />
                <code>CORE_TEMP <span>36°C</span></code>
            </div>

            <div className={styles.content}>
                <Image
                    className={styles.logo}
                    src="/logo.png"
                    alt="ZeroGhost Projects logo"
                    width={84}
                    height={84}
                    priority
                />
                <h1 className={`${styles.wordmark} font-heading`}>
                    <span>ZERO</span> <strong>GHOST</strong>
                </h1>
                <p className={styles.subtitle}>PROJECTS</p>
                <p className={styles.intro}>
                    The future belongs to those who build it not those who wait for it. Robotics,
                    coding, AI, and cybersecurity training for the next generation of innovators.
                </p>
                <div className={styles.specialties}>
                    {specialties.map((item) => (
                        <a href={item.href} key={item.label}>{item.label}</a>
                    ))}
                </div>
            </div>

            <a className={styles.scrollCue} href="#courses">
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown />
            </a>
        </section>
    );
}
