import { forkJoin, from } from "rxjs";
import request from "./rxjs-request";

/**
 * Returns an Observable which emits all urls' requests value only when every request has fulfilled
 * @param {String[]} urls
 * @returns {Observable}
 *  Returns an Observable which emits an Array.
 *  Each Array item is the response of each url request
 */
export default (urls) => forkJoin(urls.map(_urlStringToRequest));

/**
 * Turns url string into an Observable Request to url
 * @param {String} url
 * @returns {Observable}
 */
const _urlStringToRequest = (url) => request(url);
