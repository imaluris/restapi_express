const sql = require("./db.js");

const CustomerData = function(customerData) {
  this.id = null; // L'id sarà gestito automaticamente dal database (autoincrementato)
  this.name = customerData.name;
  this.surname = customerData.surname;
  this.dateofbirth = customerData.dateofbirth;
  this.gender = customerData.gender;
  this.country = customerData.country;
  this.province = customerData.province;
  this.residency = customerData.residency;
  this.address = customerData.address;
  this.user_id = customerData.user_id; // Chiave esterna verso la tabella User
  this.image_id = customerData.image_id; // Chiave esterna verso la tabella Image
};

CustomerData.create = (newCustomerData, result) => {
  sql.query("INSERT INTO customer_data SET ?", newCustomerData, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customerData: ", { id: res.insertId, ...newCustomerData });
    result(null, { id: res.insertId, ...newCustomerData });
  });
};

CustomerData.findById = (id, result) => {
    sql.query('SELECT * FROM customer_data WHERE id = ?', [id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customers: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  

  CustomerData.getall = (result) => {
    let query = "SELECT * FROM customer_data";
  
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("customers: ", res);
      result(null, res);
    });
  };

  CustomerData.remove = (id, result) => {
    sql.query("DELETE FROM customer_data WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted customer with id: ", id);
      result(null, res);
    });
  };

module.exports = CustomerData;
