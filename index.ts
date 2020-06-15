import { Merge } from 'merge-all-objects';

interface More {
   [key: string]: any;
}

const ParseLine = (source: string, value?: string) => {
   let item = {};
   const arr = source.split(/\-\>/gi);
   if (arr.length <= 1) {
      item[source] = value;
      return item;
   }
   const [a, ...r] = arr;
   item[a] = ParseLine(r.join('->'), value);
   return item;
};

const CogenvObject = (data: More, register: Function) => {
   register({
      name: '@cogenv/object',
      version: '1.0.0',
      mergeOptions: {
         removedKeys: [/^\s*([\w.-]+)[:]\s*([a-z]+)\s*/],
      },
   });

   if (!data._objects) {
      return data;
   }

   data = data._objects;
   let payload: More = {};

   for (const key in data) {
      const parsed = ParseLine(key, data[key]);
      payload = Merge(payload, parsed);
   }
   return payload;
};

export { ParseLine, CogenvObject };
export default CogenvObject;
