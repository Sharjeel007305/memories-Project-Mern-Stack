const  express = require ('express');
const  bodyParser = require ('body-parser');
const  mongoose= require ('mongoose');
const  cors = require ('cors');

const  postRoutes = require ('./routes/posts')

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: "true"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true"}));
app.use(cors());

app.use('/posts', postRoutes)

const  CONNECTION_URL = MONGO_URI;
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) ) )
    .catch((error) => console.log(error.message));

//https://www.mongodb.com/cloud/altas

