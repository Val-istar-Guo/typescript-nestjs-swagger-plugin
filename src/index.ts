import { Program } from 'typescript'
import { before } from '@nestjs/swagger/plugin'


export default function(program: Program): any {
  return {
    before: before({}, program),
  }
}
