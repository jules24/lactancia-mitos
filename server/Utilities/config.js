let environment = "dev";

let serverURLs = {
  "dev": {
    "NODE_SERVER": "http://localhost",
    "NODE_SERVER_PORT": "3000",
    "MYSQL_HOST": 'cftonline-dev.ckppnh8x3lyl.us-east-1.rds.amazonaws.com',
    "MYSQL_USER": 'yqr7eK92kEoCqGuF',
    "MYSQL_PASSWORD": 'n4M4PNa)Z`{:C[H?',
    'MYSQL_DATABASE': 'fpystzsxsbe7p4wcft_canadaonline',
  }
}

let config = {
  "DB_URL_MYSQL": {
    "host": `${serverURLs[environment].MYSQL_HOST}`,
    "user": `${serverURLs[environment].MYSQL_USER}`,
    "password": `${serverURLs[environment].MYSQL_PASSWORD}`,
    "database": `${serverURLs[environment].MYSQL_DATABASE}`
  },
  "NODE_SERVER_PORT": {
    "port": `${serverURLs[environment].NODE_SERVER_PORT}`
  },
  "NODE_SERVER_URL": {
    "url": `${serverURLs[environment].NODE_SERVER}`
  }
};

module.exports = {
  config: config
};
