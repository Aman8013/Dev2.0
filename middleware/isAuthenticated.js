// middleware.js
import jwt from "jsonwebtoken";

// This middleware checks if the user is authenticated before allowing access to certain routes.
function isAuthenticated(req, res, next) {
    // Get the token from headers, query params, or cookies.
    const token = req.cookies.AUTH
    if (token) {
        try {
            // Verify the token with your secret key.
            const decoded = jwt.verify(token, process.env.JWTSECRET);

            // User is authenticated, proceed to the next middleware/route handler.
            req.user = decoded;
            
            next();
        } catch (error) {
            // Token verification failed.
            res.status(401).json({ error: 'Unauthorized' });
        }
    } else {
        // Token is missing.
        res.status(401).json({ error: 'Unauthorized' });
    }
}

export default isAuthenticated;
