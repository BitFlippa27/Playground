type Robot = {
  id: number;
  name: string;
}

//return value is a Promise
//actual value from the promise is the generic
//Type T is what is being returned from the inside the promise
export const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  
  return await res.json();

}

const users = await getData<Robot[]>("https://depp.com");

//what compiler composes out of that
//const getData: <Robot[]>(url: string) => Promise<Robot[]>
//or
//getData<Robot[]>(url: string):Promise<Robot[]>