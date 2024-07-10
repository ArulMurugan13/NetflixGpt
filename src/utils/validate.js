
export const checkValidData = (email,password) =>{
    
    const isEmailValid =/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const isPasswordValid =
      /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

      if(!isEmailValid){
        return "Email is not valid";
      }
      if(!isPasswordValid){
        return "Password is not valid";
      }

      return null;

}