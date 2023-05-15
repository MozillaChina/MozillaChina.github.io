const namespace = 'mdn';
let data: { [key: string]: any } = {};

try {
  data = JSON.parse(localStorage.getItem(namespace) || '{}');
} catch (e) {}

export const getStorage = (key: string, noCache?: boolean) => {
  if (noCache) {
    try {
      data = JSON.parse(localStorage.getItem(namespace) || '{}');
    } catch (e) {}
  }

  return data[key];
};

export const setStorage = (key: string, value: any) => {
  data[key] =
    typeof value != 'object' ? value : Object.assign({}, data[key], value);
  localStorage.setItem(namespace, JSON.stringify(data));
};

export const delStorage = (key: string) => {
  delete data[key];
  localStorage.setItem(namespace, JSON.stringify(data));
};
