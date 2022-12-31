
export abstract class Operation<T, U> {
    protected validationSchema: object
  
    public async execute(inputData: T): Promise<U> {
  
      const startTime = Date.now()
  
      try {
        const result = await this.run(inputData)
        console.log(`(${this.constructor.name}) - DONE (${Date.now() - startTime} ms)`)
        return result
      } catch (err) {
          console.log(`(${this.constructor.name})
        - ERROR ${err.type ? err.type : 'UnknownError'} (${Date.now() - startTime} ms)`)
        throw err
      }
    }
  
    protected abstract run(inputData: T): Promise<U>
  }
  