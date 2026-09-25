# NOIR & BLADE — Modern Grooming

A modern, responsive barbershop booking website built as a  practical assessment.

**Live Website:** https://eftech05.github.io/noir-blade-barbershop/

---

## About the Project

NOIR & BLADE is a fictional premium barbershop based in Cape Town, South Africa.

The website was designed to provide customers with a simple and professional experience for:

* Exploring barbershop services
* Viewing pricing
* Learning about the barbers
* Selecting a barber
* Choosing a service
* Selecting an appointment date and time
* Providing customer information
* Adding appointments to a calendar
* Contacting the business

The project focuses on responsive design, usability, functionality and a complete booking experience.

---

## Features

### Customer Experience

* Responsive homepage with hero section and clear calls-to-action
* Services and pricing
* Barber profiles
* About page
* Contact information
* Responsive navigation
* Mobile navigation menu
* Appointment booking system
* Service selection
* Barber selection
* Date and time selection
* Customer details form
* Booking confirmation
* Google Calendar integration
* Apple Calendar-compatible calendar event
* Terms & Conditions
* Responsive footer
* Social media links

### Technical Features

* React component architecture
* React Router navigation
* Supabase Data API
* PostgreSQL database
* Responsive CSS
* Lucide React icons
* Git and GitHub version control
* Automated GitHub Pages deployment using GitHub Actions
* Vite production build

---

## Technology Stack

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| React.js        | Frontend application             |
| Vite            | Development and production build |
| JavaScript ES6+ | Application logic                |
| React Router    | Client-side navigation           |
| Supabase        | Data API and database            |
| PostgreSQL      | Data storage                     |
| HTML5           | Application structure            |
| CSS3            | Styling and responsive design    |
| Lucide React    | Icons                            |
| Git             | Version control                  |
| GitHub Actions  | Continuous deployment            |
| GitHub Pages    | Hosting                          |

---

## Project Architecture

The project follows an MVC-inspired structure to keep the application organised.

```text
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── ServiceCard/
│   ├── BarberCard/
│   ├── BookingForm/
│   └── Modal/
│
├── controllers/
├── models/
├── services/
├── utils/
│
├── views/
│   ├── Home/
│   ├── Services/
│   ├── About/
│   ├── Contact/
│   ├── Booking/
│   ├── Admin/
│   └── Terms/
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Booking Flow

The booking process follows this flow:

```text
Homepage
   ↓
Services
   ↓
Book Now
   ↓
Select Service
   ↓
Select Barber
   ↓
Select Date
   ↓
Select Time
   ↓
Enter Customer Details
   ↓
Confirm Booking
   ↓
Add to Calendar
```

The booking experience was designed to allow customers to complete the appointment process without requiring an account.

---

## Database

The application uses **Supabase Data API** connected to a PostgreSQL database.

The database is used to support application data such as:

* Services
* Barbers
* Appointments
* Customer booking information

The frontend communicates with Supabase through its client/API layer.

---

## Calendar Integration

After completing a booking, the customer can add the appointment to their calendar.

The generated event includes relevant appointment information such as:

* Service
* Barber
* Date
* Start time
* End time
* Business location
* Booking details

The calendar functionality supports Google Calendar and Apple Calendar-compatible events.

---

## Responsive Design

The website was designed for:

* Desktop
* Laptop
* Tablet
* Mobile devices

The navigation, booking form, service cards, footer and content sections adapt to different screen sizes.

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/EFTECH05/noir-blade-barbershop.git
```

### 2. Enter the project

```bash
cd noir-blade-barbershop
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Do not commit private credentials or secret keys to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The application will be available through the local Vite development server.

---

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

The project is deployed using **GitHub Actions and GitHub Pages**.

Every push to the `main` branch triggers the deployment workflow.

```text
GitHub Repository
       ↓
Push to main
       ↓
GitHub Actions
       ↓
npm ci
       ↓
npm run build
       ↓
GitHub Pages
       ↓
Live Website
<img width="1331" height="722" alt="salon1" src="https://github.com/user-attachments/assets/c634c81a-0ca7-489a-b963-f937d23f1434" />

Admin
<img width="1344" height="721" alt="admin salon" src="https://github.com/user-attachments/assets/94d3dfd8-ecec-4f12-a827-9783cbaad652" />


https://github.com/user-attachments/assets/1b72f59a-25eb-493b-b82d-0bd36a4af52f


### Live Website

**https://eftech05.github.io/noir-blade-barbershop/**

---

## Project Purpose

This project was developed as a practical demonstration of full-stack web development skills, including:

* Frontend development
* Component-based architecture
* Database integration
* API integration
* Form handling
* Booking functionality
* Calendar integration
* Responsive UI development
* Deployment
* Version control
* Continuous deployment

---

## Developer

**Franklin Ngangu**

Software Development Graduate | 

GitHub: **https://github.com/EFTECH05**

---

## License

This project was created for educational and portfolio purposes.
