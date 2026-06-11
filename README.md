# OLX Card Clone

A responsive OLX-inspired product listing interface built using React and Vite. This project demonstrates the implementation of reusable React components, props-based data rendering, and modern UI development practices. The application displays mobile phone advertisements in a card-based layout similar to the OLX marketplace.

## 🚀 Features

* Reusable Card Component
* Dynamic Data Rendering with Props
* Responsive Flexbox Layout
* Product Image Display
* Price and Product Details
* Location and Posting Time Information
* Wishlist (Heart) Icon Integration
* Clean and Modern User Interface

## 📸 Preview

The application displays multiple OLX-style product cards containing:

* Product Image
* Product Price
* Product Description
* Seller Location
* Posting Date
* Favorite/Wishlist Icon

## 🛠️ Built With

* React.js
* Vite
* JavaScript (ES6+)
* CSS3
* Font Awesome Icons

## 📂 Project Structure

```text
olx-card/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── assets/
│   ├── component/
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/olx-card.git
```

### Navigate to the Project Directory

```bash
cd olx-card
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## 💡 Component Usage

The application uses a reusable Card component that receives data through props:

```jsx
<Card
  src="image-url"
  price="RS 1.09 Lac"
  title="iPhone 15 JV 128GB"
  location="Faisalabad"
  time="4 days ago"
  icon={<i className="fa-regular fa-heart"></i>}
/>
```

## 🎯 Learning Objectives

This project was developed to practice:

* React Functional Components
* Component Reusability
* Props Handling
* UI Replication
* Responsive Layout Design
* Modern Frontend Development with Vite

## 🔮 Future Enhancements

* Fetch listings from an API
* Search Functionality
* Product Filtering
* Category Navigation
* Responsive Mobile Design Improvements
* Product Details Page
* Favorite Items Feature
* State Management Integration

## 👨‍💻 Author

Muhammad Ikram

Frontend Developer passionate about building modern and responsive web applications with React.

## 📄 License

This project is open-source and available under the MIT License.
