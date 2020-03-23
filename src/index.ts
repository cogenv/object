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
