import { PartialType } from '@nestjs/mapped-types'
import { CreateCarLoanDto } from './create-car-loan.dto'

export class UpdateCarLoanDto extends PartialType(CreateCarLoanDto) {}
