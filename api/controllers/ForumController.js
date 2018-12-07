/**
 * ForumController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  novaAplicacao: function(req, res){
    	res.view("pages/forum/novaPublicacao");
  },


  index:  function(req, res){
    	res.view("pages/forum/forum");
  },

  levaID: function(req, res){

    	var url = window.location.href;
    	url = url.split('?id=');
    	url = url[1];
    	var pkid = parseInt(req.param("url")); 
    	res.redirect(
    		"/forum/index?id="+pkid+"&notice=Bem_vindo_ao_forum"
    	);

    	/*Não consegui implementar o resto*/
  },

};

