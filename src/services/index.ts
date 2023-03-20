import { baseService } from 'utils/http/axios'
import { AxiosResponse } from 'axios'
import { OptionsExecute } from 'types/optionsExecute'

export function execute<T>(
  url: string,
  params?: Record<string, any>,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete' = 'get',
  configs: OptionsExecute = {}
): Promise<AxiosResponse<T>> {
  return baseService.request<T>({
    url,
    method,
    data: method === 'post' || method === 'put' || method === 'patch' ? params : undefined,
    params: method === 'get' || method === 'delete' ? params : undefined,
    ...configs,
  })
}
