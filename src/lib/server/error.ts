/**
 * An error with an attached HTTP Status Code
 *
 * @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
export class NetworkError extends Error {
  /**
   * > *The status code is a three-digit, decimal, integer value that represents the disposition of the server's
   * attempt to satisfy the client's request.*
   *
   * @see https://en.wikipedia.org/wiki/HTTP#response-status-code
   */
  readonly status: number;
  /**
   * The body of the response to the client. This should be different to the `msg` because it should not reveal
   * information about the server (such as stacktrace). Whereas `msg` does not have this constraint.
   */
  readonly responseBody?: string;
  name = "NetworkError";

  constructor(msg: string, status = 500, responseBody?: string) {
    super(msg);
    this.status = status;
    this.responseBody = responseBody;
  }

  toString() {
    return super.toString() + (this.status ? `[status: ${this.status}]` : "");
  }
}
