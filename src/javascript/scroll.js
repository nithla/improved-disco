import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// The last 15% of each pinned panel's scroll range is reserved for
// crossfading the next panel in over it, rather than letting the next
// panel arrive by ordinary document scroll (which reads as sliding up
// from below the screen instead of appearing within the frame).
const HANDOFF_START = 0.85;

ScrollTrigger.matchMedia({
    '(min-width: 769px)': function () {
        const panels = gsap.utils.toArray('.panel');

        // Every panel but the first starts hidden; it's revealed via
        // crossfade during the previous panel's pin tail, then settles
        // to full opacity once its own pin takes over.
        gsap.set(panels.slice(1), { autoAlpha: 0, yPercent: 6 });

        // Don't pin the last panel: there's nothing after it (yet) tall
        // enough to scroll it away, so it would stay stuck on screen.
        panels.slice(0, -1).forEach((panel, i) => {
            const isExperience = panel.classList.contains('experience');
            const nextPanel = panels[i + 1];

            if (isExperience) {
                setUpExperienceStages(panel);
            }

            ScrollTrigger.create({
                trigger: panel,
                start: 'top top',
                end: isExperience ? '+=200%' : '+=100%',
                pin: true,
                // The extended experience panel needs its extra scroll
                // distance actually reserved, or the next panel starts
                // sliding in before the internal crossfade finishes.
                pinSpacing: isExperience,
                onEnter: () => settlePanel(panel),
                onEnterBack: () => settlePanel(panel),
                onLeave: () => settlePanel(nextPanel),
                onUpdate: (self) => {
                    if (isExperience) {
                        crossfadeExperience(panel, self.progress);
                    }
                    crossfadeToNext(panel, nextPanel, self.progress);
                },
            });
        });
    },
});

function setUpExperienceStages(panel) {
    const skills = panel.querySelector('.experience__stage--skills');
    gsap.set(skills, { autoAlpha: 0, yPercent: 6 });
}

function crossfadeExperience(panel, progress) {
    const cards = panel.querySelector('.experience__stage--cards');
    const skills = panel.querySelector('.experience__stage--skills');
    // Cards own the first half of the pin's scroll range, skills the second.
    const transition = gsap.utils.clamp(0, 1, (progress - 0.3) / 0.4);

    gsap.set(cards, { autoAlpha: 1 - transition, yPercent: -6 * transition });
    gsap.set(skills, { autoAlpha: transition, yPercent: 6 * (1 - transition) });
}

// Fades the current panel out and the next one in, over the current
// panel's tail — with the next panel temporarily overlaid at the frame's
// coordinates (`.panel--peek`) so it crossfades in place instead of
// arriving via normal document scroll.
function crossfadeToNext(panel, nextPanel, progress) {
    if (!nextPanel) {
        return;
    }

    if (progress < HANDOFF_START) {
        nextPanel.classList.remove('panel--peek');
        return;
    }

    nextPanel.classList.add('panel--peek');
    const t = gsap.utils.clamp(0, 1, (progress - HANDOFF_START) / (1 - HANDOFF_START));
    gsap.set(panel, { autoAlpha: 1 - t });
    gsap.set(nextPanel, { autoAlpha: t, yPercent: 6 * (1 - t) });
}

// The incoming panel has fully taken over: drop the temporary overlay
// positioning and let it sit at full opacity in its normal place (which,
// thanks to the pin's reserved scroll space, is the same spot on screen).
function settlePanel(panel) {
    if (!panel) {
        return;
    }
    panel.classList.remove('panel--peek');
    gsap.set(panel, { autoAlpha: 1, yPercent: 0 });
}
