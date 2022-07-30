import { Test, TestingModule } from '@nestjs/testing'
import { CarLoansService } from './car-loans.service'

describe('CarLoansService', () => {
  let service: CarLoansService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarLoansService]
    }).compile()

    service = module.get<CarLoansService>(CarLoansService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
