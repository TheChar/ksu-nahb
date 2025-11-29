'use client';

import { useState } from "react";

interface DisclaimerLinkProps {
  text: string;            // text shown as the link
  disclaimer: string;      // popup message
}

export default function DisclaimerLink({ text, disclaimer }: DisclaimerLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* LINK */}
      <a
        className="text-blue-600 underline cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {text}
      </a>

      {/* POPUP OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
            <p className="text-gray-700 mb-6">{disclaimer}</p>

            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-(--primary) text-white rounded-lg hover:bg-(--accent) hover:cursor-pointer transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* OPTIONAL ANIMATION (Tailwind custom) */
// Add to your globals.css or tailwind.css:
// @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
// .animate-fadeIn { animation: fadeIn 0.15s ease-out; }
