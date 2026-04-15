"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        resize: boolean;
      }) => void;
    };
  }
}

type CalendlyEmbedProps = {
  url?: string;
};

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    if (!url) {
      return;
    }

    const root = document.getElementById("calendly-inline-widget");
    if (!root) {
      return;
    }

    root.innerHTML = "";

    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript && window.Calendly) {
      window.Calendly.initInlineWidget({ url, parentElement: root, resize: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      window.Calendly?.initInlineWidget({ url, parentElement: root, resize: true });
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [url]);

  if (!url) {
    return (
      <div className="panel p-8 md:p-10">
        <p className="eyebrow">Calendly setup needed</p>
        <h2 className="mt-4 font-display text-3xl text-ink">Add your booking link to activate scheduling.</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-steel">
          Set the <code>NEXT_PUBLIC_CALENDLY_URL</code> environment variable with your Calendly event URL.
          The embedded scheduler will appear here once the link is configured.
        </p>
      </div>
    );
  }

  return (
    <div className="panel overflow-hidden p-3 md:p-4">
      <div
        id="calendly-inline-widget"
        className="min-h-[700px] rounded-[1.5rem] bg-white"
        aria-label="Calendly scheduling widget"
      />
    </div>
  );
}
