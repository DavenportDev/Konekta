import { useState } from "react";
import LanguageSelect from "./LanguageSelect.jsx";

export default function LanguagePage() {
  const [selected, setSelected] = useState("en");

  const languageHeaders = {
    en: "Choose your language",
    tl: "Piliin ang iyong wika",          // Tagalog
    ceb: "Pilia ang imong pinulongan",    // Cebuano
    pam: "Pili ing kekang amanung sisuan", // Kapampangan
    ilo: "Pilien ti pagsasao yo",         // Ilocano
    hil: "Pili-a ang imo nga linggwahe",  // Hiligaynon
    war: "Pili-a an imo yinaknan",        // Waray
    // international languages
    es: "Elige tu idioma",                 // Spanish
    fr: "Choisissez votre langue",        // French
    de: "Wählen Sie Ihre Sprache",        // German
    pt: "Escolha seu idioma",             // Portuguese
    ja: "言語を選択してください",          // Japanese
    zh: "选择您的语言",                   // Chinese
    ar: "اختر لغتك",                     // Arabic
    hi: "अपनी भाषा चुनें",                // Hindi
    ko: "언어를 선택하세요",               // Korean
    it: "Scegli la tua lingua",           // Italian
    ru: "Выберите ваш язык",              // Russian
  };

  return (
    <div className="text-konekta-text p-5 pt-0">
      <h2 className="text-lg font-bold mb-5 text-konekta-text">
        {languageHeaders[selected] || "Choose your language"}
      </h2>

      <LanguageSelect selected={selected} onSelect={setSelected} />

    </div>
  );
}