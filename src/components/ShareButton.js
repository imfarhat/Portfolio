const handleShare = async () => {
  try {
    if (navigator.share) {
      const shareContent = `${shareTitle}: ${shareUrl}\n${shareDescription}`; // Combine title, URL, and description
      const data = {
        title: shareTitle,
        text: shareContent,
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
