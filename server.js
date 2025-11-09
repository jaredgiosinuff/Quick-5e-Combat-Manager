const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9500;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', port: PORT });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`⚔️  Quick 5e Combat Manager running on port ${PORT}`);
    console.log(`🌐 Access at: http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
