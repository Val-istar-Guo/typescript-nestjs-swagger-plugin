import { Program } from 'typescript'


export default function(program: Program): any {
  return {
    before: require('@nestjs/swagger/plugin').before({}, program),
  }
}
