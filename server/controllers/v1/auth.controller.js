import { conexion } from "../../config/db.js";
import { generateToken } from "../../libs/generateToken.js";

const verifyAuth = async (id) => {
  try {
    let db = await conexion();
    let prs = await db.collection("user");
    let rols = await prs
      .aggregate([
        {
          $lookup: {
            from: "rol",
            localField: "rol",
            foreignField: "id_rol",
            as: "rols",
          },
        },
        {
          $unwind: "$rols",
        },
        {
          $match: {
            id_user: id,
          },
        },
        {
          $project: {
            _id: 0,
            id_user: 1,
            rols: { permissions: 1 },
          },
        },
      ])
      .toArray();
    return rols;
  } catch (err) {
    console.lof(res);
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let db = await conexion();
    let users = await db.collection("user");
    let userIsMatch = await users.find({ email, password }).toArray();
    if (userIsMatch.length < 1)
      return res
        .status(404)
        .send({ status: 404, message: "Credenciales incorrectas!" });
    else {
      let permissions = await verifyAuth(userIsMatch[0].id_user);
      let token = await generateToken(permissions[0])
      req.headers["X-Authorization"] = "Bearer " + token
      return res
        .status(200)
        .send({
          status: 200,
          redirectUrl: "Redireccion exitosa!!",
          success: true,
          headers: req.headers
        });
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

export { login };
