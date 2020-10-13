const mysql = require('mysql2');
const pool = mysql.createPool({host:'localhost', user: 'root', database: 'mozg', password: 'stalker'});
const promisePool = pool.promise();

const io = require('socket.io')();
io.on('connection', client => {
    console.log("sssssssssssssssssss")
});
io.listen(3000);
io.on('connect', s => {
    s.on('message', mozg.events);
    s.emit('message', JSON.stringify({color:'#db6767',posX:200,posY:100,size:10}));
});


class  Mozg{
     constructor() {

    }
    events(e){

         console.log('EVENT',e)
    }
    async initW(){
        let [rows] = await promisePool.query('SELECT * FROM `neuron`')
        for (let i=0;i<rows.length;i++){
            this['n_'+i] = {w:rows[i].w,name:rows[i].name,id:rows[i].id}
        }
        console.log(this)
    }

}


let mozg =  new  Mozg()
mozg.initW()

