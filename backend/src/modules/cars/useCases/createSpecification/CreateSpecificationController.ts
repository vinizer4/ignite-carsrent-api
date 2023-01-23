import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpefificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpefificationController };
