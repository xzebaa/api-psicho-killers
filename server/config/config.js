// puerto
process.env.PORT = process.env.PORT || 3000;

// entorno
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// mongodb url
let urlDB = "lero lero";

if (process.env.NODE_ENV === "production") {
  urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// venciomiento del token: 60 segun * 60 minutos * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
