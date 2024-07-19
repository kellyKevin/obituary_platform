# Obituary Platform

Welcome to the **Obituary Platform**! This application allows users to submit and view obituaries, with added features for SEO and social media optimization. The platform is designed to be user-friendly, and it also integrates with social media for better engagement.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [SEO and Social Media Optimization](#seo-and-social-media-optimization)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Submit Obituaries**: Users can submit obituaries using an easy-to-use form.
- **View Obituaries**: Display a list of submitted obituaries.
- **SEO Optimization**: Dynamically added meta tags, structured data, and canonical links.
- **Social Media Integration**: Open Graph tags and social media sharing buttons.
- **Responsive Design**: Mobile-friendly design for all devices.

## Installation

Follow these steps to set up the project on your local machine.

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/obituary_platform.git
    cd obituary_platform
    ```

2. **Install Dependencies**:
    Make sure you have Node.js and npm installed. Then run:
    ```bash
    npm install
    ```

3. **Set Up the Database**:
    - Make sure MySQL or your chosen database service is running.
    - Create a new database named `obituary_platform`.
    - Run the following SQL command to create the `obituaries` table:
      ```sql
      CREATE TABLE obituaries (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          date_of_birth DATE,
          date_of_death DATE,
          content TEXT,
          author VARCHAR(100),
          submission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
          slug VARCHAR(255) UNIQUE
      );
      ```

4. **Run the Server**:
    ```bash
    node server.js
    ```

5. **Access the Application**:
    Open your browser and go to `http://localhost:3000/obituary_form` to start using the application.

## Usage

1. **Submit an Obituary**:
   - Navigate to [Submit Obituary](http://localhost:3000/obituary_form).
   - Fill in the form with the required details and submit.

2. **View Obituaries**:
   - After submission, you will be redirected to [View Obituaries](http://localhost:3000/view_obituaries), where you can see the list of submitted obituaries.

## File Structure

## node submit_obituary.js
starts the submitting server


## node view_obituary.js
starts the viewing server