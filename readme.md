## Lec-2

package.json- Its nothing but configuration for npm.
dependencies are two types:-
1>Dev-Dependency- Required for development phase
2>Dependecy- It is used in prod also.
3>^(charet)-Will automatically update the minor upgrade version of a package and ~(tilde)-Will only update the major version of the pakage. (Generally Its advised to use ^ , because if we upgarade it to major version than it can break the prod.)
4>packagelock.json is holding the exact version of the dependencies. (It has hash also which keeps track of the version so that it will work same on the prod and it makes sure it will not break on prod.)

## Lec-3

#Parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm - written in c++
-Caching - Faster builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistant Hashing
-Code splitting
-Differential bundling - support older browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - remove unused code
-Different dev and prod bundles

- We generally dont put node_modules, dist and parcel-cache into the git because the server itself could run the command like npm i and all because we are sending the package.json to the git. The server will fetch it from git and than it will install packages which will have node_modules , dist and parcel-cache file

- local - git - server = Host - End User (Process)

## Lec-4
<!--
! What is JSX-
JSX code is React.createElement at the end of the day.
! Functional Component-
It's a javascript function which return JSX code or React elements.
! Component Compostion-
 It's nothing but component inside component
! Cross-site-scripting-
Basically JSX code won't directly run your code instead it sanitize data properly before execution.(If any malecious data sneak into any api than it wont get affected)

 -->
