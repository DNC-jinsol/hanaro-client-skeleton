import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

export type ApiErrorPayload = {
  message: string
  status?: number
  data?: unknown
}

export class ApiError extends Error {
  status?: number
  data?: unknown

  constructor({ message, status, data }: ApiErrorPayload) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

function toApiError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error
  }

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError
    const status = axiosError.response?.status
    const data = axiosError.response?.data

    return new ApiError({
      message: axiosError.message || 'API 요청 중 오류가 발생했습니다.',
      status,
      data,
    })
  }

  if (error instanceof Error) {
    return new ApiError({
      message: error.message,
    })
  }

  return new ApiError({
    message: '알 수 없는 API 오류가 발생했습니다.',
  })
}

async function request<TResponse>(
  config: AxiosRequestConfig,
): Promise<TResponse> {
  try {
    const response: AxiosResponse<TResponse> = await apiClient.request(config)
    return response.data
  } catch (error) {
    throw toApiError(error)
  }
}

export async function get<TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  return request<TResponse>({
    ...config,
    method: 'GET',
    url,
  })
}

export async function post<TRequest, TResponse>(
  url: string,
  body?: TRequest,
  config?: AxiosRequestConfig<TRequest>,
): Promise<TResponse> {
  return request<TResponse>({
    ...config,
    method: 'POST',
    url,
    data: body,
  })
}

export async function put<TRequest, TResponse>(
  url: string,
  body?: TRequest,
  config?: AxiosRequestConfig<TRequest>,
): Promise<TResponse> {
  return request<TResponse>({
    ...config,
    method: 'PUT',
    url,
    data: body,
  })
}

export async function patch<TRequest, TResponse>(
  url: string,
  body?: TRequest,
  config?: AxiosRequestConfig<TRequest>,
): Promise<TResponse> {
  return request<TResponse>({
    ...config,
    method: 'PATCH',
    url,
    data: body,
  })
}

export async function del<TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> {
  return request<TResponse>({
    ...config,
    method: 'DELETE',
    url,
  })
}
