const express = require('express')
const mysql = require('mysql2')
const app = express()
const port=3000

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "coolie"
})

app.use(express.json())


app.post("/api/signup",(req,res)=>{
    const {id, firstname, lastname, email, phonenumber, password} = req.body
    const query = 'INSERT INTO signup (id, firstname, lastname, email, phonenumber, password) VALUES (?,?,?,?,?,?)'
    pool.query(query,[id, firstname, lastname, email, phonenumber, password],(err,result)=>{
        if (err) {
            return res.status(500).json({ message: 'Error inserting data', error: err });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
     
})

app.get("/api/login",(req,res)=>{
    pool.query("SELECT * FROM signup",(err,result)=>{
        if(err){
            return res.status(500).json({message:'error displaying data',error: err})
        }
        res.status(200).json(result)
    })
})


app.post("/api/data",(req,res)=>{
    const query = "INSERT INTO detail (id, uid, loc, station, trainno, coach, seat, lag) VALUES (?,?,?,?,?,?,?,?)" 
    const {id, uid, loc, station, trainno, coach, seat, lag} = req.body
    pool.query(query,[id, uid, loc, station, trainno, coach, seat, lag],(error,result)=>{
        if (error) {
            return res.status(500).json({ message: 'Error inserting data', error: error });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
})

app.put("/api/lagdata",(req,res)=>{
    const query = 'UPDATE detail SET lag=? WHERE id = ?'
    const {lag,id}=req.body 
    pool.query(query,[lag,id],(error,result)=>{
        if (error) {
            return res.status(500).json({ message: 'Error inserting data', error: error });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
})



app.get("/api/detail",(req,res)=>{
    pool.query("SELECT * FROM detail",(error,result)=>{
        if(error){
            return res.status(500).json({message:'error displaying data',error: err})
        }
        res.status(200).json(result)
        
    })
})

app.post("/api/booking",(req,res)=>{
    const query = "INSERT INTO booking (id, uid, loc, station, trainno, coach, seat, lag, totalAmount) VALUES (?,?,?,?,?,?,?,?,?)"
    const {id, uid, loc, station, trainno, coach, seat, lag, totalAmount} = req.body
    pool.query(query,[id, uid,loc, station, trainno, coach, seat, lag, totalAmount],(error,result)=>{
        if (error) {
            return res.status(500).json({ message: 'Error inserting data', error: error });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
})

app.get("/api/porterbook",(req,res)=>{
    const query = "SELECT * FROM booking LEFT JOIN signup ON booking.id = signup.id"
    pool.query(query,(error,result)=>{
        if(error){
            return res.status(500).json({message:'error displaying data',error: err})
        }
        res.status(200).json(result)
    })
})


app.delete("/api/confirm",(req,res)=>{
    const query = "DELETE FROM booking WHERE id = ? AND uid = ?"
    const {id,uid}= req.body
    pool.query(query,[id,uid],(error,result)=>{
        if(error){
            return res.status(500).json({message:'error data is not deleted',error: error})
        }
        res.status(200).json(result)
    })
})


//plogin

app.post("/api/psignup",(req,res)=>{
    const {pid, pfirstname, plastname, pemail, pnumber, ppassword} = req.body
    const query = 'INSERT INTO psignup (pid, pfirstname, plastname, pemail, pnumber, ppassword) VALUES (?,?,?,?,?,?)'
    pool.query(query,[pid, pfirstname, plastname, pemail, pnumber, ppassword],(err,result)=>{
        if (err) {
            return res.status(500).json({ message: 'Error inserting data', error: err });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
     
})

app.get("/api/plogin",(req,res)=>{
    pool.query("SELECT * FROM psignup",(err,result)=>{
        if(err){
            return res.status(500).json({message:'error displaying data',error: err})
        }
        res.status(200).json(result)
    })
})



app.post("/api/alldata",(req,res)=>{
    const done = "Processing"
    const query = "INSERT INTO confirm (id, uid, loc, station, trainno, coach, seat, lag, totalAmount, firstname, lastname, email, phonenumber, password, pid ,done) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    const {id, uid, loc, station, trainno, coach, seat, lag, totalAmount, firstname, lastname, email, phonenumber, password, pid}=req.body
    pool.query(query,[id, uid, loc, station, trainno, coach, seat, lag, totalAmount, firstname, lastname, email, phonenumber, password, pid, done],(error,result)=>{
        if (error) {
            return res.status(500).json({ message: 'Error inserting data', error: error });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
})

app.get("/api/display",(req,res)=>{
    const query = "SELECT * FROM confirm"
    pool.query(query,(error,result)=>{
        if(error){
            return res.status(500).json({message:'error displaying data',error: error})
        }
        res.status(200).json(result)
    })
})


//

app.get("/api/userdetail",(req,res)=>{
    const query = "SELECT * FROM confirm LEFT JOIN psignup ON confirm.pid = psignup.pid"
    pool.query(query,(error,result)=>{
        if(error){
            return res.status(500).json({message:'error displaying data',error: error})
        }
        res.status(200).json(result)
    })
})

//update done
app.put("/api/updatedone",(req,res)=>{
    const query= "UPDATE confirm SET done=? WHERE id = ? AND uid=? AND pid=?"
    const {done,id,uid,pid}= req.body
    pool.query(query,[done,id,uid,pid],(error,result)=>{
        if (error) {
            return res.status(500).json({ message: 'Error inserting data', error: error });
          }
          res.status(200).json({ message: 'Data inserted successfully', data: result });
    })
})

//




app.listen(port)