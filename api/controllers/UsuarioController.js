/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: function(req, res){
    res.view("pages/usuario/login");
  },

  perfil: async function (req, res) {
    var pkid = parseInt(req.param("id"));

    var dadosUsuario = await Usuario.find({
      where: {
        id: pkid
      },
      select: ['nome', 'email'],
    });

    res.view("pages/usuario/perfil", {
      notice: req.param("notice"),
      usuario: dadosUsuario
    });

  },


  cadastro: function (req, res) {
    res.view("pages/usuario/cadastro");
  },

  saveOrUpdate: function (req, res) {
    var pkid = parseInt(req.param("id"));
    var model = {
      nome: req.param("nome"),
      email: req.param("email"),
      senha: req.param("senha")
    }
    if (pkid > 0) {
      Usuario.update({
        id: pkid
      }, model).exec(function (err, newmodel) {
        if (!err) {
          res.redirect(
            "/usuario/perfil?id=" + model.id + "&notice=Salvo_com_sucesso!"
          );
        } else {
          res.redirect(
            "/usuario/perfil?notice=Erro" + err

          );
        }
      });
    } else {
      Usuario.create(model).exec(function (err, newmodel) {
        if (!err) { //salvou
          console.log(newmodel);
          res.redirect(
            "/usuario/perfil?id=" + model.id + "&notice=Salvo_com_sucesso!"
          );
        } else { //naosalvou
          res.redirect(
            "/usuario/perfil?notice=Erro" + err
          );
        }
      });
    }

  },


};
