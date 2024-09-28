const admin = require("firebase-admin");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "rabbitmq-notif",
    clientEmail:
      "firebase-adminsdk-jnc9j@rabbitmq-notif.iam.gserviceaccount.com",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8gRvAwFwjE/1p\njgjxHvns1FUkzDuS0crcJ3cNjT53p9c5E+uipX2CcWodwStGr/8lTvpCj3t079YK\nZ/lVMmP9LQ5GGkWwh273I/01Vs8u7iHV7NkAtOjj0WAYGduWAKLV7mnT3FJfEhL4\n5I5BSQ+R++ws1SFZgUT2n6Qwga4++o6pvxjJd3YB0R90TWtDCmA/V4acS9p39bfm\nmDKI8TcMlEzLoguB3r4Pnpfl7b95418+ib4Y1zmU7dVsTTJ1xp9EjookdHCFco4x\nXn/kPlhQDTwOHgGK+NcH3+JU89oWzrZi7pW/2EOrxgR7cncbmPItI4nKgSDJ+8Md\nvC10/7DnAgMBAAECggEADqSNe4LAcCh13L9f73GuDVkNx3QmmTLlv1tAyBM1i9rv\nANaMzSTDeUtbvbWgfyGzFVAAva838ln3tkrkVzC5C/92Jo4/j++9TW0EwXdy/vIY\nO8NltJnY+2rAvFk0hv7upzqZYDqIRYKkaaQWGXkrlfX2nyGWhnA1uLNRmu5VPZFb\nvL/Je2G7RUtYjF1g3S/Tc7yt7TUertDmAIjsvIYUWeRUne0uIbqtmTBLkMd1r3pG\nzcqANhi9WKPHd2KrS9/ZBHZ6xfbGmVRGY+Hi77URV9t0+KFr5LM5R9sCAhqfLik3\nlfiCvZG83r40jQyfDqTjAarAyLHSEN6z3ViNduI1rQKBgQDyYNKeATDtXTa08vEq\nZ5bb0L3jiedHSpEQd+8DIKxa1iM4FmMAxzlWUcXd8kKQMvdOTh3a4PYUzWDlqWbV\n9v02ZLWZTehqQzocxhWViTTesv9mulV6NIJimTO4EISuQkb1/Y3n+I4JqV6MEtea\necrIuPa+/dHG9EsrgskLgkmsqwKBgQDHGS8UrxaJOnWY9ZwOLG+42j12Sf+9Qw3e\nZhLurs4U3J73gxzLPRT9vpKdQFRCB1Y5NxeVCwbCxNQpeTkurp5i+9Cy3OOUEdFW\nHS82H8yiX9tpugNA8GAUC8Lkn5JqhfAMziLiBaeWIpm5quptKsnYsw2za0IQubNF\nTx0QdcHUtQKBgBKvHA1KEjd6BAmW4LhgG+T+BmVP8CAyw1P9qtMW5bJq53QfZapd\nsTHSQ+qEDlWHWEEVDIAe71lTK7EIigDcdVCIGueiddQbMpOdQXSxiv3P1phYrNYq\nzhJDtRTvUQsN2OKFlTbYljpwb/VkTnJ+CP/IIl0+u7kWg+TqxAy7EmrZAoGAfkXF\nq2ukcmJmRR243PBn5yhbBNPH4+RMPnoklca+I1MNa1N3hpr13jzoxd0P01TN5bnA\nNiHpJswo9yjQEIBlKcglw9r+Z2Gpj+EwmTYv1efPw81a1OvfM7eF4vQlq3PJHIX8\nb7dAY6MMNkplJdmWbN6a2Ok03GC6h0G24EKfLWUCgYBZ0cLBwQHOVYLtoK/2bXu+\nb31OSLW2Tl1MK8IamwtXvydwkelNtADDe2NPNsDzfQRDdzN+DPhwJIv4TB0I/kOr\nQuuijUrYiOXTJFUvrHtMlqJP1ScK8iivXzjx6vMcy+9f7ufy0GiF/5cLLIohBnjx\nVyx+0Dx8s/6KWvpV2L/SEw==\n-----END PRIVATE KEY-----\n",
  }),
});
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAs2luvoFGmNIn0CvuT4oHmww-bQpo1kgo",
//   authDomain: "rabbitmq-notif.firebaseapp.com",
//   projectId: "rabbitmq-notif",
//   storageBucket: "rabbitmq-notif.appspot.com",
//   messagingSenderId: "486447015747",
//   appId: "1:486447015747:web:4b9159652b927cee1ef1f6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
module.exports = admin;
