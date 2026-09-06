import { useState } from "react";
import LanguageSelect from "./LanguageSelect.jsx";

export default function LanguagePage() {
  const [selected, setSelected] = useState("en");

  return (
    <div className="bg-konekta-bg text-konekta-text p-6">
      <h1 className="text-2xl font-bold mb-4 text-konekta-purple">Choose your language</h1>

      <LanguageSelect selected={selected} onSelect={setSelected} />

      <p className="mt-6 text-konekta-textMuted">
        Selected: {selected}
      </p>
    </div>
  );
}