import { Program } from 'typescript'
import { before } from '@nestjs/swagger/plugin'


export default function(program: Program, pluginOptions = {}): any {
  return {
    before: before(pluginOptions, program),
  }
}
