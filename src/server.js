const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK',
        message: 'Poketto server is running!',
        timestamp: new Date().toISOString()
    });
});

// API Routes for Pokemon data
app.get('/api/pokemon', (req, res) => {
    // This would typically connect to a database or external API
    res.json({
        message: 'Pokemon API endpoint',
        endpoints: [
            '/api/pokemon - List all Pokemon',
            '/api/pokemon/:id - Get specific Pokemon',
            '/api/pokemon/search/:name - Search Pokemon by name'
        ]
    });
});

app.get('/api/pokemon/:id', (req, res) => {
    const { id } = req.params;
    // Sample response - in a real app this would fetch from database/API
    res.json({
        id: id,
        name: `Pokemon ${id}`,
        type: ['Normal'],
        stats: {
            hp: 100,
            attack: 80,
            defense: 75,
            speed: 85
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`🎮 Poketto server is running on http://localhost:${PORT}`);
    console.log(`📱 API endpoints available at http://localhost:${PORT}/api`);
});

module.exports = app;