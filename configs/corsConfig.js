const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://blood-buddy-nhb.vercel.app',
];

// make dynamic link for every vercel deployment
const dynamicOriginPattern = /^https:\/\/blood-buddy-[a-z0-9]+-nazmul-hassans-projects\.vercel\.app$/;

export const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || dynamicOriginPattern.test(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not Allowed by CORS Policy!'));
        }
    }
};
