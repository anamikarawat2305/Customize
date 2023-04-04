# AI-Powered 3D Website Using React and Three JS 

## Introduction
Many large corporations already use 3D graphics to showcase their products. ThreeJS use for 3D product website and infuse it with the power of artificial intelligence! 
 
In this project, we have used:
- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
- TailwindCSS - a popular utility-first CSS styling framework
- Framer Motion - the most popular library used to bring your React website to life with animations

## Features:
- Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
- Make your code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
- Add custom color and file support.
- Generate and use images through DALLE AI
- Download the resulting t-shirt model image
- Ensure responsiveness across all devices and improve your site's performance

## Installation of packages in client folder
- npm create vite@latest -- --template react client
- cd client
- npm install
- npm run dev
- npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion

Install tailwind CSS with vite
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
 
Installation of packages in server folder
- cd server 
- npm init -y
- changes in package.json file - type & start
- npm install cloudinary cors dotenv express mongoose nodemon openai
- npm start