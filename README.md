**AI Mock Interview Generator**

**Overview**

The AI Mock Interview Generator is a web application designed to create personalized mock interview questions and answers based on a user's job role, description, and experience. The application leverages AI to provide tailored questions and responses, helping users prepare effectively for job interviews.

**ScreenShots**
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai1.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai2.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai3.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai4.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai5.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai6.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai7.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai8.jpeg">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai9.jpeg">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai10.jpeg">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai11.png">
<img src="https://github.com/ushad1998/AI-Mock_interview/blob/56d34ee2ee8bfada16afa9cd0c3e016f625ad6d8/AI%20Screenshots/ai12.png">

---

**Features**

AI-Generated Questions: Generates interview questions and answers in JSON format using AI.

Customizable Inputs: Users can specify:

Job Role/Position

Job Description/Tech Stack

Years of Experience


Dynamic Storage: Saves generated interview data to a database with unique identifiers.

User-Friendly Interface: Intuitive UI for easy navigation and interaction.

Efficient Workflow: Handles AI interaction and database storage seamlessly.



---

**Tech Stack**

**Frontend**

React.js: For building the user interface.

Next.js: For server-side rendering and optimized performance.

Tailwind CSS: For responsive and modern styling.


**Backend**

Node.js: For backend logic and API integration.

PostgreSQL/SQLite: For storing interview data.


**AI Integration**

Custom AI Model (e.g., GPT): Used to generate interview questions and answers.


**Other Tools**

Moment.js: For date and time formatting.

Clerk Authentication: For user management.

UUID: For generating unique IDs for each mock interview.

Lucide Icons: For loading and UI components.



---

**Installation and Setup**

Prerequisites

Node.js (v16 or higher)

npm or yarn package manager

PostgreSQL or SQLite database


**Steps

1. Clone the Repository
**
git clone https://github.com/your-username/ai-mock-interview.git
cd ai-mock-interview


**2. Install Dependencies**

npm install
# or
yarn install


**3. Environment Variables Create a .env.local file in the root directory and configure the following variables:**

NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
NEXT_PUBLIC_API_KEY=your_ai_api_key
DATABASE_URL=your_database_url


**4. Run the Application**

npm run dev
# or
yarn dev

**
5. Access the Application Open http://localhost:3000 in your browser.**




---

**Usage**

1. Click the "Add New" button on the dashboard.


2. Enter:

Job Role/Position (e.g., "Full Stack Developer").

Job Description/Tech Stack (e.g., "React, Node.js, SQL").

Years of Experience (e.g., "3").



3. Submit the form to generate interview questions and answers.


4. View or save the AI-generated mock interview questions.




---

**Project Directory Structure**

ai-mock-interview/

├── components/      # UI components

├── pages/           # Next.js page components

├── public/          # Static assets

├── styles/          # Global styles

├── utils/           # Utility functions (e.g., DB, AI integration)

├── .env.local       # Environment variables

├── package.json     # Project metadata and dependencies

└── README.md        # Project documentation


---
**
Key Features Implementation**

1. AI Integration: Sends user input to an AI model and retrieves JSON responses.


2. Error Handling: Validates AI responses to ensure proper JSON format.


3. Database Integration: Saves AI-generated mock interview data with user metadata.


4. Routing: Enables navigation to detailed interview pages after submission.




---

**Future Enhancements**

Add multiple AI model options for different interview scenarios.

Enhance user dashboard with analytics on AI-generated questions.

Enable question editing and manual addition.

Integrate voice-based Q&A for real-time practice.



---

**Contribution

Contributions are welcome! Feel free to fork this repository, submit pull requests, or report issues.
**
Steps to Contribute

1. Fork the repository.


2. Create a new branch for your feature/bug fix:

git checkout -b feature-name


3. Commit your changes and push to your fork:

git commit -m "Add new feature"
git push origin feature-name


4. Open a pull request.




---

**License**

This project is licensed under the MIT License. See the LICENSE file for more details.


---

**Contact**

For queries or suggestions, please reach out at your-email@example.com or visit the GitHub repository.


---

Happy Interviewing!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
