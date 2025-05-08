import rateLimit from 'express-rate-limit';

    
  export const rateLimiter =  rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100, 
        message: "You have exceeded the number of requests, please try again after 15 minutes",
      });
