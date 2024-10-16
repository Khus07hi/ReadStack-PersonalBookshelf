# **Book Shelf Application**

---

## Project Overview

**Book Shelf** is a React-based CRUD application designed to be your personal digital library. With this app, you can search for books, categorize them, take notes, and archive them. Built with local storage and integrated with the [Google Books API](https://developers.google.com/books), it offers a seamless book search experience.

<details>
  <summary><b>Table of Contents</b></summary>
  
  - [Features](#features)
  - [Visual Preview](#visual-preview)
  - [Technologies Used](#technologies-used)
  - [Local Deployment](#local-deployment)
  
</details>
<br>

---

##  Features

### Simple Book Management
- **Search for Books**: Easily find any book using the integrated Google Books API.
- **Categorize Books**: Organize your collection into four categories:
  - **Current Reading**: Track books you're currently reading and add notes.
  - **Favorites**: Keep a list of your top reads.
  - **To Read**: Plan your future reading list.
  - **Have Read**: Archive books you've completed.
- **Archive Books**: Move books to an archived state to restrict further activities until they are unarchived.

### Notes Management
- **My Notes Page**: Access all notes, including those from archived books.
  - **Editable & Deletable**: Modify or remove notes from Current Reading books.
  - **Archived Notes**: Notes on archived books are read-only and cannot be deleted.
  - **Warning System**: Get alerts when attempting to delete books with existing notes for added confirmation.

### Thoughtful User Experience
- **Conditional Archiving**: Only books with no notes can be archived, ensuring users are aware of their reading history.
- **Seamless Navigation**: Effortlessly switch between the Home, My Books, and My Notes pages for an enhanced reading experience.

---





##  Visual Preview


https://github.com/user-attachments/assets/fce7de8a-560e-479d-9d5b-e0041ad2c604

https://github.com/user-attachments/assets/6465614e-9d9e-4f9f-8e41-7d73376bd868


---

##  Technologies Used

- **React**: The core framework powering the user interface.
- **SCSS**: For stylish and maintainable CSS styling.
- **react-router-dom**: Enables smooth navigation between different pages.
- **framer-motion**: Adds fluid animations for a polished user experience.
- **react-hot-toast**: Provides clean and customizable notifications.
- **sweetalert2**: Enhances interactivity with pop-up alerts and confirmations.

---

## Local Deployment

To run locally, follow these steps:

1. **Clone the repository:**
    ```bash
   git clone https://github.com/Khus07hi/ReadStack-PersonalBookshelf.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd ReadStack-PersonalBookshelf
    ```

3. **Install dependencies:** 
    ```bash
    npm install
    ```

4. **Start the application:**
    ```bash
    npm start
    ```

---


