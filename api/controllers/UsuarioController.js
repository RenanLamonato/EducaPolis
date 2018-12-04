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

  loginUser: async function (req, res) {
    var uemail = req.param("email");
    var usenha = req.param("senha");

    var dadosUsuario = await Usuario.find({
      where: {
        email: uemail,
        senha: usenha
      },
      select: ['id', 'nome', 'email'],
    });

    req.session["usuario"] = dadosUsuario;

   	res.redirect(
        "/usuario/perfil?id=" + dadosUsuario[0].id + ""
    );
   
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
      id: parseInt(req.param("id")),
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
			"/usuario/perfil?id=" + model.id + "&notice=Alterado_com_sucesso!"
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

  edit: async function(req, res){
  		var pkid = parseInt(req.param('id'))
  			if(pkid && !isNaN(pkid)){
  				var p = await Usuario.findOne({
  					id: pkid
  				});
  				if(p){
  					res.view("pages/usuario/editar",{
  						usuario: p
  					});
  				}else{
  					res.redirect("/usuario/perfil?notice=Erro!");
  				}
  			}else{
  				res.redirect("/usuario/perfil?notice=Nao_encontrado!");
  			}
  	},

  	delete: function(req, res){
  		var pkid = parseInt(req.param('id'))
  			if(pkid && !isNaN(pkid)){
  				Usuario.destroy({
  					id: pkid
  				}).exec(function(err){
  					if(!err){
  						res.redirect("/codes/index?notice=Removido.")
  					}else{
  						res.redirect("/usuario/perfil?notice=Erro.")
  					}
  				});
  			}else{
  				res.redirect("/usuario/perfil?notice=Nao_encontrado");
  			}
  		}

};
