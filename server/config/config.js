// puerto
process.env.PORT = process.env.PORT || 3001;

// entorno
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// mongodb url

urlDB = "";

process.env.URLDB = urlDB;

// venciomiento del token: 60 segun * 60 minutos * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

process.env.SENDGRID_API_KEY = "";
