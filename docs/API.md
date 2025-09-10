# Poketto API Documentation

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Health Check
**GET** `/health`

Returns the API health status.

**Response:**
```json
{
    "status": "OK",
    "message": "Poketto server is running!",
    "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Pokemon Endpoints Overview
**GET** `/pokemon`

Returns available Pokemon API endpoints.

**Response:**
```json
{
    "message": "Pokemon API endpoint",
    "endpoints": [
        "/api/pokemon - List all Pokemon",
        "/api/pokemon/:id - Get specific Pokemon",
        "/api/pokemon/search/:name - Search Pokemon by name"
    ]
}
```

### Get Pokemon by ID
**GET** `/pokemon/:id`

Returns Pokemon data for the specified ID.

**Parameters:**
- `id` (string): Pokemon ID number

**Response:**
```json
{
    "id": "1",
    "name": "Pokemon 1",
    "type": ["Normal"],
    "stats": {
        "hp": 100,
        "attack": 80,
        "defense": 75,
        "speed": 85
    }
}
```

### Search Pokemon by Name
**GET** `/pokemon/search/:name`

Search for Pokemon by name (endpoint returns sample data for now).

**Parameters:**
- `name` (string): Pokemon name to search for

**Response:**
```json
{
    "id": "25",
    "name": "Pokemon 25",
    "type": ["Electric"],
    "stats": {
        "hp": 100,
        "attack": 80,
        "defense": 75,
        "speed": 85
    }
}
```

## Error Responses

### 404 Not Found
```json
{
    "error": "Route not found"
}
```

### 500 Internal Server Error
```json
{
    "error": "Something went wrong!"
}
```

## Usage Examples

### JavaScript/Fetch
```javascript
// Check API health
const healthResponse = await fetch('/api/health');
const healthData = await healthResponse.json();

// Get Pokemon by ID
const pokemonResponse = await fetch('/api/pokemon/1');
const pokemonData = await pokemonResponse.json();

// Search Pokemon
const searchResponse = await fetch('/api/pokemon/search/pikachu');
const searchData = await searchResponse.json();
```

### cURL
```bash
# Health check
curl http://localhost:3000/api/health

# Get Pokemon
curl http://localhost:3000/api/pokemon/1

# Search Pokemon
curl http://localhost:3000/api/pokemon/search/pikachu
```

## Notes

- All endpoints return JSON responses
- The current implementation uses sample data
- Future versions will integrate with real Pokemon data sources
- All endpoints support CORS for cross-origin requests