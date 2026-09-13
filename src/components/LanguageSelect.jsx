export default function LanguageSelect({ selected, onSelect }) {
  const languages = [
    { code: "en", label: "English", region: "United Kingdom", flag: "🇬🇧" },
    { code: "tl", label: "Tagalog", region: "Philippines", flag: "🇵🇭" },
    { code: "ceb", label: "Cebuano", region: "Philippines", flag: "🇵🇭" },
    { code: "pam", label: "Kapampangan", region: "Philippines", flag: "🇵🇭" },
    { code: "ilo", label: "Ilocano", region: "Philippines", flag: "🇵🇭" },
    { code: "hil", label: "Hiligaynon", region: "Philippines", flag: "🇵🇭" },
    { code: "war", label: "Waray", region: "Philippines", flag: "🇵🇭" },

    // international languages
    { code: "es", label: "Español", region: "Spain", flag: "🇪🇸" },
    { code: "fr", label: "Français", region: "France", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", region: "Germany", flag: "🇩🇪" },
    { code: "pt", label: "Português", region: "Brazil", flag: "🇧🇷" },
    { code: "ja", label: "日本語", region: "Japan", flag: "🇯🇵" },
    { code: "zh", label: "中文", region: "China", flag: "🇨🇳" },
    { code: "ar", label: "العربية", region: "Saudi Arabia", flag: "🇸🇦" },
    { code: "hi", label: "हिन्दी", region: "India", flag: "🇮🇳" },
    { code: "ko", label: "한국어", region: "South Korea", flag: "🇰🇷" },
    { code: "it", label: "Italiano", region: "Italy", flag: "🇮🇹" },
    { code: "ru", label: "Русский", region: "Russia", flag: "🇷🇺" },
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
              flex items-center gap-3 p-2 rounded-xl border
              transition-all duration-200
              hover:bg-konekta-purple hover:border-konekta-glass
              ${isSelected ? "bg-konekta-purple text-white border-konekta-surface-glass" : "bg-konekta-surface-light border-konekta-surface-glass"}
            `}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span className="font-medium text-left">
              {lang.label}<br />
              <span className="text-sm text-konekta-text-muted">
                {lang.region}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}