# DevSpace - Developer Chat App

A modern real-time chat application built specifically for developers and tech teams. DevSpace provides seamless group communication with advanced features like typing indicators, online presence, and responsive design.

## 🌐 Live Demo

- **Frontend**: [DevSpace Chat App](https://devspace-chatapp.netlify.app/)
- **Backend API**: [DevSpace API](https://devspace-backend-h8m0.onrender.com)

## 🚀 Features

- **Real-time Messaging**: Instant messaging with Socket.IO
- **Group Chat**: Create and join developer teams
- **Typing Indicators**: See when others are typing
- **Online Presence**: View who's currently online
- **Responsive Design**: Works on desktop and mobile
- **User Authentication**: Secure login and registration
- **Modern UI**: Built with Chakra UI for a sleek experience

## 🛠️ Tech Stack

### Frontend

- React 18
- Vite
- Chakra UI
- Socket.IO Client
- React Router
- Axios

### Backend

- Node.js
- Express.js
- Socket.IO
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## 📁 Project Structure

```
DevSpace-Chat-App/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tanishkasharma29/DevSpace-Chat-App.git
   cd DevSpace-Chat-App
   ```

2. **Setup Backend**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:

   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm start
   ```

   Server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application will run on `http://localhost:5173`

## 📝 API Endpoints

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/groups` - Get all groups
- `POST /api/groups` - Create new group
- `GET /api/messages/:groupId` - Get messages for a group
- `POST /api/messages` - Send new message

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tanishka Sharma**

- GitHub: [@tanishkasharma29](https://github.com/tanishkasharma29)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/tanishka-sharma-a5a883257/)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

**DevSpace** - _Connecting Developers, One Chat at a Time_ 🚀

