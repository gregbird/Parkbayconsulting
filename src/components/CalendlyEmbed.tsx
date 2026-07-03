import { useEffect } from 'react';

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

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const el = document.getElementById('calendly-inline-widget');
    if (window.Calendly && el) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: el,
        prefill: {},
        utm: {},
      });
    }
  }, [url]);

  return (
    <div
      id="calendly-inline-widget"
      style={{
        minWidth: '320px',
        height: '700px',
        width: '100%',
      }}
    />
  );
}
