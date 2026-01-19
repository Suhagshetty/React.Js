import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|:;<>,.?/";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
        
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Field */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Password Length</span>
            <span className="font-semibold text-white">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between text-sm text-gray-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-indigo-500"
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-indigo-500"
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
