import { Test, TestingModule } from '@nestjs/testing'
import { IncomePaymentsService } from './income-payments.service'

describe('IncomePaymentsService', () => {
  let service: IncomePaymentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomePaymentsService]
    }).compile()

    service = module.get<IncomePaymentsService>(IncomePaymentsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
