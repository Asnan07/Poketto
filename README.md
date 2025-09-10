# 🎮 Poketto

A modern, interactive Pokemon web application built with Node.js and vanilla JavaScript.

## Features

- 📖 **Interactive Pokedex** - Browse detailed Pokemon information
- 🔍 **Advanced Search** - Find Pokemon by name, ID, type, or abilities
- 📊 **Comprehensive Stats** - View detailed stats, evolution chains, and movesets
- 🎯 **Responsive Design** - Optimized for desktop and mobile devices
- 🚀 **Fast Performance** - Built with modern web technologies

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Asnan07/Poketto.git
cd Poketto
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build the project for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
Poketto/
├── src/
│   ├── js/                 # Client-side JavaScript
│   ├── styles/             # CSS stylesheets
│   ├── views/              # HTML templates
│   ├── routes/             # Express routes
│   ├── middleware/         # Express middleware
│   ├── models/             # Data models
│   ├── utils/              # Utility functions
│   └── server.js           # Main server file
├── public/                 # Static assets
│   ├── css/                # Compiled CSS
│   ├── js/                 # Compiled JavaScript
│   ├── images/             # Images and graphics
│   └── icons/              # Icons and favicons
├── tests/                  # Test files
├── docs/                   # Documentation
└── package.json            # Project configuration
```

## API Endpoints

- `GET /` - Main application page
- `GET /api/health` - API health check
- `GET /api/pokemon` - List all Pokemon endpoints
- `GET /api/pokemon/:id` - Get specific Pokemon by ID
- `GET /api/pokemon/search/:name` - Search Pokemon by name

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Security**: Helmet.js, CORS
- **Development**: Nodemon, ESLint, Jest
- **Build Tools**: Browserify, PostCSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Pokemon data and inspiration from the Pokemon franchise
- Built with modern web development best practices
- Designed for Pokemon fans and developers alike

## Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation in the `docs/` folder
- Contact the maintainers

---

Made with ❤️ for Pokemon fans everywhere!