// Main JavaScript file for Poketto application

// API base URL
const API_BASE = '/api';

// DOM elements
let searchInput, searchResults, statusIndicator, statusText;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    checkAPIStatus();
});

/**
 * Initialize the application
 */
function initializeApp() {
    // Cache DOM elements
    searchInput = document.getElementById('pokemon-search');
    searchResults = document.getElementById('search-results');
    statusIndicator = document.querySelector('.status-dot');
    statusText = document.querySelector('.status-text');
    
    // Add event listeners
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPokemon();
            }
        });
    }
    
    // Add smooth scrolling for navigation links
    addSmoothScrolling();
    
    console.log('🎮 Poketto app initialized successfully!');
}

/**
 * Add smooth scrolling to navigation links
 */
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Check API status and update indicator
 */
async function checkAPIStatus() {
    try {
        const response = await fetch(`${API_BASE}/health`);
        const data = await response.json();
        
        if (response.ok) {
            updateStatusIndicator('online', 'API Online');
            console.log('✅ API Status:', data);
        } else {
            throw new Error('API returned error status');
        }
    } catch (error) {
        console.error('❌ API Status Check Failed:', error);
        updateStatusIndicator('offline', 'API Offline');
    }
}

/**
 * Update the status indicator
 * @param {string} status - 'online' or 'offline'
 * @param {string} text - Status text to display
 */
function updateStatusIndicator(status, text) {
    if (statusIndicator && statusText) {
        statusIndicator.className = status === 'online' ? 'status-dot' : 'status-dot error';
        statusText.textContent = text;
    }
}

/**
 * Search for Pokemon
 */
async function searchPokemon() {
    const query = searchInput?.value.trim();
    
    if (!query) {
        showSearchResults('Please enter a Pokemon name or ID to search.');
        return;
    }
    
    showSearchResults('Searching...');
    
    try {
        // Try to search by ID first, then by name
        const isNumeric = /^\d+$/.test(query);
        const endpoint = isNumeric ? `${API_BASE}/pokemon/${query}` : `${API_BASE}/pokemon/search/${query}`;
        
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (response.ok) {
            displayPokemonData(data);
        } else {
            throw new Error(data.error || 'Pokemon not found');
        }
    } catch (error) {
        console.error('Search Error:', error);
        showSearchResults(`Error: ${error.message}`);
    }
}

/**
 * Display Pokemon data in search results
 * @param {Object} pokemon - Pokemon data object
 */
function displayPokemonData(pokemon) {
    const html = `
        <div class="pokemon-result">
            <h4>${pokemon.name} (#${pokemon.id})</h4>
            <p><strong>Type:</strong> ${Array.isArray(pokemon.type) ? pokemon.type.join(', ') : 'Unknown'}</p>
            ${pokemon.stats ? `
                <div class="pokemon-stats">
                    <h5>Stats:</h5>
                    <ul>
                        <li>HP: ${pokemon.stats.hp || 'N/A'}</li>
                        <li>Attack: ${pokemon.stats.attack || 'N/A'}</li>
                        <li>Defense: ${pokemon.stats.defense || 'N/A'}</li>
                        <li>Speed: ${pokemon.stats.speed || 'N/A'}</li>
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    showSearchResults(html);
}

/**
 * Show search results
 * @param {string} content - HTML content or text to display
 */
function showSearchResults(content) {
    if (searchResults) {
        searchResults.innerHTML = content;
    }
}

/**
 * Start exploring function (called from hero button)
 */
function startExploring() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * View Pokedex function (called from hero button)
 */
function viewPokedex() {
    const searchSection = document.getElementById('search');
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Utility function to fetch all Pokemon (for future use)
 */
async function fetchAllPokemon() {
    try {
        const response = await fetch(`${API_BASE}/pokemon`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        return null;
    }
}

/**
 * Utility function to debounce search input (for future use)
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for testing (if in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchPokemon,
        checkAPIStatus,
        updateStatusIndicator,
        displayPokemonData,
        debounce
    };
}