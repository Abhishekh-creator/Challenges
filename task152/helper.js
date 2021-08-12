export const checkAccess = (user, password) => {
  // return user.password === password;
  if(user.role === "admin" && user.password === password){
    return true;
  }else{
    return false;
  }
}

export const grantAccess = (name) => {
  console.log(`Congratulations, ${name}. Access granted.`)
}

export const denyAccess = (name) => {
  console.log(`Sorry, ${name}. Access denied.`)
};

