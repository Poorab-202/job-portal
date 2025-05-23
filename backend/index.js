import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./utils/db.js"
import userRoutes from "./routes/user.route.js"
import companyRoutes from "./routes/company.route.js"
import jobRoutes from "./routes/job.route.js"
import applicationRoutes from "./routes/application.route.js"

dotenv.config({});
const app = express();
const allowedOrigins = [
    'http://localhost:5173', 
    'https://jobeasy-frontend.onrender.com' 
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true 
}));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// API's :

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`server running at port ${PORT}`);
})