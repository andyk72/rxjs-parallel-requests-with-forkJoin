import { from } from "rxjs";

export default (url) => from(fetch(url).then((res) => res.json()));
