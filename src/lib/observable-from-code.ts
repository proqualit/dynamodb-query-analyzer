import * as Rx from 'rxjs'
import { Observable } from 'rxjs/Observable'

const evalInContext = (code: string, context: any) => {
  const scope = Object.keys(context)
    .map(key => `let ${key} = this.${key};\n`)
    .join('')

  const codeToEvaluate = `${scope}${code}`

  // Note that arrow function won't work here because we explicitely set `this` to `context`.
  return function () {
    return eval(codeToEvaluate) // tslint:disable-line: no-eval
  }.call(context)
}

export type GetObservableFromCodeResult = GetObservableFromCodeSuccessResult | GetObservableFromCodeFailureResult

interface GetObservableFromCodeSuccessResult {
  errored: false,
  observable$: Observable<any>
}

interface GetObservableFromCodeFailureResult {
  errored: true,
  error: any
}

export const getObservableFromCode = (code: string, context: any = undefined): GetObservableFromCodeResult => {
  let observable$

  try {
    observable$ = evalInContext(code, { ...context, Rx })
  } catch (e) {
    return {
      errored: true,
      error: e.message
    }
  }

  if (!(observable$ instanceof Rx.Observable)) {
    return {
      errored: true,
      error: 'Last expression must be an Observable'
    }
  }

  return {
    errored: false,
    observable$
  }
}
