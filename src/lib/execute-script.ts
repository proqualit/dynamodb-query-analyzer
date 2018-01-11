import * as Rx from 'rxjs'

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

export type ExecuteScriptResult = ExecuteScriptSuccessResult | ExecuteScriptFailureResult

interface ExecuteScriptSuccessResult {
  errored: false
}

interface ExecuteScriptFailureResult {
  errored: true,
  error: any
}

export const executeScript = (code: string, context: any = undefined): ExecuteScriptResult => {
  try {
    evalInContext(code, { ...context, Rx })
  } catch (e) {
    return {
      errored: true,
      error: e.message
    }
  }

  return {
    errored: false
  }
}
