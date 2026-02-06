import express from 'express';
import dotenv from 'dotenv';
import contactHandler from './api/contact.ts';

dotenv.config();

const app = express();
app.use(express.json());

// Relay the request to our professional handler
app.post('/api/contact', async (req, res) => {
    console.log(`[API] Received ${req.method} request to ${req.url}`);
    try {
        await contactHandler(req, res);
    } catch (error) {
        console.error('[API Server Error]:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/api/health', (req, res) => res.send('OK'));

// Keep the process alive on errors
process.on('unhandledRejection', (reason, promise) => {
    console.error('[API Server] Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('[API Server] Uncaught Exception:', err);
});

const PORT = 3002;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n================================`);
    console.log(`> API Server IS LISTENING on: http://localhost:${PORT}`);
    console.log(`================================\n`);
});
