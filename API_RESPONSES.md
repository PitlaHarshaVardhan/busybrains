# Sample API Responses

### 1. `POST /api/auth/login`
**Request Body:**
```json
{
  "email": "admin@ecommerce.com",
  "password": "password"
}
```
**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1p...",
  "type": "Bearer",
  "id": 1,
  "username": "admin",
  "email": "admin@ecommerce.com",
  "role": "ROLE_ADMIN"
}
```

### 2. `GET /api/products`
**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Premium noise-canceling headphones.",
    "price": 299.99,
    "imageUrl": "https://example.com/image.png",
    "createdAt": "2026-03-24T10:00:00",
    "updatedAt": "2026-03-24T10:00:00"
  }
]
```

### 3. `POST /api/products` (Admin Only)
**Request Body:**
```json
{
  "name": "Smart Watch",
  "description": "Fitness tracking watch.",
  "price": 199.99,
  "imageUrl": "https://example.com/watch.png"
}
```
**Response (200 OK):**
```json
{
  "message": "Product created successfully!"
}
```
