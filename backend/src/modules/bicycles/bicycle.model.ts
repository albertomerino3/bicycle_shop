import {
    Model,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    ForeignKey, //añadimos la FK
} from "sequelize";

//importamos la conexión a la BD
import { sequelize } from "../../config/database";

//DEFINICIÓN DE LA CLASE:
export class Bicycle extends Model<
    InferAttributes<Bicycle>,
    InferCreationAttributes<Bicycle>
> {
    declare id: CreationOptional<number>;

    declare model: string;
    declare description: string | null;
    declare price: number;
    declare stock: number;

    //clave foránea
    declare brandId: number; //FK de la marca asociada

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

//INICIALIZACIÓN DEL MODELO en sequelize
Bicycle.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        model: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        //COLUMNA clave foránea
        brandId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,   //exige que toda bilicleta pertenezca a una marca
            //field: "brand",
            references: { model: "brands", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "bicycles",
        timestamps: true,
    }
);