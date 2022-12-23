/* eslint-disable max-classes-per-file */
import * as Ajv from 'ajv'

export class ApiError extends Error {
  public statusCode: number
  public type: string
  public errors?: Ajv.ErrorObject[]

  public constructor(type: string, message: string, statusCode?: number) {
    super(message)

    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.type = type
    this.statusCode = Number(statusCode || 500)
  }
}

export class RecordNotFoundError extends ApiError {
    public constructor(message: string, type?: string) {
      super(type || 'E_NOT_FOUND', message, 404)
    }
  }

export class UserNotFoundError extends RecordNotFoundError {
    public constructor(userId?: number) {
      super(userId ? `User '${userId}' does not exist` : 'User does not exist', 'E_USER_NOT_FOUND')
    }
  }