export const startsWith = (start) => {
  return (s) => {
    for(let  i =0;i<s.length;i++){
      if(s.includes(start)){
        return true
      }else {
       return false
      }
    };
  };
};