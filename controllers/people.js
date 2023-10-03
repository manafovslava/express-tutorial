const { people } = require('../data');

const getPeople = (req, res) => {
   res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
   const { name } = req.body;
   if(!name) {
      return res.status(400).json({succsess: false, msg: 'provide name value'})
   }
   res.status(201).json({succsess: true, person: name})
}

const createPersonPostman = (req, res) => {
   const { name } = req.body;
   if(!name) {
      return res.status(400).json({succsess: false, msg: 'provide name value'})
   }
   res.status(201).json({succsess: true, data: [...people, name]})
}

const deletePerson = (req, res) => {
   const person = people.find((person) => person.id === Number(req.params.id))

   if (!person) {
      return res
         .status(404)
         .json({ success: false, msg: `no person with ${req.params.id}`})
   }
   const newPeople = people.filter((person) => person.id !== Number(req.params.id));
   return res.status(200).json({success: true, data: newPeople})
}
