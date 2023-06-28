/* eslint-disable @typescript-eslint/no-unsafe-return */
import { before } from '@nestjs/swagger/plugin'
import { Program } from 'typescript'


export default function (program: Program, pluginOptions = {}): any {
  return before(pluginOptions, program)
}
