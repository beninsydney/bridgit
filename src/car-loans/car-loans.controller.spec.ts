import { Test, TestingModule } from '@nestjs/testing'
import { CarLoansController } from './car-loans.controller'
import { CarLoansService } from './car-loans.service'

describe('CarLoansController', () => {
  let controller: CarLoansController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarLoansController],
      providers: [CarLoansService]
    }).compile()

    controller = module.get<CarLoansController>(CarLoansController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
