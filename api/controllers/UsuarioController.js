/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function(req, res){
        Usuario.find().then(function(data){
            res.view("pages/usuario/index",
            {
                notice:req.param("notice"),
                pessoas: data
            });
        });
    },



};

