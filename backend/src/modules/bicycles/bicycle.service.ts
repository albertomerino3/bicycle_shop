import { Bicycle } from "./bicycle.model";
import { Brand } from "../brands/brand.model";

//le añadimos la interfaz al crear la bicicleta
interface CreateBicycleInput {
    model: string;
    description?: string;
    price: number;
    stock?: number;
    brandId: number;
}

export class BicycleService {

    //OBTENER TODAS LAS BICICLETAS (y la marca asociada)

    static async findAll() {
        return Bicycle.findAll({
            include: [
                {
                    model: Brand,
                    as: "brand",
                    attributes: [ "id", "name"]
                }
            ],
            order: [["id", "ASC"]],
        });
    }
    
    //BUSCAR BICICLETA POR ID (incluyendo marca asociada)

    static async findById(id: number) {
        return Bicycle.findByPk(id, {
            include: [
                {
                    model: Brand,
                    as: "brand", //nombre del alias de la relación(associations)
                },
            ],
        });
    }

    //añadir una eager loading query
    static async findEagerlyById(id: number) {
        return Bicycle.findByPk(id, {
            include: [
            {
                model: Brand,
                as: "brand"
            }
            ]
        });
        }


    //CREAR NUEVA BICICLETA

    static async create(data: CreateBicycleInput) {
        return await Bicycle.create(data as any);
    }

    //ACTUALIZAR UNA BICICLETA EXISTENTE

    static async update(
        bicycle: Bicycle,
        data: {
            model?: string;
            description?: string | null;
            price?: number;
            stock?: number;
            brandId?: number;
        }
    ) {
        return bicycle.update(data);
    }

    //ELIMINAR UNA BICICLETA

    static async delete(bicycle: Bicycle) {
        await bicycle.destroy();
    }
}