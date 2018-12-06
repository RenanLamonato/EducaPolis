/**
 * CodesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: function (req, res) {
      res.view("pages/codes/index");
  },

  geopolis: function (req, res) {
    res.view("pages/codes/geoPolis");
  },

  histoth: function (req, res) {
    res.view("pages/codes/histoth");
  }

};

