interface More {
   [key: string]: any;
}

const IsObject = (src: any): boolean => {
   if (toString.call(src) === '[object Object]') {
      return true;
   }
   return false;
};

const Merge = (...objs: More[]) => {
   var payload: More = {},
      source: More,
      key: string | Number;

   while (objs.length > 0) {
      source = objs.splice(0, 1)[0];
      if (IsObject(source)) {
         for (key in source) {
            if (source.hasOwnProperty(key)) {
               const value = source[key];
               if (IsObject(value)) {
                  payload[key] = Merge(payload[key] || {}, value);
               } else {
                  payload[key] = value;
               }
            }
         }
      }
   }

   return payload;
};

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

export { ParseLine };
export default CogenvObject;
