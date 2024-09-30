# Notification Service with RabbitMQ, Firebase, and MySQL

This project is a notification service that integrates with RabbitMQ, Firebase Cloud Messaging (FCM), and MySQL. It consumes messages from RabbitMQ, sends notifications via FCM, and saves the notification status in the MySQL database.

## **Prerequisites**

Make sure you have the following installed on your machine before proceeding:

- [Node.js](https://nodejs.org/en/download/) (v12 or later)
- [MySQL](https://www.mysql.com/downloads/) (for database)
- [RabbitMQ](https://www.rabbitmq.com/download.html) (for message queueing)
- A Firebase project with a service account JSON file (but do not push it to the repository)

## 1. Install Project Dependencies

```bash
npm install
```

## 2. Set Up Environment Variables

Create a `.env` file in the root of the project with the following configuration or you can duplicate and modify `env.example` :

- Download this attached [drive here](https://drive.google.com/drive/folders/19jvnYxLLYssO-RzIUetLB13H7O0cz2Be?usp=sharing)
  and paste it on your `.env`
- Modify DB auth as your local enviroment config
- Open [this website](https://fcm-generator.netlify.app/) to get FCM token/deviceId for running test script, don't forget you have to **allow notifications** for generate FCM token , and paste it on `FIREBASE_FCM_TOKEN` in `.env`

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=db_imbee

# RabbitMQ Configuration
RABBITMQ_URL=amqp://localhost:5672
QUEUE_NAME=notification.fcm
TOPIC_NAME=notification.done

# Firebase Service Account Configuration
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=<Your Project ID>
FIREBASE_PRIVATE_KEY_ID=<Your Private Key ID>
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n<Your Private Key>\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=<Your Client Email>
FIREBASE_CLIENT_ID=<Your Client ID>
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=<Your Client Certificate URL>
FIREBASE_FCM_TOKEN=<Your deviceId or FCM Token>
FIREBASE_CLIENT_VAPID_KEY=<Your Client Vapid Key>

```

## 3. Set Up MySQL Database

- Start your MySQL server and create a database named `db_imbee`:

```bash
CREATE DATABASE db_imbee;
```

- The Sequelize ORM will automatically create the fcm_job table when you start the application.

## 4. Set Up RabbitMQ

Start RabbitMQ on your machine:

```bash
rabbitmq-server
```

or

```bash
brew services start rabbitmq
```

or directly with (adjust with your directory)

```bash
CONF_ENV_FILE="/opt/homebrew/etc/rabbitmq/rabbitmq-env.conf" /opt/homebrew/opt/rabbitmq/sbin/rabbitmq-server
```

Ensure that RabbitMQ is running and accessible at `amqp://localhost:5672` and you can run the interface on `http://localhost:15672`

## 5. Start the Application

To start the Express server, run:

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## 6. Running Test Script

- Before run test script please update FIREBASE_FCM_TOKEN on `.env` refer to [this website](https://fcm-generator.netlify.app/) to get FCM Token

To start the test, run:

```bash
npm run send-test
```

If it works well The running test will inserted into table on DB, Thank you.

Regards,

Farhan Aziz. F
