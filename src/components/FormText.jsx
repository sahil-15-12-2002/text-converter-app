import React, { useState, useRef } from "react";

export default function FormText(props) {
  const [text, setText] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [wordFrequency, setWordFrequency] = useState({});
  const [showWordFreq, setShowWordFreq] = useState(false);
  const textAreaRef = useRef(null);

  const handleUpClick = () => {
    setPreviewText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setPreviewText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    setPreviewText("");
    setWordFrequency({});
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(previewText || text);
      props.showAlert("Text copied to clipboard!", "success");
    } catch (err) {
      props.showAlert("Failed to copy text", "danger");
    }
  };

  const handleExtraSpace = () => {
    setPreviewText(text.split(/\s+/).join(" ").trim());
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleTitleCase = () => {
    setPreviewText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
    props.showAlert("Converted to title case!", "success");
  };

  const handleSentenceCase = () => {
    setPreviewText(text.replace(/(^\w|\.\s+\w)/g, (txt) => txt.toUpperCase()));
    props.showAlert("Converted to sentence case!", "success");
  };

  const handleRemovePunctuation = () => {
    setPreviewText(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
    props.showAlert("Punctuation removed!", "success");
  };

  const handleReverseText = () => {
    setPreviewText(text.split('').reverse().join(''));
    props.showAlert("Text reversed!", "success");
  };

  const handleExtractEmails = () => {
    const emails = text.match(/[\w\.-]+@[\w\.-]+\.\w+/g) || [];
    const emailText = emails.join('\n');
    setPreviewText(emailText);
    props.showAlert(`Found ${emails.length} email(s)!`, "success");
  };

  const handleExtractNumbers = () => {
    const numbers = text.match(/\d+/g) || [];
    setPreviewText(numbers.join('\n'));
    props.showAlert(`Found ${numbers.length} number(s)!`, "success");
  };

  const handleFindAndReplace = () => {
    if (!findText) {
      props.showAlert("Please enter text to find", "warning");
      return;
    }
    const newText = text.replaceAll(findText, replaceText);
    setPreviewText(newText);
    const count = (text.match(new RegExp(findText, 'g')) || []).length;
    props.showAlert(`Replaced ${count} occurrence(s)!`, "success");
  };

  const handleWordFrequency = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    setWordFrequency(frequency);
    setShowWordFreq(true);
    props.showAlert("Word frequency calculated!", "success");
  };

  const handleDownloadText = () => {
    const contentToDownload = previewText || text;
    const blob = new Blob([contentToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text-content.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    props.showAlert("Text downloaded!", "success");
  };

  const handleTextToSpeech = () => {
    const contentToSpeak = previewText || text;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(contentToSpeak);
      window.speechSynthesis.speak(utterance);
      props.showAlert("Text-to-speech started!", "success");
    } else {
      props.showAlert("Text-to-speech not supported in this browser", "warning");
    }
  };

  const handleOnChange = (e) => setText(e.target.value);

  const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  const readingTime = (words / 200).toFixed(1);
  const avgWordLength = words > 0 ? (charactersNoSpaces / words).toFixed(1) : 0;

  const basicButtons = [
    { label: "UPPERCASE", icon: "🔠", handler: handleUpClick, color: "primary" },
    { label: "lowercase", icon: "🔡", handler: handleLoClick, color: "primary" },
    { label: "Title Case", icon: "🏷️", handler: handleTitleCase, color: "primary" },
    { label: "Sentence Case", icon: "📝", handler: handleSentenceCase, color: "primary" },
    { label: "Clear Text", icon: "🗑️", handler: handleClearClick, color: "secondary" },
    { label: "Copy Text", icon: "📋", handler: handleCopy, color: "success" },
    { label: "Remove Spaces", icon: "🧹", handler: handleExtraSpace, color: "warning" },
    { label: "Reverse Text", icon: "🔄", handler: handleReverseText, color: "primary" },
  ];

  const advancedButtons = [
    { label: "Remove Punct.", icon: "✂️", handler: handleRemovePunctuation, color: "warning" },
    { label: "Extract Emails", icon: "📧", handler: handleExtractEmails, color: "primary" },
    { label: "Extract Numbers", icon: "🔢", handler: handleExtractNumbers, color: "primary" },
    { label: "Word Frequency", icon: "📊", handler: handleWordFrequency, color: "success" },
    { label: "Download Text", icon: "💾", handler: handleDownloadText, color: "secondary" },
    { label: "Text-to-Speech", icon: "🔊", handler: handleTextToSpeech, color: "success" },
  ];

  return (
    <div className="form-page">
      <div className="form-card">
        <h1 className="form-title">
          <span className="title-icon">✨</span>
          Advanced Text Transformer
        </h1>

        <textarea
          className="text-input"
          ref={textAreaRef}
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Start typing or paste your text here to transform it..."
        />

        <div className="preview-section">
          <h3 className="preview-title">👁️ Preview Output</h3>
          <textarea
            className="text-input preview-textarea"
            rows="8"
            value={previewText}
            readOnly
            placeholder="Your transformed text will appear here..."
          />
        </div>

        <div className="operations-section">
          <h3 className="section-title">Basic Operations</h3>
          <div className="button-grid">
            {basicButtons.map((btn, index) => (
              <button
                key={index}
                className={`btn btn-${btn.color}`}
                onClick={btn.handler}
                disabled={text.length === 0 && !['Clear Text', 'Copy Text'].includes(btn.label)}
              >
                <span>{btn.icon}</span>
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="operations-section">
          <h3 className="section-title">Advanced Operations</h3>
          <div className="button-grid">
            {advancedButtons.map((btn, index) => (
              <button
                key={index}
                className={`btn btn-${btn.color}`}
                onClick={btn.handler}
                disabled={text.length === 0 && !['Download Text', 'Text-to-Speech'].includes(btn.label)}
              >
                <span>{btn.icon}</span>
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="operations-section">
          <h3 className="section-title">Find & Replace</h3>
          <div className="find-replace-grid">
            <input
              type="text"
              className="form-input"
              placeholder="Find text..."
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Replace with..."
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
            />
            <button
              className="btn btn-warning"
              onClick={handleFindAndReplace}
              disabled={!findText || text.length === 0}
            >
              <span>🔍</span>
              <span>Replace All</span>
            </button>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">{words}</div>
          <div className="stat-name">Words</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{characters}</div>
          <div className="stat-name">Characters</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{charactersNoSpaces}</div>
          <div className="stat-name">No Spaces</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{sentences}</div>
          <div className="stat-name">Sentences</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{paragraphs}</div>
          <div className="stat-name">Paragraphs</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{readingTime}m</div>
          <div className="stat-name">Read Time</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{avgWordLength}</div>
          <div className="stat-name">Avg Word Length</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{Object.keys(wordFrequency).length}</div>
          <div className="stat-name">Unique Words</div>
        </div>
      </div>

      {showWordFreq && Object.keys(wordFrequency).length > 0 && (
        <div className="frequency-card">
          <h3 className="frequency-title">📊 Word Frequency Analysis</h3>
          <div className="frequency-grid">
            {Object.entries(wordFrequency)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 20)
              .map(([word, count]) => (
                <div key={word} className="frequency-item">
                  <span className="word">{word}</span>
                  <span className="count">{count}</span>
                </div>
              ))}
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => setShowWordFreq(false)}
          >
            Close Analysis
          </button>
        </div>
      )}
    </div>
  );
}
