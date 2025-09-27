// import { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText as GSAPSplitText } from 'gsap/SplitText';
// import { gsap }  from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

// const SplitText = ({
//   text,
//   className = '',
//   delay = 100,
//   duration = 0.6,
//   ease = 'power3.out',
//   splitType = 'chars',
//   from = { opacity: 0, y: 40 },
//   to = { opacity: 1, y: 0 },
//   threshold = 0.1,
//   rootMargin = '-100px',
//   textAlign = 'center',
//   tag = 'p',
//   onLetterAnimationComplete
// }) => {
//   const ref = useRef(null);
//   const animationCompletedRef = useRef(false);
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     if (document.fonts.status === 'loaded') {
//       setFontsLoaded(true);
//     } else {
//       document.fonts.ready.then(() => {
//         setFontsLoaded(true);
//       });
//     }
//   }, []);

//   useGSAP(
//     () => {
//       if (!ref.current || !text || !fontsLoaded) return;
//       const el = ref.current;

//       if (el._rbsplitInstance) {
//         try {
//           el._rbsplitInstance.revert();
//         } catch (_) {
//           /* noop */
//         }
//         el._rbsplitInstance = null;
//       }

//       const startPct = (1 - threshold) * 100;
//       const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
//       const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
//       const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
//       const sign =
//         marginValue === 0
//           ? ''
//           : marginValue < 0
//             ? `-=${Math.abs(marginValue)}${marginUnit}`
//             : `+=${marginValue}${marginUnit}`;
//       const start = `top ${startPct}%${sign}`;

//       let targets;
//       const assignTargets = self => {
//         if (splitType.includes('chars') && self.chars.length) targets = self.chars;
//         if (!targets && splitType.includes('words') && self.words.length) targets = self.words;
//         if (!targets && splitType.includes('lines') && self.lines.length) targets = self.lines;
//         if (!targets) targets = self.chars || self.words || self.lines;
//       };

//       const splitInstance = new GSAPSplitText(el, {
//         type: splitType,
//         smartWrap: true,
//         autoSplit: splitType === 'lines',
//         linesClass: 'split-line',
//         wordsClass: 'split-word',
//         charsClass: 'split-char',
//         reduceWhiteSpace: false,
//         onSplit: self => {
//           assignTargets(self);
//           const tween = gsap.fromTo(
//             targets,
//             { ...from },
//             {
//               ...to,
//               duration,
//               ease,
//               stagger: delay / 1000,
//               scrollTrigger: {
//                 trigger: el,
//                 start,
//                 once: true,
//                 fastScrollEnd: true,
//                 anticipatePin: 0.4
//               },
//               onComplete: () => {
//                 animationCompletedRef.current = true;
//                 onLetterAnimationComplete?.();
//               },
//               willChange: 'transform, opacity',
//               force3D: true
//             }
//           );
//           return tween;
//         }
//       });

//       el._rbsplitInstance = splitInstance;

//       return () => {
//         ScrollTrigger.getAll().forEach(st => {
//           if (st.trigger === el) st.kill();
//         });
//         try {
//           splitInstance.revert();
//         } catch (_) {
//           /* noop */
//         }
//         el._rbsplitInstance = null;
//       };
//     },
//     {
//       dependencies: [
//         text,
//         delay,
//         duration,
//         ease,
//         splitType,
//         JSON.stringify(from),
//         JSON.stringify(to),
//         threshold,
//         rootMargin,
//         fontsLoaded,
//         onLetterAnimationComplete
//       ],
//       scope: ref
//     }
//   );

//   const renderTag = () => {
//     const style = {
//       textAlign,
//       overflow: 'hidden',
//       display: 'inline-block',
//       whiteSpace: 'normal',
//       wordWrap: 'break-word',
//       willChange: 'transform, opacity'
//     };
//     const classes = `split-parent ${className}`;
//     switch (tag) {
//       case 'h1':
//         return (
//           <h1 ref={ref} style={style} className={classes}>
//             {text}
//           </h1>
//         );
//       case 'h2':
//         return (
//           <h2 ref={ref} style={style} className={classes}>
//             {text}
//           </h2>
//         );
//       case 'h3':
//         return (
//           <h3 ref={ref} style={style} className={classes}>
//             {text}
//           </h3>
//         );
//       case 'h4':
//         return (
//           <h4 ref={ref} style={style} className={classes}>
//             {text}
//           </h4>
//         );
//       case 'h5':
//         return (
//           <h5 ref={ref} style={style} className={classes}>
//             {text}
//           </h5>
//         );
//       case 'h6':
//         return (
//           <h6 ref={ref} style={style} className={classes}>
//             {text}
//           </h6>
//         );
//       default:
//         return (
//           <p ref={ref} style={style} className={classes}>
//             {text}
//           </p>
//         );
//     }
//   };
//   return renderTag();
// };

// export default SplitText;
import React, { useEffect, useMemo, useRef } from "react";
import "./SplitText.css"; // optional: CSS fallback (see below)

export default function SplitText({
  text = "",
  by = "chars",      // "chars" or "words"
  startDelay = 0,    // seconds
  stagger = 0.03,    // seconds
  className = ""
}) {
  const rootRef = useRef(null);

  // Prepare items once per text change
  const items = useMemo(() => {
    if (by === "words") {
      return text.split(" ").map((w, i) => ({ key: i, val: w }));
    }
    return text.split("").map((ch, i) => ({ key: i, val: ch }));
  }, [text, by]);

  useEffect(() => {
    // run animations on client only
    let ctx;
    let mounted = true;

    (async () => {
      if (!mounted || !rootRef.current) return;

      // dynamic import of gsap to avoid SSR/build-time resolution issues
      let gsap;
      try {
        const mod = await import("gsap");
        gsap = mod.gsap || mod.default || mod;
      } catch (err) {
        // gsap not available — do nothing (CSS fallback will handle it)
        return;
      }

      // try to import ScrollTrigger plugin (optional)
      try {
        const st = await import("gsap/ScrollTrigger");
        const ScrollTrigger = st.ScrollTrigger || st.default || st;
        if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        // ignore if not available
      }

      // try SplitText plugin (different bundlers sometimes need .js)
      try {
        const st = await import("gsap/SplitText");
        const SplitText = st.SplitText || st.default || st;
        if (SplitText) gsap.registerPlugin(SplitText);
      } catch (e1) {
        try {
          const st2 = await import("gsap/SplitText.js");
          const SplitText2 = st2.SplitText || st2.default || st2;
          if (SplitText2) gsap.registerPlugin(SplitText2);
        } catch (e2) {
          // plugin not available — it's ok, we will animate spans without SplitText plugin
        }
      }

      // create a context so animation is scoped to this component and can be reverted
      ctx = gsap.context(() => {
        const els = rootRef.current.querySelectorAll(".split-item");
        if (!els || els.length === 0) return;

        gsap.fromTo(
          els,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger, duration: 0.45, ease: "power2.out", delay: startDelay }
        );
      }, rootRef);
    })();

    return () => {
      mounted = false;
      if (ctx && ctx.revert) ctx.revert();
    };
  }, [items, stagger, startDelay]);

  return (
    <span className={`split-text ${className}`} ref={rootRef} aria-hidden={false}>
      {items.map((it, i) => {
        const delay = (startDelay + i * stagger).toFixed(3) + "s";
        const content = by === "words" ? it.val + (i < items.length - 1 ? "\u00A0" : "") : it.val;
        return (
          <span
            key={it.key}
            className="split-item"
            style={{
              display: "inline-block",
              // CSS fallback if GSAP is not present; will animate by animationDelay
              animationDelay: delay,
            }}
          >
            {content}
          </span>
        );
      })}
    </span>
  );
}
