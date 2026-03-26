const DEFAULT_OPTIONS = {
  maxAttempts: 3,
  baseDelay: 1000,
  maxDelay: 10000,
  backoffMultiplier: 2,
  retryableStatuses: [408, 429, 500, 502, 503, 504],
  retryableErrors: ['NetworkError', 'TimeoutError'],
  onRetry: null
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function isRetryable(error, options) {
  if (error.status && options.retryableStatuses.includes(error.status)) {
    return true
  }
  if (options.retryableErrors.includes(error.name)) {
    return true
  }
  return false
}

export async function withRetry(fn, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options }
  let lastError
  let delay = config.baseDelay

  for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      if (attempt === config.maxAttempts) {
        throw error
      }

      if (!isRetryable(error, config)) {
        throw error
      }

      if (config.onRetry) {
        config.onRetry({
          attempt,
          maxAttempts: config.maxAttempts,
          error,
          nextDelay: delay
        })
      }

      await sleep(delay)
      delay = Math.min(delay * config.backoffMultiplier, config.maxDelay)
    }
  }

  throw lastError
}

export class RetryableError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'RetryableError'
    this.status = status
  }
}

export function withTimeout(promise, timeoutMs, timeoutError = 'Operation timed out') {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(timeoutError)), timeoutMs)
    )
  ])
}

export async function withRetryAndTimeout(fn, options = {}) {
  const { timeout = 5000, ...retryOptions } = options
  return withRetry(
    () => withTimeout(Promise.resolve(fn()), timeout),
    retryOptions
  )
}