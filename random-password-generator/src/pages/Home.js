import React, { useState } from 'react';
import '../styles/Home.css'

export default function Home() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(15);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  const decreaseLength = () => {
    if (passwordLength > 1) {
      setPasswordLength(passwordLength - 1);
    }
  };

  const increaseLength = () => {
    if (passwordLength <= 49){
        setPasswordLength(passwordLength + 1);
    }
  };

  const generatePassword = () => {
    let charSet = '';
    if (includeUppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeSpecialChars) charSet += '!@#$%^&*()_+';
    if (includeNumbers) charSet += '0123456789';

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += charSet[Math.floor(Math.random() * charSet.length)];
    }

    setPassword(password);
  };

  return (
    <div className="home-root">
        <div className="generated-password">Your generated password is <span className='gen-pass'>{password}</span></div>
        <label htmlFor="slide">Password Length</label>
        <div className="slider-div">
            <button onClick={decreaseLength} className="btn" id="minus">-</button>
            <input
            type="range"
            min="1"
            max="50"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="options"
            id="length"
            />
            <span id='slide' className="slider-value">{passwordLength}</span>
            <button onClick={increaseLength} className="btn" id="plus">+</button>
        </div>
        <div className="options-div">
            <input
            type="checkbox"
            className="options"
            id="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="uppercase">Uppercase</label>
            <input
            type="checkbox"
            className="options"
            id="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <label htmlFor="lowercase">Lowercase</label>
            <input
            type="checkbox"
            className="options"
            id="specialchar"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            <label htmlFor="specialchar">Special Characters</label>
            <input
            type="checkbox"
            className="options"
            id="number"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="number">Numbers</label>
        </div>
        <button className='gen-btn' onClick={generatePassword}>Generate</button>
    </div>
  );
}