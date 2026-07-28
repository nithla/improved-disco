import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    '(min-width: 769px)': function () {
        const panels = gsap.utils.toArray('.panel');

        // Don't pin the last panel: there's nothing after it (yet) tall
        // enough to scroll it away, so it would stay stuck on screen.
        panels.slice(0, -1).forEach((panel) => {
            const isExperience = panel.classList.contains('experience');

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
                onUpdate: isExperience ? (self) => crossfadeExperience(panel, self.progress) : undefined,
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
