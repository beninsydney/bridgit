import { Test, TestingModule } from '@nestjs/testing'
import { FinancialAssetsController } from './financial-assets.controller'
import { FinancialAssetsService } from './financial-assets.service'

describe('FinancialAssetsController', () => {
  let controller: FinancialAssetsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialAssetsController],
      providers: [FinancialAssetsService]
    }).compile()

    controller = module.get<FinancialAssetsController>(FinancialAssetsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
