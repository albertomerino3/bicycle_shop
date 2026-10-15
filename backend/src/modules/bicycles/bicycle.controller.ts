import { Request, Response, NextFunction } from "express";
import { BicycleService } from "./bicycle.service";

export class BicycleController {


    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            //llama al servicio para obtener la lista de bicicletas
            const bicycles = await BicycleService.findAll();
            res.json(bicycles);
        } catch (error) {
            next(error);
        }
    }


    static async getById(req: Request, res: Response, next: NextFunction) {

        try{
            //from string to number
            const id = Number(req.params.id);
            const bicycle = await BicycleService.findById(id);

            //if dont exist bicycle, return 404
            if (!bicycle) {
                res.status(404).json({
                    message: "bicycle not found :(",
                });
                return;
            }

            res.json(bicycle);
        } catch (error) {
            next(error);
        }
    }


    static async getEagerlyById(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const id = Number(req.params.id);

            const bicycle = await BicycleService.findEagerlyById(id);

            if (!bicycle) {
                res.status(404).json({
                    message: "Bicycle not found",
                 });

                return;
            }

            res.json(bicycle);

        } catch (error) {
            next(error);
        }
    }


    static async create(req: Request, res: Response, next: NextFunction) {

        try{
            const { model, description, price, stock, brandId} = req.body;

        // required
        if (!model || price === undefined || !brandId) {
            res.status(400).json({
                message: "FIELDS model, price and brandId are REQUIRED"
            });
            return;
        }
        
        const bicycle = await BicycleService.create({
            model,
            description,
            price,
            stock,
            brandId,
        });
        
        res.status(201).json(bicycle);

        } catch (error) {
            next(error);
        }
    }


    static async update(req: Request, res: Response, next: NextFunction) {
        try{
            const id = Number(req.params.id);

            //found bicycle exists
            const bicycle = await BicycleService.findById(id);

            if (!bicycle) {
                res.status(404).json({
                    message: "bicicleta NO encontrada",
                });
                return;
            }

            //update bicycle with instance and the new data from req.body
            const updateBicycle = await BicycleService.update(
                bicycle,
                req.body
            );

            res.json(updateBicycle);
        } catch (error) {
            next(error);
        }
    }


    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            // check if the bicycle exists before deleting
            const bicycle = await BicycleService.findById(id);

            if (!bicycle) {
                res.status(404).json({
                    message: "bicycle not found :(",
                });
                return;
            }

            // call service to delete record
            await BicycleService.delete(bicycle);

            // respond with 204 status, indicating successfully deleted
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}