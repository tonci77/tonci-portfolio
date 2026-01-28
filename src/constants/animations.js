/**
 * Shared animation presets for world-class motion consistency.
 */

export const TIMES = {
    SEQUENCE_6S: [0, 0.08, 0.16, 0.24, 0.32, 0.40, 0.48, 1],
};

// Pulsing stats animation for Metrics
export const getMetricPulse = (index) => {
    const isFirst = index === 0;
    const isSecond = index === 1;

    return {
        scale: isFirst
            ? [1, 0.9, 1.1, 0.95, 1.05, 1, 1, 1]
            : isSecond
                ? [1, 1, 0.9, 1.1, 0.95, 1.05, 1, 1]
                : [1, 1, 1, 0.9, 1.1, 0.95, 1.05, 1, 1],
        filter: isFirst
            ? ["brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)"]
            : isSecond
                ? ["brightness(1)", "brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1)", "brightness(1)"]
                : ["brightness(1)", "brightness(1)", "brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1.5)", "brightness(1)", "brightness(1)", "brightness(1)"],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };
};

export const getColorPulse = (index) => {
    const isFirst = index === 0;
    const isSecond = index === 1;

    const white = "#ffffff";
    const amber = "#fbbf24";

    return {
        color: isFirst
            ? [white, amber, white, amber, white, white, white, white]
            : isSecond
                ? [white, white, amber, white, amber, white, white, white]
                : [white, white, white, amber, white, amber, white, white, white],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };
};

export const FADE_UP = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
