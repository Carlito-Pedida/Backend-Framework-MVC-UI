import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Petshop extends Model<
  InferAttributes<Petshop>,
  InferCreationAttributes<Petshop>
> {
  declare petId: number;
  declare name: string;
  declare imgUrl: string;
  declare description: string;
  declare createdOn?: Date;
  declare updatedOn?: Date;
}
export function PetshopFactory(sequelize: Sequelize) {
  Petshop.init(
    {
      petId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdOn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedOn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      tableName: "petshop",
      sequelize,
    }
  );
}
