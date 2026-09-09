import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: object;
        utm: object;
      }) => void;
    };
  }
}

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      const el = containerRef.current;
      if (cancelled || !el || !window.Calendly) return;
      el.innerHTML = '';
      window.Calendly.initInlineWidget({
        url,
        parentElement: el,
        prefill: {},
        utm: {},
      });
    };

    if (window.Calendly) {
      init();
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
      if (!script) {
        script = document.createElement('script');
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', init);
      const poll = window.setInterval(() => {
        if (window.Calendly) {
          window.clearInterval(poll);
          init();
        }
      }, 200);
      return () => {
        cancelled = true;
        script?.removeEventListener('load', init);
        window.clearInterval(poll);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      style={{
        minWidth: '320px',
        height: '700px',
        width: '100%',
      }}
    />
  );
}
