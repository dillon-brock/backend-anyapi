const pool = require('../utils/pool');

module.exports = class Plant {
  id;
  name;
  latin_name;
  water_need;
  light_need;
  indoor;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.latin_name = row.latin_name;
    this.water_need = row.water_need;
    this.light_need = row.light_need;
    this.indoor = row.indoor;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM plants');
    return rows.map((row) => new Plant(row));
  }
};

