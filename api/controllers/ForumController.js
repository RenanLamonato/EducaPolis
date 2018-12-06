/**
 * ForumController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   forum: function (req, res) {
    res.view("pages/forum/forum");
  },
   publicacao: function (req, res) {
    res.view("pages/forum/publicacao");
  },
   escreverPublicacao: function (req, res) {
    res.view("pages/forum/escreverPublicacao");
  },
   escreverResposta: function (req, res) {
    res.view("pages/forum/escreverResposta");
  }

};

