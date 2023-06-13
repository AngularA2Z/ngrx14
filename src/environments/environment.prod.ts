import { Environment as devEnv } from "./environment.dev";
export class Environment extends devEnv{
  static override production = true;
  constructor(){
    super();
  }
}