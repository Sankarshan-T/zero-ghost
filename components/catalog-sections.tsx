import {
    ArrowUpRight,
    Bike,
    BookOpen,
    Bot,
    CarFront,
    ChartNoAxesCombined,
    CircuitBoard,
    Code2,
    Cpu,
    Package,
    Plane,
    Rocket,
    ShieldCheck,
    Wrench,
} from "lucide-react";
import styles from "@/components/catalog-sections.module.css";

const courses = [
    {
        name: "Robotics Engineering",
        tag: "Beginner → Advanced",
        detail: "Hands-on training in designing, building and programming intelligent robotic systems from scratch. From basic mechanisms to fully autonomous bots.",
        color: "gold",
        art: "robotics",
        icon: Bot,
        layout: "courseFeature",
    },
    {
        name: "Coding & Programming",
        tag: "All levels",
        detail: "Learn Python, embedded systems, Arduino programming, and software development for real-world applications and automation projects.",
        color: "cyan",
        art: "coding",
        icon: Code2,
        layout: "",
    },
    {
        name: "Stock Market Mastery",
        tag: "Foundation → Pro",
        detail: "Strategic investment principles, market analysis, risk management, and financial intelligence for building long-term wealth.",
        color: "green",
        art: "markets",
        icon: ChartNoAxesCombined,
        layout: "",
    },
    {
        name: "Ethical Hacking",
        tag: "Intermediate → Expert",
        detail: "Cybersecurity fundamentals, penetration testing, digital defense strategies, and ethical hacking techniques used by professionals.",
        color: "violet",
        art: "security",
        icon: ShieldCheck,
        layout: "courseWide",
    },
    {
        name: "Electronics & IoT",
        tag: "Build connected things",
        detail: "Circuit design, sensor integration, microcontrollers, and Internet of Things development for smart connected devices.",
        color: "blue",
        art: "electronics",
        icon: CircuitBoard,
        layout: "",
    },
    {
        name: "Innovation Lab",
        tag: "Ideas → prototypes",
        detail: "A creative workshop environment where students build real projects, solve real problems, and develop entrepreneurial thinking.",
        color: "amber",
        art: "innovation",
        icon: Rocket,
        layout: "",
    },
];

const kits = [
    {
        name: "Beginner Robotics Kit",
        detail: "Complete starter kit with Arduino, sensors, servo motors, wires, breadboard, and step-by-step project guide. Perfect for age 10+.",
        price: "₹ 1,499 – ₹ 2,999",
        icon: Wrench,
        color: "gold",
    },
    {
        name: "Advanced Electronics Kit",
        detail: "Intermediate-level kit with Raspberry Pi, camera module, ultrasonic sensors, and motor drivers for complex automation projects.",
        price: "₹ 4,999 – ₹ 8,999",
        icon: Cpu,
        color: "cyan",
    },
    {
        name: "Robotics Handbook",
        detail: "Comprehensive printed guide covering theory, diagrams, code snippets, and 20+ projects across all difficulty levels.",
        price: "₹ 499 – ₹ 799",
        icon: BookOpen,
        color: "green",
    },
    {
        name: "Stock Market Workbook",
        detail: "Step-by-step workbook for learning market analysis, portfolio tracking, technical charting, and investment strategy building.",
        price: "₹ 399 – ₹ 699",
        icon: ChartNoAxesCombined,
        color: "amber",
    },
    {
        name: "Coding Crash Course Bundle",
        detail: "Physical notes and digital resources for Python and embedded C programming. Includes practice problems and mini-projects.",
        price: "₹ 299 – ₹ 599",
        icon: Code2,
        color: "violet",
    },
    {
        name: "Custom Project Kits",
        detail: "Tailored component kits built for specific project requirements — drones, bots, automated systems. Inquire for pricing.",
        price: "₹ 3,000+",
        icon: Package,
        color: "blue",
    },
];

const projects = [
    {
        name: "FPV Racing Drone",
        tag: "Build + Training",
        detail: "Custom-built first-person-view racing drone with carbon fiber frame, brushless motors, ESCs, and flight controller. Full build and flight training included.",
        price: "₹ 35,000+",
        icon: Plane,
        color: "gold",
    },
    {
        name: "Racer Car Bot",
        tag: "Custom chassis",
        detail: "High-speed autonomous racing robot with precision motor control, PID steering, and real-time sensor feedback. Engineered for speed and stability.",
        price: "₹ 32,000+",
        icon: CarFront,
        color: "cyan",
    },
    {
        name: "WarBot Combat Robot",
        tag: "Competition grade",
        detail: "Competition-focused armored robot with a robust chassis, remote-control system, and precision engineering. Built for supervised robotics events.",
        price: "₹ 40,000+",
        icon: Bot,
        color: "red",
    },
    {
        name: "Robo Scooter",
        tag: "Self-balancing",
        detail: "Self-balancing electric scooter robot using gyroscopic control systems and AI-assisted balance algorithms. Full electronics integration.",
        price: "₹ 38,000+",
        icon: Bike,
        color: "green",
    },
    {
        name: "CosmoClunch Bot",
        tag: "Multi-axis control",
        detail: "Advanced multi-limb robotic arm system with precision grip, programmable motion sequences, and real-world manipulation capability.",
        price: "₹ 45,000+",
        icon: Bot,
        color: "violet",
    },
    {
        name: "Custom Build",
        tag: "Fully custom",
        detail: "Have a unique project vision? Our team will design and build a custom robotic system tailored to your exact specifications and goals.",
        price: "₹ 5,000+",
        icon: Wrench,
        color: "amber",
    },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return <p className={styles.eyebrow}>{children}</p>;
}

export function CatalogSections() {
    return (
        <>
            <section id="courses" className={styles.section}>
                <div className={`${styles.container} py-20 sm:py-24`}>
                    <div className={`${styles.heading} mb-10`}>
                        <SectionEyebrow>{"LEARNING PATHS"}</SectionEyebrow>
                        <h2 className="font-heading text-4xl font-bold sm:text-5xl">Courses &amp; Programs</h2>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                            Hands-on learning paths for curious minds—from first circuits to advanced autonomous builds.
                        </p>
                    </div>

                    <div className={styles.courseGrid}>
                        {courses.map((course, index) => {
                            const Icon = course.icon;
                            return (
                                <article
                                    key={course.name}
                                    className={`${styles.courseCard} ${styles[course.color]} ${course.layout ? styles[course.layout] : ""}`}
                                    style={{ animationDelay: `${index * 90}ms` }}
                                >
                                    <div className={styles.courseArt} aria-hidden="true">
                                        {course.art === "robotics" && (
                                            <>
                                                <Bot className={`${styles.robotGhost} ${styles.robotGhostOne}`} />
                                                <Bot className={`${styles.robotGhost} ${styles.robotGhostTwo}`} />
                                                <Bot className={`${styles.robotGhost} ${styles.robotGhostThree}`} />
                                            </>
                                        )}
                                        {(course.art === "coding" || course.art === "security") && (
                                            <div className={styles.binaryRain}>
                                                <span>1 0 1 1 0 0 1 0 1 0 1 1</span>
                                                <span>0 1 0 1 1 0 0 1 0 1 0 0</span>
                                                <span>1 1 0 0 1 0 1 0 1 1 0 1</span>
                                                <span>0 0 1 1 0 1 0 1 1 0 1 0</span>
                                            </div>
                                        )}
                                        {course.art === "markets" && (
                                            <svg className={styles.marketLine} viewBox="0 0 240 110" fill="none">
                                                <path d="M2 86 34 74 58 80 83 49 105 58 132 30 157 44 183 18 208 30 238 8" />
                                                <path className={styles.marketFill} d="M2 86 34 74 58 80 83 49 105 58 132 30 157 44 183 18 208 30 238 8V110H2Z" />
                                            </svg>
                                        )}
                                        {course.art === "electronics" && <CircuitBoard className={styles.circuitGhost} />}
                                        {course.art === "innovation" && <Rocket className={styles.rocketGhost} />}
                                    </div>
                                    <div className="relative z-10">
                                        <div className={`${styles.icon} mb-5 flex size-11 items-center justify-center rounded-xl`}>
                                            <Icon className="size-5" />
                                        </div>
                                        <h3 className="font-heading text-xl font-bold sm:text-2xl">{course.name}</h3>
                                        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{course.detail}</p>
                                        <p className={styles.courseTag}>{course.tag}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="kits" className={`${styles.section} border-y border-border bg-card/30`}>
                <div className={`${styles.container} py-20 sm:py-24`}>
                    <div className={`${styles.heading} mb-10`}>
                        <SectionEyebrow>{"SERVICES & PRODUCTS"}</SectionEyebrow>
                        <h2 className="font-heading text-4xl font-bold sm:text-5xl">Kits &amp; Resources</h2>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                            Hands-on kits and guides that turn theory into tangible, working builds.
                        </p>
                    </div>

                    <div className={styles.resourceGrid}>
                        {kits.map((kit, index) => {
                            const Icon = kit.icon;
                            return (
                                <article key={kit.name} className={`${styles.resourceCard} ${styles[kit.color]}`} style={{ animationDelay: `${index * 75}ms` }}>
                                    <div className={styles.resourceIcon}><Icon /></div>
                                    <h3 className="font-heading text-lg font-bold">{kit.name}</h3>
                                    <p>{kit.detail}</p>
                                    <div className={styles.resourcePrice}>{kit.price}</div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="projects" className={styles.section}>
                <div className={`${styles.container} py-20 sm:py-24`}>
                    <div className={`${styles.heading} mb-10`}>
                        <SectionEyebrow>{"PRO LEVEL"}</SectionEyebrow>
                        <h2 className="font-heading text-4xl font-bold sm:text-5xl">Elite Projects</h2>
                        <div className={styles.ageNotice}><ShieldCheck /> Age 14+ only — starting from ₹30,000+</div>
                    </div>

                    <div className={styles.projectGrid}>
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <article key={project.name} className={`${styles.eliteCard} ${styles[project.color]}`} style={{ animationDelay: `${index * 80}ms` }}>
                                    <div className={styles.eliteCardTop}>
                                        <div className={styles.eliteIcon}><Icon /></div>
                                        <span className={styles.eliteTag}>{project.tag}</span>
                                    </div>
                                    <Icon className={styles.eliteGhost} aria-hidden="true" />
                                    <h3 className="font-heading text-lg font-bold">{project.name}</h3>
                                    <p className={styles.eliteDetail}>{project.detail}</p>
                                    <div className={styles.elitePrice}>{project.price}</div>
                                    <a className={styles.eliteLink} href="#contact" aria-label={`Ask us about ${project.name}`}>
                                        Ask about this build <ArrowUpRight />
                                    </a>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
