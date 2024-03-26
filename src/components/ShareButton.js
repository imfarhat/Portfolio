import React, { useState, useEffect } from "react";
import { GiShare } from "react-icons/gi";

const ShareButton = () => {
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");
  const [shareDescription, setShareDescription] = useState("");

  useEffect(() => {
    setShareUrl(window.location.origin);
    setShareTitle(document.title);

    // Get the description from the meta tag
    const descriptionMetaTag = document.querySelector(
      'meta[name="description"]'
    );
    if (descriptionMetaTag) {
      setShareDescription(descriptionMetaTag.content);
    }
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        const data = {
          title: shareTitle,
          text: `<b>${shareTitle}</b>: ${shareDescription}\n`, // Bold the title
          url: shareUrl,
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
