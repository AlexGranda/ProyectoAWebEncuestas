module.exports = {

  home: function (req, res) {
    if (req.session.authenticated) {
      isAutenticado = true
    } else {
      isAutenticado = false
    }

    res.view('homepage', {
      isAutenticado: isAutenticado
    })
  },
  contactos: function (req, res) {
    if (req.session.authenticated) {
      isAutenticado = true
    } else {
      isAutenticado = false
    }

    res.view('contactos', {
      isAutenticado: isAutenticado
    })
  },
  login: function (req, res) {
    if (req.session.authenticated) {
      isAutenticado = true
    } else {
      isAutenticado = false
    }

    res.view('login', {
      isAutenticado: isAutenticado
    })
  },

}
