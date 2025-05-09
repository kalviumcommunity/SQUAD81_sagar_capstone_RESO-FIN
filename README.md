🛍️ RESO-FIN
RESO-FIN is a full-stack web application inspired by platforms like OLX websites. It allows users to post, browse, and purchase products in a categorized and location-based manner. The goal is to simplify the discovery and exchange of resources through a user-friendly online marketplace.

🚀 Features
🔐 User Authentication (Sign Up / Login)

🗃️ Product Listings (Add / Edit / Delete)

🗺️ Location-Based Search

💳 Payment Integration (e.g., Stripe/Razorpay)

📷 Image Upload and Preview

🛒 Wishlist and Cart Functionality

🔍 Filter and Sort by Category, Price, Location

📞 Contact Seller / Chat Feature (Optional/Planned)

🧰 Tech Stack
Frontend:
React.js

Redux Toolkit (for state management)

Tailwind CSS / Bootstrap

Backend:
Node.js

Express.js

MongoDB / PostgreSQL

Tools:
Cloudflare Pages (Frontend Deployment)

Render / Railway / Heroku (Backend Deployment)

Git & GitHub for version control

bruno for API testing

📁 Folder Structure
bash
Copy
Edit
RESO-FIN/
│
├── client/            # React frontend
├── server/             # Express backend
├── README.md            # Project documentation
└── .env                 # Environment variables
🧪 Installation and Setup
bash
Copy
Edit
# Clone the repository
git clone https://github.com/yourusername/reso-fin.git
cd reso-fin

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup
cd ../backend
npm install
npm run dev
📊 Project Progress
Keep track of daily work in this section. Here’s a simple format to follow:



| Day | Date       | Tasks Completed                                                                                                        | Learnings                                             | Issues Faced                          | Next Steps                                |
| --- | ---------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------- | ----------------------------------------- |
| 1   | 2025-05-01 | - Created low-fidelity wireframes for all main screens (home, login, product listing, product detail, etc.)            | Understood user flow planning and layout structure    | Iterating layout ideas took time      | Convert low-fid designs into high-fid     |
| 2   | 2025-05-2 | - Created high-fidelity mockups in Figma (desktop + mobile views)<br>- Defined color scheme, icons, and typography     | Learned UI consistency and responsive design thinking | Deciding color combinations           | Set up project folder and repo structure  |
| 3   | 2025-05-3 | - Created project folder structure (frontend/backend)<br>- Added README.md and `progress.md`<br>- Initialized Git repo | Clear project organization helps collaboration        | None                                  | Scaffold frontend with React and Tailwind |
| 4   | 2025-05-4 | - Initialized React frontend using Vite<br>- Installed Tailwind CSS and created initial components                     | Practiced modern React + Tailwind setup               | Configuring Tailwind with Vite        | Design and build login/signup forms       |
| 5   | 2025-05-5 | - Built login and signup forms<br>- Added React Router for navigation                                                  | Learned to manage routes and component structure      | Styling responsiveness issues         | Set up backend with Express               |
| 6   | 2025-05-6 | - Set up backend using Express.js<br>- Created user routes and auth controller                                         | Learned to structure basic API routes                 | CORS and .env config                  | Write POST API for user signup            |
| 7   | 2025-05-7 | - Wrote POST API for user signup<br>- Integrated bcrypt for password hashing                                           | Learned how to handle user data securely              | Hashing errors initially              | Create GET & PUT routes for users         |
| 8   | 2025-05-8 | - Wrote GET and PUT APIs for user data<br>- Setup basic error handling middleware                                      | Strengthened API design skills                        | Middleware chaining mistakes          | Test APIs using Postman                   |
| 9   | 2025-05-9 | - Created MongoDB schema for User model<br>- Connected backend to MongoDB Atlas                                        | Practiced schema design and DB integration            | Connection timeout due to wrong URI   | Build Product model                       |
| 10  | 2025-05-10 | - Designed Product schema and model<br>- Defined relations between User and Product                                    | Learned referencing between schemas                   | Minor validation bugs                 | Create product listing API                |
| 11  | 2025-05-11 | - Created POST API for product upload<br>- Added multer for image upload                                               | Learned handling multipart forms                      | Image upload path issues              | Connect frontend to product APIs          |
| 12  | 2025-05-12 | - Integrated product listing frontend with backend APIs<br>- Displayed product cards                                   | Learned axios usage and async data handling           | Rendering delay due to state updates  | Add filtering and search                  |
| 13  | 2025-05-13 | - Implemented product filters (price, category)<br>- Built basic search bar with live search                           | Strengthened frontend JS skills                       | Search debounce not working initially | Build wishlist & cart logic               |
| 14  | 2025-05-14 | - Created wishlist/cart components<br>- Added localStorage persistence for now                                         | Learned localStorage use in React                     | Data mismatch between views           | Implement payment system                  |
| 15  | 2025-05-15 |  -integrated jwt for token access for the login purpose -flow                                                       | jwt implementation         |




🔮 Upcoming Features
Seller Dashboard

Real-time Chat with Buyers

Admin Panel for Product Moderation

Product Recommendations

🤝 Contributing
Feel free to fork this repository and raise pull requests. For major changes, please open an issue first to discuss what you'd like to change.

📄 License
This project is licensed under the MIT License.

