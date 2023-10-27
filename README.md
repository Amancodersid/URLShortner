# URLShortner


This is a simple URL shortener built with Express and MongoDB using Mongoose. It allows you to create short URLs and easily redirect users to the original long URLs.

## Installation

1. Clone the repository:

   ```bash
   git clone [repository_url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Usage

### Start the server

```bash
npm start
```

This will start the server using `nodemon` for automatic restarts during development.

### API Endpoints

- **Create Short URL:**
  - Endpoint: `POST /CreateShort`
  - Request Body: JSON with the original URL.
  - Example:

    ```json
    {
      "url": "https://example.com/long-url"
    }
    ```

- **Redirect to Original URL:**
  - Endpoint: `GET /:shortUrl`
  - Replace `:shortUrl` with the short URL obtained from the creation endpoint.

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv): ^16.3.1
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [mongoose](https://www.npmjs.com/package/mongoose): ^7.6.3
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.0.1

## License

This project is licensed under the [ISC License](LICENSE).

## Contributing

Feel free to open issues and pull requests!

---

You can customize this template further based on your project's specific details and features. Let me know if you have any specific additions or changes in mind!
