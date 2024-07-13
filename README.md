
# Netflix-Gpt


1. Create react app
2. Tailwind css configured
3. React-router-dom installed as -D Dev dependency
4. Created App router  and called in app jsx
5. login and sign up form
6. form validation
7. useRef for getting reference of the field
8. firebase setup
9. Deployed our app
10. created sign up 
11. create sign in 
12. created store and provide to app
13. created user slice and add to store
14. on Auth change  state for maintaining sign in - like event listner
15. on signin navigate to browse
16. signout option user become null and to home page
17. Bug fixed - navigate changed to body auth state - once logged in can't able to go to  
    login page until log out and vice versa 
18. Bug - if auth state useffect will call when component render - use unsubcribe return   to unmount component
19. Bug - whenener use string , use it from constants - 
20. Added Main container - video title , overview
21. made bg video - autoplay=1 & mute=1 
22. Added sec container with movies container and series container - movie card
23. Memoization for better performance - reducing api calls when changing pages


# Gpt Search Page

1. Created search bar 
2. Created Api Secret key
3. installed openAi - npm install openai
4. Add openai config 
5. Query to get suggestion
6. resulted mag to array 
7. api call for every suggestion and map - promise.all for waiting all api promise   call  to complete
8. Suggestion  page







# Features

    SignIn/SignUp
        - After login navigate to Browse Page

    Browse page
        header
        main movie
            - trailer in bg
            - title - des
            
            -Movie suggestion
                -movie list



 