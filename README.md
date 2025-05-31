# Skipli Backend API

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Firebase](https://img.shields.io/badge/Firebase-Ready-orange.svg)](https://firebase.google.com/)

A robust Node.js REST API designed for intelligent caption generation powered by Gemini AI with seamless Firebase integration.

## 🌟 Overview

**Skipli Backend** is a production-ready REST API built with Node.js that specializes in automated caption generation using Google's Gemini AI. The application leverages Firebase as its primary database solution, ensuring scalable and reliable data management for modern web applications.

### Key Features
- 🤖 **AI-Powered Caption Generation** - Utilizes Gemini AI for intelligent content creation
- 🔥 **Firebase Integration** - Seamless database operations and real-time synchronization  
- ⚡ **RESTful Architecture** - Clean, scalable API design following industry standards
- 🚀 **Production Ready** - Optimized for deployment and performance

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- **Firebase Account** with project setup
- **Gemini AI API Key** with appropriate permissions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/datmaithanh/skipli-be.git
   cd skipli-be
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
   - Configure your database settings
   - Obtain your Gemini AI API credentials
   - Set up your environment variables

4. **Launch the application**
   ```bash
   node index.js
   ```

The API server will start and be available at `http://localhost:3000` (or your configured port).

## 📋 System Requirements

| Component | Version | Notes |
|-----------|---------|-------|
| Node.js | 16+ | LTS recommended |
| npm | 7+ | Package manager |
| Firebase | Latest | Database & hosting |
| Gemini AI | API v1 | Caption generation |

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dat Mai Thanh**
- GitHub: [@datmaithanh](https://github.com/datmaithanh)
- Repository: [skipli-be](https://github.com/datmaithanh/skipli-be)

---

<div align="center">
  <strong>Built with ❤️ using Node.js and Gemini AI</strong>
</div>

---Describe for HR--

***REST API***
"I use the Postman app to test APIs."

-1. (POST) CreateNewAccessCode: 
"I am proving that I used the SMS service to send the OTP to the user."
![image](https://github.com/user-attachments/assets/ba0eb5e3-d995-40da-a00b-726a1f2be8ae)
![image](https://github.com/user-attachments/assets/c433e5a0-2428-4c37-bfcc-4444165daef0)
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/39743aef-11be-454c-b49d-4ec6e8f3384b)

-2. (POST) ValidateAccessCode:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/8fa5e45d-5976-4269-98c9-756da3120649)

-3. (POST) GeneratePostCaptions:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/59edf5b8-a87e-42e0-b4d2-cb20944606f2)

-4. (POST) GetPostIdeas:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/1aae3d9a-cb1d-462c-87f7-5c767d6429a7)

-5. (POST) CreateCaptionsFromIdeas:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/09f17497-ae49-42ae-9d7f-6d9fa1403ac9)

-6. (POST) SaveGeneratedContent:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/7548bb80-16e1-47bc-ac18-1050fe8980e1)

-7. (GET) GetUserGeneratedContents:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/2395c644-db06-45db-94e5-e90f7e0756f7)

-8. (POST) UnSaveContent:
"Here test with the Postman app"
![image](https://github.com/user-attachments/assets/106e1c94-457e-4cd2-962f-2c1ddcdc209c)





