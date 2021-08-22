const jwt = require("jsonwebtoken");
//=================
// VERIFICAR TOKEN
//=================
let verificaToken = (req, res, next) => {
  const token = req.get("token");
  //console.log(token);

  jwt.verify(token, process.env.SEED, (error, decode) => {
    console.log(decode);
    if (error) {
      return res.status(401).json({
        ok: false,
        error: {
          message: "Token no valido."
        }
      });
    }
    req.usuario = decode.usuarioDB;
    next();
  });
};

module.exports = {
  verificaToken
};
