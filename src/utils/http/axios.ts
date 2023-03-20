import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { baseURL } from 'utils/util'
import { message } from 'antd'

let navigate: any

const ContentType = {
  urlencoded: 'application/x-www-form-urlencoded;charset=UTF-8',
  json: 'application/json',
  formData: 'multipart/form-data',
}

const axiosConfigs = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
  const token = ''
  if (token) {
    config.headers.Authorization = token
    config.headers.token = token
  }
  config.headers['Content-Type'] =
    ContentType[config.data instanceof FormData ? 'formData' : 'json']
  return config
}
const requestOnReject = (error: AxiosError) => {
  return Promise.reject(error)
}
const axiosResponse = (res: AxiosResponse): Promise<AxiosResponse> => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  } else if (res.status === 401 || res.data.code === 401 || res.data.code === '401') {
    message.error('Đăng nhập đã hết hạn vui lòng đăng nhập lại!')
    // Redirect sang trang refresh token
    window.location.href = '/user/re-login?redirect=' + encodeURIComponent(window.location.href)
  } else if (res.status === 403) {
    message.error('Bạn không đủ quyền thực hiện chức năng này!')
  } else if (res.status === 500) {
    message.error('Yêu cầu dữ liệu không thành công, vui lòng thử lại!')
  } else if (res.status === 406) {
    message.error('Đã hết thời gian đăng nhập, vui lòng đăng nhập lại!')
    navigate('/user/login')
  } else if (res.status === 400) {
    message.error(res.status)
  } else {
    if (window.localStorage.getItem('lang') === 'en') {
      message.error(res.data.enMsg)
    } else {
      message.error(res.data.zhMsg)
    }
  }
  return Promise.resolve(res.data)
}

const axiosResponseError = async (error: { message: string; response: AxiosResponse }) => {
  const msg = error.message
  const response = error.response
  if (!response) {
    return Promise.reject(error)
  }
  if (response.status === 500) {
    message.error('Đã có lỗi xảy ra!')
    return Promise.reject(error)
  }
  if (response) {
    const { data } = response
    message.error(data?.message || '')
  } else if (msg) {
    if (msg === 'Network Error') {
      message.error('Lỗi mạng, vui lòng kiểm tra mạng!')
    } else {
      message.error(msg)
    }
  } else {
    message.error('Lỗi không xác định, vui lòng thử lại!')
  }
  return Promise.reject(error)
}

const baseService = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})
// request interceptor
baseService.interceptors.request.use(axiosConfigs, requestOnReject)
baseService.interceptors.response.use(axiosResponse, axiosResponseError)

export { baseService }
