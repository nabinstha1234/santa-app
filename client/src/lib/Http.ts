import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

/**
 * Http.ts
 *
 * This module provides a wrapper around the Axios library for making HTTP requests.
 * It exports a class `Http` that implements the `IHttp` interface.
 * The `Http` class provides methods for making GET, POST, PUT, PATCH, and DELETE requests.
 * It also includes interceptors for handling request and response errors.
 */

// The base API URL is fetched from the environment variable REACT_BASE_API_URL
const BASE_API_URL = import.meta.env.VITE_REACT_APP_API_URL;

/**
 * IHttp interface
 *
 * Defines the methods that should be implemented by the Http class.
 */
export interface IHttp {
  get<T>(args: IHttpParam): Promise<T>;
  post<T>(args: IHttpParam): Promise<T>;
  put<T>(args: IHttpParam): Promise<T>;
  patch<T>(args: IHttpParam): Promise<T>;
  delete<T>(args: IHttpParam): Promise<T>;
}

/**
 * IError interface
 *
 * Defines the structure of an error response.
 */
export interface IError {
  status: number;
  data: any;
  headers: any;
}

/**
 * IHttpParam interface
 *
 * Defines the structure of the parameters required for making an HTTP request.
 */
export interface IHttpParam {
  endpoint: string;
  payload?: any;
  config?: any;
}

/**
 * IToken interface
 *
 * Defines the structure of a token.
 */
export interface IToken {
  token: string;
}

/**
 * Http class
 *
 * Implements the IHttp interface and provides methods for making HTTP requests.
 */
export default class Http implements IHttp {
  private instance;
  private headers;

  /**
   * Constructor
   *
   * Initializes the Http class with the base URL and sets up the instance and headers.
   * @param baseUrl The base URL for the API requests.
   */
  constructor(baseUrl: string = BASE_API_URL as string) {
    this.headers = this.getHeaders();

    this.instance = axios.create({
      baseURL: baseUrl,
    });

    this.initialInterceptors();
  }

  /**
   * initialInterceptors method
   *
   * Sets up the interceptors for handling response and error.
   */
  private initialInterceptors = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );

    // Uncomment the following line if you want to handle request interceptors
    // this.instance.interceptors.request.use(this.handleRequest);
  };

  /**
   * handleRequest method
   *
   * Handles the request by adding headers to the config.
   * @param config The AxiosRequestConfig object.
   * @returns The updated config object.
   */
  private handleRequest = (config: AxiosRequestConfig) => {
    config = {
      ...config,
      headers: {
        ...config.headers,
        ...this.getHeaders(),
        ...this.headers,
      },
    };

    return config;
  };

  /**
   * handleResponse method
   *
   * Handles the response by returning the response data.
   * @param response The AxiosResponse object.
   * @returns The response data.
   */
  private handleResponse = (response: AxiosResponse) => {
    return response.data;
  };

  /**
   * handleError method
   *
   * Handles the error by returning a rejected Promise with the error details.
   * If the error status is 401, it redirects the user to the home page.
   * @param err The error object.
   * @returns A rejected Promise with the error details.
   */
  private handleError = (err: any): Promise<IError> => {
    if (err.response) {
      const { status, data, headers } = err.response;
      if (status === 401) {
        window.location.href = '/';
      }

      return Promise.reject({
        status,
        data,
        headers,
      });
    } else {
      return Promise.reject({
        status: 500,
        headers: null,
        data: err.message,
      });
    }
  };

  /**
   * getHeaders method
   *
   * Returns the headers object with the content-type and authorization headers.
   * @returns The headers object.
   */
  getHeaders = () => {
    const token = this.token();

    const headers: any = {
      'content-type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }

    return headers;
  };

  /**
   * token method
   *
   * Returns the token.
   * @returns The token string or null.
   */
  token = (): string | null => {
    return 'token';
  };

  /**
   * changeHeaders method
   *
   * Updates the headers object with the provided headerConfig.
   * @param headerConfig The header configuration object.
   */
  changeHeaders = (headerConfig: any) => {
    this.headers = {
      ...this.headers,
      ...headerConfig,
    };
  };

  /**
   * get method
   *
   * Makes a GET request to the specified endpoint.
   * @param args The IHttpParam object containing the endpoint and optional payload and config.
   * @returns A Promise with the response data.
   */
  get<T>(args: IHttpParam): Promise<T> {
    return this.instance.get(args.endpoint).then((response: any) => {
      return response as T;
    });
  }

  /**
   * post method
   *
   * Makes a POST request to the specified endpoint with the payload and config.
   * @param args The IHttpParam object containing the endpoint, payload, and optional config.
   * @returns A Promise with the response data.
   */
  post<T>(args: IHttpParam): Promise<T> {
    return this.instance
      .post(args.endpoint, args.payload, args.config)
      .then((response: any) => {
        return response as T;
      });
  }

  /**
   * patch method
   *
   * Makes a PATCH request to the specified endpoint with the payload.
   * @param args The IHttpParam object containing the endpoint and payload.
   * @returns A Promise with the response data.
   */
  patch<T>(args: IHttpParam): Promise<T> {
    return this.instance
      .patch(args.endpoint, args.payload)
      .then((response: any) => {
        return response as T;
      });
  }

  /**
   * put method
   *
   * Makes a PUT request to the specified endpoint with the payload and config.
   * @param parameters The IHttpParam object containing the endpoint, payload, and optional config.
   * @returns A Promise with the response data.
   */
  put<T>(parameters: IHttpParam): Promise<T> {
    return this.instance
      .put(parameters.endpoint, parameters.payload, parameters.config)
      .then((response: any) => {
        return response as T;
      });
  }

  /**
   * delete method
   *
   * Makes a DELETE request to the specified endpoint.
   * @param parameters The IHttpParam object containing the endpoint.
   * @returns A Promise with an empty object.
   */
  delete<T>(parameters: any): Promise<T> {
    return Promise.resolve({} as T);
  }
}
