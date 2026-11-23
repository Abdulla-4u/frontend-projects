import clsx from "clsx";

const AudioToggle = ({ isAudioPlaying, onToggle }) => {
  return (
    <button
      type="button"
      aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
      aria-pressed={isAudioPlaying}
      onClick={onToggle}
      className="flex items-center gap-0.5"
    >
      {[1, 2, 3, 4].map((bar) => (
        <span
          key={bar}
          className={clsx("indicator-line", {
            active: isAudioPlaying,
          })}
          style={{ animationDelay: `${bar * 0.1}s` }}
        />
      ))}
    </button>
  );
};

export default AudioToggle;