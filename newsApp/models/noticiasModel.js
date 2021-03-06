const conn = require('./../bd');

async function getNoticias(){
    try{
        
        const data =  await conn.query(`SELECT *,DATE_FORMAT(fecha,'%d/%m/%Y') as fechaForm FROM noticia order by idnoticia
                    asc`)
        return data
    }catch(error){
        throw error;
    }
}

async function getNoticiaById(id){
    try{
        const data =  await conn.query(`SELECT *,DATE_FORMAT(fecha,'%d/%m/%Y') as fechaForm FROM noticia WHERE idnoticia = ?`,[id])
        return data
    }catch(error){
        throw error;
    }
}

module.exports = {getNoticias, getNoticiaById}