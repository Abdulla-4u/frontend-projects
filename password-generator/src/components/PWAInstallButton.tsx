import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

const PWAInstallButton = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();

      setInstallPrompt(
        event as BeforeInstallPromptEvent,
      );
    };

    const handleInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleInstallPrompt,
    );

    window.addEventListener(
      "appinstalled",
      handleInstalled,
    );

    // Check if already running as an installed app
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleInstallPrompt,
      );

      window.removeEventListener(
        "appinstalled",
        handleInstalled,
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();

    const { outcome } = await installPrompt.userChoice;

    if (outcome === "accepted") {
      setInstalled(true);
    }

    setInstallPrompt(null);
  };

  if (installed || !installPrompt) return null;

  return (
    <button
      onClick={handleInstall}
      className="inline-flex items-center gap-2 rounded-xl border border-[#8DE2C5]/20 bg-[#8DE2C5]/[0.08] px-3 py-2 text-sm font-medium text-[#8DE2C5] transition hover:bg-[#8DE2C5]/[0.14]"
    >
      <FiDownload size={16} />
      Install App
    </button>
  );
};

export default PWAInstallButton;