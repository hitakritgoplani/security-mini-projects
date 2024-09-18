import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import '../styles/Home.css'

function Home() {
  const [plaintext, setPlaintext] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [decryptionKey, setDecryptionKey] = useState('');
  const [textToDecrypt, setTextToDecrypt] = useState('');

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(textToDecrypt, decryptionKey).toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      setDecryptedText('Decryption failed. Please check your encrypted text and secret key.');
    }
  };

  return (
    <div className='home-root'>
      <header>AES Encryption/Decryption</header>
      <div className='content-root'>
        <div className='left'>
          <h3>Encrypt Text</h3>
          <div className='encryption-input-root'>
            <label htmlFor='encrypt-plain-text'>Enter Plain Text for Encryption:</label>
            <textarea id='encrypt-plain-text' value={plaintext} onChange={(e) => setPlaintext(e.target.value)} />
          </div>
          <div className='encryption-key-root'>
            <label htmlFor='encryption-secret-key'>Secret Key:</label>
            <input id='encryption-secret-key' type="password" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
          </div>
          <button onClick={handleEncrypt}>Encrypt</button>
          <div className='encryption-output-root'>
            <label>Encrypted Text:</label>
            <textarea value={encryptedText} readOnly />
          </div>
        </div>
        <div className='right'>
          <h3>Decrypt Text</h3>
          <div className='decryption-input-root'>
            <label htmlFor='decrypt-encrypted-text'>Enter Encrypted Text for Decryption:</label>
            <textarea id='decrypt-encrypted-text' value={textToDecrypt} onChange={(e) => setTextToDecrypt(e.target.value)} />
          </div>
          <div className='decryption-key-root'>
            <label htmlFor='decryption-secret-key'>Secret Key:</label>
            <input id='decryption-secret-key' type="password" value={decryptionKey} onChange={(e) => setDecryptionKey(e.target.value)} />
          </div>
          
          <button onClick={handleDecrypt}>Decrypt</button>
          <div className='decryption-output-root'>
            <label>Decrypted Text:</label>
            <textarea value={decryptedText} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;