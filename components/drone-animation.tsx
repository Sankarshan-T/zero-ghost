"use client";

import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";
import { useCallback, useEffect, useRef } from "react";
import styles from "@/components/drone-scene.module.css";

export function DroneAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<DotLottie | null>(null);
    const visibleRef = useRef(false);
    const reducedMotionRef = useRef(true);

    const syncPlayback = useCallback(() => {
        const player = playerRef.current;
        if (!player) return;

        if (visibleRef.current && !reducedMotionRef.current) {
            player.play();
        } else {
            player.pause();
        }
    }, []);

    const setPlayer = useCallback(
        (player: DotLottie | null) => {
            playerRef.current = player;
            syncPlayback();
        },
        [syncPlayback],
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateMotionPreference = () => {
            reducedMotionRef.current = motionPreference.matches;
            syncPlayback();
        };

        updateMotionPreference();
        motionPreference.addEventListener("change", updateMotionPreference);

        const observer = new IntersectionObserver(
            ([entry]) => {
                visibleRef.current = entry.isIntersecting;
                syncPlayback();
            },
            { threshold: 0.1 },
        );
        observer.observe(container);

        return () => {
            motionPreference.removeEventListener("change", updateMotionPreference);
            observer.disconnect();
        };
    }, [syncPlayback]);

    return (
        <div ref={containerRef} className={styles.animation} aria-hidden="true">
            <DotLottieReact
                src="/animations/drone.lottie"
                loop
                dotLottieRefCallback={setPlayer}
                useFrameInterpolation={false}
                renderConfig={{ devicePixelRatio: 1 }}
            />
        </div>
    );
}
