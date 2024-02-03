# Blog API

## Overview

This API provides endpoints for managing blogs.

## Endpoints

| Request Method | Function Name | URL                           |
| -------------- | ------------- | ----------------------------- |
| POST           | addBlog       | http://localhost:5718/api/blogs/add |
| GET            | getAllBlog    | http://localhost:5718/api/blogs/     |
| GET            | getSingleBlog  | http://localhost:5718/api/blogs/:id |
| GET            | searchBlog    | http://localhost:5718/api/blogs/search/:key |
| PATCH          | updateBlog    | http://localhost:5718/api/blogs/update/:id |
| DELETE         | deleteBlog    | http://localhost:5718/api/blogs/delete/:id |

## Usage

- **Add Blog:**
  - Endpoint: `POST /api/blogs/add`
  - Example Request:
    ```bash
    curl -X POST http://localhost:5718/api/blogs/add -d '{ "title": "Sample Blog", "content": "This is a sample blog post." }'
    ```

- **Get All Blogs:**
  - Endpoint: `GET /api/blogs/`
  - Example Request:
    ```bash
    curl http://localhost:5718/api/blogs/
    ```

- **Get Single Blog:**
  - Endpoint: `GET /api/blogs/:id`
  - Example Request:
    ```bash
    curl http://localhost:5718/api/blogs/123
    ```

- **Search Blogs:**
  - Endpoint: `GET /api/blogs/search/:key`
  - Example Request:
    ```bash
    curl http://localhost:5718/api/blogs/search/sample
    ```

- **Update Blog:**
  - Endpoint: `PATCH /api/blogs/update/:id`
  - Example Request:
    ```bash
    curl -X PATCH http://localhost:5718/api/blogs/update/123 -d '{ "title": "Updated Blog Title" }'
    ```

- **Delete Blog:**
  - Endpoint: `DELETE /api/blogs/delete/:id`
  - Example Request:
    ```bash
    curl -X DELETE http://localhost:5718/api/blogs/delete/123
    ```
