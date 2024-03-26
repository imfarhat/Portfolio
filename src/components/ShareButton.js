import React, { useState, useEffect } from "react";
import { GiShare } from "react-icons/gi";

const ShareButton = () => {
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");

  useEffect(() => {
    setShareUrl(window.location.origin);
    setShareTitle(document.title);

  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        const data = {
          title: `${shareTitle} Web App Link`,
          text: `${shareTitle}:`,
          url: `${shareUrl}\n\n`,
        };

        await navigator.share(data);
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleShare} title="Share (s)" className="header-promo-btn">
      <GiShare />
    </button>
  );
};

export default ShareButton;
