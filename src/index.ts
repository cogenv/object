interface More {
   [key: string]: any;
}

const IsObject = (src: any): boolean => {
   if (toString.call(src) === '[object Object]') {
      return true;
   }
   return false;
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

export { ParseLine };
export default CogenvObject;
