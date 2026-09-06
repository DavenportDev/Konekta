export default function LanguageSelect({ selected, onSelect }) {
  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "jp", label: "日本語", flag: "🇯🇵" },
    { code: "cn", label: "中文", flag: "🇨🇳" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
    { code: "kr", label: "한국어", flag: "🇰🇷" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {languages.map((lang) => {
        const isSelected = selected === lang.code;

        return (
          <button
            key={lang.code}
            onClick={() => onSelect(lang.code)}
            className={`
              flex items-center gap-3 p-4 rounded-xl border
              transition-all duration-200
              bg-konekta-surfaceLight
              border-konekta-surfaceGlass
              hover:bg-konekta-purpleDark hover:border-konekta-purple
              ${isSelected ? "bg-konekta-purple text-white border-konekta-purple" : ""}
            `}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}