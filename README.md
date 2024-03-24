# Swagger-Doc-Setup

This project demonstrates how to set up Swagger documentation for an Express.js API using `swagger-jsdoc` and `swagger-ui-express`. Swagger is a powerful tool for documenting APIs, allowing developers to easily understand and interact with endpoints.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Otavie/Swagger-Doc-Setup.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Swagger-Doc-Setup
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the server and view the Swagger documentation:

```bash
npm start
```

Once the server is running, visit [http://localhost:4210/api-docs](http://localhost:4210/api-docs) in your browser to view the Swagger UI.

## Project Structure

```
Swagger-Doc-Setup/
├── routes/
│   └── index.routes.js
├── app.js
├── package.json
└── README.md
```

- **`routes/`**: Contains route handlers for different API endpoints.
- **`app.js`**: Main application file where Express server is configured and Swagger documentation is set up.
- **`package.json`**: Contains project metadata and dependencies.
- **`README.md`**: Documentation for the project.

## API Endpoints

### Get User Profile

- **URL:** `/api/profile`
- **Method:** `GET`
- **Description:** Fetches profile details of the user.
- **Responses:**
  - `200 OK`: User profile fetched successfully.
    ```json
    {
      "name": "Otavie Okuoyo",
      "email": "otavieokuoyo@gmail.com"
    }
    ```
  - `400 Bad Request`: Unable to fetch user profile data.

### Create User Profile

- **URL:** `/api/profile`
- **Method:** `POST`
- **Description:** Create a new profile for the user.
- **Request Body:**
  ```json
  {
    "name": "Otavie Okuoyo",
    "email": "otavieokuoyo@gmail.com"
  }
  ```
- **Responses:**
  - `201 Created`: User profile created successfully!
    ```json
    {
      "name": "Blessing John",
      "email": "blessingjohn@gmail.com"
    }
    ```
  - `400 Bad Request`: Unable to create user profile.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request for any improvements or fixes.

## License

This project is licensed under the MIT License.
