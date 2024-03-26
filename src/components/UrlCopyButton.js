import React, { useState, useEffect } from "react";
import { MdOutlineContentCopy, MdLibraryAddCheck } from "react-icons/md";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.origin);
  }, []);

  const copyToClipboard = async (e) => {
    try {
      const textToCopy = `${shareUrl}`;
      await navigator.clipboard.writeText(textToCopy);
      // console.log("Copied to clipboard");
      e.target.disabled = true; // Disable the button after clicking
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        e.target.disabled = false; // Re-enable the button after 5 seconds
      }, 5000);
    } catch (error) {
      console.error("Error copying:", error);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="header-promo-btn"
      title="Copy URL"
      disabled={copied}
    >
      {copied ? <MdLibraryAddCheck /> : <MdOutlineContentCopy />}
    </button>
  );
};

export default CopyButton;
