import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private SpecificationsRepository: SpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.SpecificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.SpecificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
