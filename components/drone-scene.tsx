import { Code2, Cpu, Radio, ScanLine } from "lucide-react";
import { DroneAnimation } from "@/components/drone-animation";
import styles from "@/components/drone-scene.module.css";

const telemetry = [
    { label: "ALTITUDE", value: "24.8 m" },
    { label: "SIGNAL", value: "98%" },
    { label: "FLIGHT MODE", value: "MANUAL" },
];

export function DroneScene() {
    return (
        <div
            className={styles.scene}
            role="img"
            aria-label="3D-style FPV racing drone hovering with rotating propellers and flight telemetry"
        >
            <div className={styles.grid} />
            <div className={`${styles.orbit} ${styles.orbitOne}`} />
            <div className={`${styles.orbit} ${styles.orbitTwo}`} />
            <div className={`${styles.orbit} ${styles.orbitThree}`} />
            <div className={styles.glow} />

            <div className={`${styles.label} ${styles.labelTop}`}>
                <ScanLine className="size-3.5" />
                <span>Flight Systems</span>
            </div>

            <div className={styles.droneFloat}>
                <DroneAnimation />
            </div>

            <div className={`${styles.codeFloat} ${styles.codeFloatOne}`}><Code2 /><span>const <b>fly</b> = () =&gt; {"{}"}</span></div>
            <div className={`${styles.codeFloat} ${styles.codeFloatTwo}`}><Cpu /><span>ARMED <b>~</b></span></div>
            <div className={`${styles.codeFloat} ${styles.codeFloatThree}`}><Radio /><span>2.4 <b>GHz</b></span></div>

            <div className={styles.telemetry}>
                {telemetry.map((item) => (
                    <div key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                    </div>
                ))}
            </div>

            <div className={`${styles.label} ${styles.labelBottom}`}>
                <span className={styles.statusDot} />
                <span>LIVE BUILD / ZERO GHOST LAB</span>
            </div>
        </div>
    );
}