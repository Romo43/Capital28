import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes";
import notesRoutes from "./routes/notes.routes";
import userRoutes from "./routes/users.routes";

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares(
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Global Variables

// Routes
app.use(indexRoutes);
app.use(notesRoutes);
app.use(userRoutes);
import "./config/passport";

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

export default app;