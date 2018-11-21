/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    

    cadastro: function(req, res){
        res.view("pages/usuario/cadastro");
    },

    perfil: function(req, res){
        res.view("pages/usuario/perfil");
    },
    
    
};

