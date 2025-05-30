import db from '../db/firebase.js';
import genAI from '../ai/gemini.js';
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Tạo mã truy cập mới
export async function createNewAccessCode(req, res) {
  const { phoneNumber } = req.body;
  const accessCode = Math.floor(100000 + Math.random() * 900000).toString();
  await db.collection('users').doc(phoneNumber).set({ accessCode }, { merge: true });

  // const formattedPhone = phoneNumber.replace(/^0/, '+84');
  // await client.messages.create({
  //   body: `Mã xác thực OTP của bạn là: ${accessCode}`,
  //   from: process.env.TWILIO_PHONE_NUMBER,
  //   to: formattedPhone
  //   });
  res.json({ accessCode });
}

// Xác thực mã truy cập
export async function validateAccessCode(req, res) {
  const { phoneNumber, accessCode } = req.body;
  const doc = await db.collection('users').doc(phoneNumber).get();
  const data = doc.data();

  if (data?.accessCode === accessCode) {
    await db.collection('users').doc(phoneNumber).update({ accessCode: '' });
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Invalid code' });
  }
}

// Sinh caption bài đăng
export async function generatePostCaptions(req, res) {
  const { socialNetwork, subject, tone } = req.body;
  const prompt = `Viết 5 caption cho mạng xã hội ${socialNetwork}, chủ đề "${subject}", giọng điệu "${tone}" bằng tiếng anh. Nội dung mẫu (300 từ), không cần viết số thứ tự, Ví dụ như "Caption 1:.... Caption 2:.... caption 3:...." đừng viết lưu ý và câu chào của bạn vào, mỗi caption viết trên 1 dòng`;
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}`,
  });
  const text = response.text;
  res.json({ captions: text.split('\n').filter(line => line.trim()) });
}

// Gợi ý ý tưởng bài viết
export async function getPostIdeas(req, res) {
  const { topic } = req.body;
  const prompt = `Gợi ý 10 ý tưởng ngắn bài viết cho chủ đề "${topic}" bằng tiếng anh. Mỗi ý tưởng viết trên 1 dòng, không cần viết số thứ tự, ví dụ: "Idea 1:... Idea 2:... Idea 3:...". Không cần viết lời chào hay lưu ý gì cả, (nhấn mạnh: đừng viết lời chào ok gì cả).`;
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}`,
  });
  const text = response.text;

  res.json({ ideas: text.split('\n').filter(line => line.trim()) });
}

// Sinh caption từ idea
export async function createCaptionsFromIdeas(req, res) {
  const { idea } = req.body;
  const prompt = `Viết 5 caption dài vừa phải cho ý tưởng: "${idea}" bằng tiếng anh. Nội dung mẫu (300 từ). Mỗi caption viết trên 1 dòng, không cần viết số thứ tự, ví dụ: "Caption 1:... Caption 2:... Caption 3:...". Không cần viết lời chào hay lưu ý gì cả, (nhấn mạnh: đừng viết lời chào ok gì cả).`;

  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}`,
  });
  const text = response.text;

  res.json({ captions: text.split('\n').filter(line => line.trim()) });
}

// Lưu nội dung đã tạo
export async function saveGeneratedContent(req, res) {
  const { topic, data, phoneNumber } = req.body;
  const docRef = db.collection('generatedContents').doc();
  await docRef.set({ id: docRef.id, topic, data, phoneNumber, createdAt: new Date() });
  res.json({ success: true });
}

// Lấy nội dung đã lưu theo người dùng
export async function getUserGeneratedContents(req, res) {
  const { phone_number } = req.query;
  const snapshot = await db.collection('generatedContents').where('phoneNumber', '==', phone_number).get();
  const contents = snapshot.docs.map(doc => doc.data());
  res.json(contents);
}

// Bỏ lưu nội dung
export async function unsaveContent(req, res) {
  const { captionId } = req.body;
  await db.collection('generatedContents').doc(captionId).delete();
  res.json({ success: true });
}

// Export default object chứa tất cả
const controller = {
  createNewAccessCode,
  validateAccessCode,
  generatePostCaptions,
  getPostIdeas,
  createCaptionsFromIdeas,
  saveGeneratedContent,
  getUserGeneratedContents,
  unsaveContent,
};

export default controller;
