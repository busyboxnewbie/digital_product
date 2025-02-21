# Add New Product Form - Front-End Layout

## Description

This project provides the front-end layout for an "Add New Product" form, designed to resemble the interface shown in the provided image and inspired by website layouts like [Craftiest Studio](https://www.craftieststudio.com/).

It's built using HTML for structure, CSS for styling, and JavaScript for basic interactivity.  This is a **front-end only** implementation focusing on the user interface and visual aspects of the form.  Features like saving product data, category management, AI-powered text generation ("TextAl"), and image uploads are **not fully functional** and would require backend development.

## Getting Started

To run this front-end layout, you simply need to open the `index.html` file in any web browser.  No server setup is required as it's a static website.

### Prerequisites

*   A web browser (e.g., Chrome, Firefox, Safari, Edge).
*   A text editor to view and modify the code (optional, if you want to make changes).

### Running the Website

1.  **Download or copy** the files: `index.html`, `style.css`, and `script.js` to a directory on your local machine.
2.  **Open `index.html`** in your web browser. You can do this by:
    *   Double-clicking the `index.html` file in your file explorer.
    *   Dragging and dropping the `index.html` file into an open browser window.
    *   Typing the file path in your browser's address bar (e.g., `file:///path/to/your/index.html`).

The "Add New Product" form layout should now be displayed in your browser, looking similar to the provided image and website example.

## Files Included

*   **`index.html`**:  The main HTML file that provides the structure of the webpage, including:
    *   Header with breadcrumbs and tabs navigation.
    *   "Product Info" section with form elements for name, short description, and categories.
    *   "Images & Videos" section for image selection.
    *   Footer with "Save" and "Cancel" buttons.
*   **`style.css`**:  The CSS stylesheet that provides the visual styling for the HTML elements, making the layout resemble the design in the image. It includes styles for:
    *   Overall layout using Flexbox and Grid.
    *   Header, tabs, form elements (inputs, textareas, selects), buttons, and the image box.
*   **`script.js`**:  A JavaScript file that adds basic interactivity to the page:
    *   **Tab highlighting**:  Visually indicates the active tab when clicked.
    *   **"TextAl" button alert**:  Displays an alert message when the "TextAl" button is clicked to simulate functionality (actual AI integration is not included).
    *   **Name field character counter**:  Provides a live character count for the "Name" input field, showing the remaining characters as you type.

## Usage

Once you have opened `index.html` in your browser, you can interact with the form elements:

*   **Tabs**: Click on the tabs ("General", "Options", etc.) to see the visual tab selection effect.
*   **Name Field**: Type in the "Name" input field and observe the character counter updating.
*   **Short Description**:  Type in the "Short Description" textarea.
*   **Categories**:  Use the "Select Categories" dropdown (currently contains a placeholder option).  You can also see the "+ Add New Category" link.
*   **"TextAl" Button**: Click the "TextAl" button to see the alert message simulating the AI text generation.
*   **Images & Videos**: Click the "Choose Image" button – this is currently a button placeholder; actual image selection/upload is not implemented in this front-end layout.
*   **Save/Cancel Buttons**: Click the "Save" and "Cancel" buttons - these are currently button placeholders with no backend functionality connected.

## Further Development

This project is a starting point and focuses solely on the front-end layout. To create a fully functional "Add New Product" feature, you would need to implement:

*   **Backend Functionality**:  Develop a backend using a server-side language (like Python, Node.js, PHP) and a database to:
    *   Save product data entered in the form.
    *   Manage product categories (add, edit, delete, retrieve).
    *   Handle image uploads and storage.
    *   Implement the "TextAl" feature with AI integration (requires an AI service or model).
*   **JavaScript Enhancements**: Expand JavaScript functionality to:
    *   Implement actual tab content switching (if you want different sections for each tab).
    *   Handle form submission and validation.
    *   Communicate with the backend API to send and receive data.
    *   Implement dynamic category loading for the dropdown.
    *   Add image preview functionality after "Choose Image" is clicked.

## Deployment

To make this website accessible online, you can deploy it as a static website using services like:

*   **Netlify** (recommended for ease of use)
*   **Vercel**
*   **GitHub Pages**
*   **Firebase Hosting**
*   **AWS S3**

For these services, you typically just need to upload the `index.html`, `style.css`, and `script.js` files to their platform, and they will handle making your website live.  Refer to the documentation of your chosen deployment service for specific instructions.

---

This `README.md` file provides a good starting point for understanding and using the "Add New Product" form layout.  As you add more features and functionality, remember to update this documentation to reflect those changes!