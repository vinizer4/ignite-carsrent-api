import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateSpefificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

const createSpefificationController = new CreateSpefificationController(
  createSpecificationUseCase
);

export { createSpefificationController };
