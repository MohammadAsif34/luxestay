const secretKey = "hotel_key";

export const encrypt = (str) => {
  // 1. Scramble characters using the key (XOR)
  const scrambled = str
    .split("")
    .map((char, i) =>
      String.fromCharCode(
        char.charCodeAt(0) ^ secretKey.charCodeAt(i % secretKey.length),
      ),
    )
    .join("");

  // 2. Turn into Base64 (like btoa)
  return btoa(scrambled);
};

export const decrypt = (encoded) => {
  // 1. Reverse the Base64 (atob)
  const scrambled = atob(encoded);

  // 2. Run the same XOR logic to get the original back
  return scrambled
    .split("")
    .map((char, i) =>
      String.fromCharCode(
        char.charCodeAt(0) ^ secretKey.charCodeAt(i % secretKey.length),
      ),
    )
    .join("");
};
