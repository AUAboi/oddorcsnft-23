import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cors from 'cors';
import bodyParser from 'body-parser';
import serverless from 'serverless-http';
import sgMail from "@sendgrid/mail";
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname + "/public")))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use((req, res, next)=> {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



app.get('/api', (req, res, next) => {
  res.send('API Status: Running')

});

app.post('/api/email', (req, res, next) => {
  console.log(req);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('API KEY: ', process.env.SENDGRID_API_KEY);

  const message = `Name: ${req.body.name}, Email: ${req.body.email}, Project: ${req.body.project}, Message: ${req.body.message}`;

  const msg = {
    to:'oddorcsio@outlook.com',
    from: { email: process.env.FROM_EMAIL_ADDRESS, name: "Collab Request Form" },
    replyTo: req.body.email,
    subject: 'Collab Request',
    Text: message

  }

  sgMail.send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
  })

  .catch(err => {
    console.log('error: ', err.response.body);
    res.status(401).json({
      success: false
    });

  });
});

app.listen(process.env.PORT || 3030, console.log('Server is Running'));








