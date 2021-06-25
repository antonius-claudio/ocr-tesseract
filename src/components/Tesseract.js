import Tesseract from 'tesseract.js';

export const getTesseract = async (link) => {
  const { data: { text } } = await Tesseract.recognize(
    `/assets/${link}.jpg`,
    'eng',
    { logger: m => console.log(m) }
  );
  console.log(text)
  return text;
};