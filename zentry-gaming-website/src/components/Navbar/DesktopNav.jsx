import AudioToggle from "./AudioToggle";
import { navItems } from "./data/navItems";

const DesktopNav = ({ isAudioPlaying, onAudioToggle }) => {
  return (
    <nav className="hidden items-center gap-8 md:flex md:pr-5">
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-hover-btn"
          >
            {item}
          </a>
        ))}
      </div>

      <AudioToggle
        isAudioPlaying={isAudioPlaying}
        onToggle={onAudioToggle}
      />
    </nav>
  );
};

export default DesktopNav;