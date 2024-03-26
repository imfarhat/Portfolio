import React, { useState, useEffect } from "react";
import { GiShare } from "react-icons/gi";

const ShareButton = () => {
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");
  const [shareDescription, setShareDescription] = useState("");
  const shareImage = "/android-chrome-512x512.png"; // Path to the image in the public folder

  useEffect(() => {
    setShareUrl(window.location.origin);
    setShareTitle(document.title + " Web App");

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
          text: `${shareTitle}: ${shareUrl}\n${shareDescription}\n${shareImage}`, // Include title, URL, description, and image
          url: shareUrl,
          files: [], // Initialize files array
        };

        // Fetch the image file
        const response = await fetch(shareImage);
        const blob = await response.blob();
        const file = new File([blob], "android-chrome-512x512.png", {
          type: "image/png",
        });

        // Add the file to the files array
        data.files.push(file);

        await navigator.share(data);
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleShare} title="Share" className="header-promo-btn active:rotate-[360deg] transition md:duration-200 ease-in">
      <GiShare />
    </button>
  );
};

export default ShareButton;
