import { useRegisterSW } from "virtual:pwa-register/react";
import { FiRefreshCw, FiX } from "react-icons/fi";
import { useState } from "react";

const PWAUpdatePrompt = () => {
  const [dismissed, setDismissed] = useState(false);

  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh && !offlineReady) return null;
  if (dismissed) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101827]/95 p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8DE2C5]/10 text-[#8DE2C5]">
          <FiRefreshCw size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">
            {needRefresh
              ? "New version available"
              : "App ready for offline use"}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {needRefresh
              ? "Update to get the latest improvements."
              : "You can now use the app without internet."}
          </p>
        </div>

        {needRefresh && (
          <button
            onClick={() => updateServiceWorker(true)}
            className="shrink-0 rounded-lg bg-[#8DE2C5] px-3 py-2 text-xs font-semibold text-[#071711] transition hover:bg-[#A7EBD5]"
          >
            Update
          </button>
        )}

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notification"
          className="shrink-0 text-slate-500 transition hover:text-white"
        >
          <FiX size={17} />
        </button>
      </div>
    </div>
  );
};

export default PWAUpdatePrompt;