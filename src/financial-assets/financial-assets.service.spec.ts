import { Test, TestingModule } from '@nestjs/testing'
import { FinancialAssetsService } from './financial-assets.service'

describe('FinancialAssetsService', () => {
  let service: FinancialAssetsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialAssetsService]
    }).compile()

    service = module.get<FinancialAssetsService>(FinancialAssetsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
