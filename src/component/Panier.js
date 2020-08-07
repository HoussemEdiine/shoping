import React from 'react'

const Panier = () => {

    let panierproduct = [{
        "_id": {
          "$oid": "5f064aaf5ad6823cef84c650"
        },
        "Name": "Toshiba",
        "Category": "pc portable",
        "Prix": "1000",
        "Description": "Description1",
        "Photo": "https://www.cdiscount.com/pdt2/1/2/0/1/300x300/sfith14a64w120/rw/thomson-pc-portable-disque-dur-externe-120go-t.jpg"
      },{
        "_id": {
          "$oid": "5f064aaf5ad6823cef84c651"
        },
        "Name": "HP",
        "Category": "pc portable",
        "Prix": "10",
        "Description": "Description1",
        "Photo": "https://www.tunisianet.com.tn/109331-large/pc-portable-hp-15-da0001nk-i3-7e-gen-24-go-blanc-sim-orange-offerte-30-go.jpg"
      }]
    return (
        <div>
            <table>
            {panierproduct.map((e)=>
            <tr><td>{e.Name}</td>
            <td>{e.Prix}</td>
            <td><img height="60px" width="60px" src={e.Photo} ></img></td>
            
            
            
            </tr>
            
           )}

</table>
            
        </div>
    )
}

export default Panier
