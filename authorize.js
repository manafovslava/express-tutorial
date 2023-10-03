const authorize = (req, res, next) => {
   const {user} = req.query;
   if(user === 'Viacheslav') {
      req.user = {name: 'Viacheslav', id: 3}
      next()
   } else {
      res.status(401).send('Unauthorized');
   }
}

module.exports = authorize;
