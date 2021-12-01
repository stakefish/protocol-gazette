import _ from "lodash"

export async function* chunk<T>(gen: AsyncGenerator<T, void, unknown>, size: number): AsyncGenerator<T[], void, unknown> {
  for await (let value of gen) {
    let result = new Array<T>()
    if (result.length < size) {
      result.push(value)
    } else {
      yield result
      result = new Array<T>()
    }
    if (result.length > 0) {
      yield result
    }
  }
}

export async function collect<T>(gen: AsyncGenerator<T, void, unknown>): Promise<T[]> {
  const result = []
  for await (let t of gen) {
    result.push(t)
  }
  return result
}


export interface ArrayDifference<T> {
  type: 'created' | 'updated' | 'deleted'
  diffs?: Difference<any>[]
  object: T
}

export interface Difference<T> {
  type: 'created' | 'updated' | 'deleted'
  field: string
  before?: T
  after?: T
}

export function diffObjects<T extends object>(before: T[], after: T[], idMapper: (obj: T) => any): ArrayDifference<T>[] {
  const beforeIdMap = new Map(before.map((t) => [idMapper(t), t]))
  const afterIdMap = new Map(after.map((t) => [idMapper(t), t]))
  const result = Array<ArrayDifference<any>>()
  for (let t of after) {
    const id = idMapper(t)
    if (beforeIdMap.has(id)) {
      const diffs = diffObject(beforeIdMap.get(id) as T, t as T)
      if (diffs.length > 0) {
        result.push({
          type: 'updated',
          object: t,
          diffs: diffs
        })
      }
    } else {
      result.push({
        type: 'created',
        object: t
      })
    }
  }
  for (let t of before) {
    const id = idMapper(t)
    if (!afterIdMap.has(id)) {
      result.push({
        type: 'deleted',
        object: t
      })
    }
  }
  return result
}

export function diffObject<T extends object>(before: T, after: T): Difference<any>[] {
  const result = new Array<Difference<any>>()
  _.entries(before).forEach(([k, v]) => {
    if (k in after) {
      if (!_.isEqual(v, (after as any)[k])) {
        result.push({
          type: 'updated',
          field: k,
          before: v,
          after: (after as any)[k]
        })
      }
    } else {
      result.push({
        type: 'deleted',
        field: k,
        before: v
      })
    }
  })
  _.entries(after).forEach(([k, v]) => {
    if (!(k in before)) {
      result.push({
        type: 'created',
        field: k,
        after: v
      })
    }
  })
  return result
}

export async function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
