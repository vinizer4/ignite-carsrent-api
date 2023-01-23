import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpefificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  return createSpefificationController.handle(request, response);
});

export { specificationsRoutes };
