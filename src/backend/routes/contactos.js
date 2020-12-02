const { Router } = require('express')
const router = Router()


const mysqlConnection = require('../database')

// GET ALL
router.get('/', (req, res) => {

  mysqlConnection.query('SELECT * FROM contactos', (err, rows, fields) => {
    if (!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })

})

// GET ONE
router.get('/:id', (req, res) => {
  const { id } = req.params
  mysqlConnection.query('SELECT * FROM contactos WHERE id = ?', [ id ], (err, rows, fields) => {
    if (!err) {
      res.json(rows[ 0 ])
    } else {
      console.log(err)
    }
  })

})

// ADD
router.post('/', (req, res) => {
  const sql = 'INSERT INTO contactos (nombre, apellidos, email, telefono, status) VALUES ?'
  const { nombre, apellidos, email, telefono, status } = req.body
  const values = [ [ nombre, apellidos, email, telefono, status ] ]
  mysqlConnection.query(sql, [ values ], (err, result) => {
    if (!err) {
      res.json({ status: "Record inserted, ID: " + result.insertId })
    } else {
      console.log(err)
    }
  })

})



// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params
  mysqlConnection.query('DELETE FROM contactos WHERE id = ?', [ id ], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'El contacto ha sido eliminado' })
    } else {
      console.log(err)
    }
  })

})

module.exports = router