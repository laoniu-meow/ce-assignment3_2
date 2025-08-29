const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to CE Assignment 3.2 - CI/CD Demo!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'CE Assignment 3.2',
    description: 'Node.js application with CI/CD pipeline',
    author: 'Your Name',
    repository: 'https://github.com/yourusername/ce-assignment3-2',
    features: [
      'Express.js server',
      'GitHub Actions CI/CD',
      'Automated testing',
      'Code quality checks',
      'Automated deployment'
    ]
  });
});

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path
  });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Health check: http://localhost:${PORT}/health`);
    console.log(`ℹ️  API info: http://localhost:${PORT}/api/info`);
  });
}

module.exports = app;
