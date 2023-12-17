
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column({type:'varchar'})
  name;

  @Column({type:'varchar'})
  email;
}

module.exports = User;
