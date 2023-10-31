const app = express();
app.use(express.json());
-app.use(express.urlencoded({extended : false}));
app.use(
  cors({
    origin :["http://localhost:3000", "https://recruitment-app.onrender.com"],})
  );


