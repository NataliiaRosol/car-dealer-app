Car Dealer App

Overview

The Car Dealer App allows users to select a car make and model year and view the available results for those specifications. This project is built with Next.js, and it uses React Context API for state management.

File Structure

1. Home Page (page.jsx):
The main entry point of the application.

2. VehicleMakes Component (VehicleMakes.jsx):
 - A dropdown menu for selecting the car make. It fetches and displays car models dynamically.

Key Features:
 - Displays a loading indicator when fetching data.
 - Shows a dropdown for selecting car models.
 - Displays the selected car model ID.

3. ModelYear Component (ModelYear.jsx):
 - A dropdown menu for selecting a model year.

Key Features:
 - Dynamically displays years fetched from the context.
 - Allows the user to select a year.
 - Displays the selected year below the dropdown.

4. NextButton Component (NextButton.jsx):
 - A button that navigates the user to the results page.

Key Features:
 - Disabled until both a car model and year are selected.
 - Redirects to a dynamic results page using the selected car model and year.

5. Results Page (/result/[makeId]/[yearId]):

Dynamically displays the results based on the car make and year selected by the user.

Key Features:
 - Fetches data from an external API based on makeId and yearId parameters.
 - Displays a list of results if found.
 - Shows an error message if there is an issue with fetching data or if no results are found.

6. ErrorResult Component (ErrorResult.jsx):

Displays an error message if fetching data fails.

7. Context (CarContext.jsx):

Manages global state for car makes, selected car model, and year.

    How to Run

Install Dependencies:
npm install

Run the Development Server:
npm run dev

Access the App:
Open your browser and go to http://localhost:3000.

Key Features
 - Dynamic dropdown menus for car make and model year.
 - Error handling for API requests.
 - Dynamic routing to results pages.
 - Responsive UI using Tailwind CSS.
 - API Integration

The app fetches data from the following API:

https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{yearId}?format=json

Tools & Technologies
 - Framework: Next.js
 - State Management: React Context API
 - Styling: Tailwind CSS
 - Error Handling: Custom error components

