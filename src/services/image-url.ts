import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;

// In JavaScript, the slice() method is used to extract a section of a string
// and return a new string. It takes two parameters: the starting index (inclusive)
// and the ending index (exclusive) of the substring to be extracted.

// In the getCroppedImageUrl function, url.slice(0, index) extracts
// the substring from the beginning of the original URL up to the index where "media/" ends,
// while url.slice(index) extracts
//  the substring starting from the index where "media/" ends until the end of the original URL.

// So, essentially, url.slice(0, index) captures the part of the URL before "media/"
// (including "media/"), and url.slice(index) captures the part of the URL after "media/".

// By combining these two substrings with the added "crop/600/400/",
// you get the modified URL pointing to the cropped image.
