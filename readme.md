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

## Lec-5

 <!--
 !! Monolythic Architecture-
 * It is where in whole application its frontend,backend,apis,db,auth,notifications etc 

 !! MicroService Architecture-
 * It means that evrey service has its own work like backend , UI , Database , Email-Notification
 * They have different repos and they works individually.
 * There can be multiple services for UI as well like one service is based on react, one is build on Angular etc..
 * And they all have different ports like Backend has 1000, UI has 1234 etc and they will connect to the domain name after got deployed.
 e.g:- UI is deployed to "/" like that Backend is deployed to "/api"
 * Right now evreyone is moving toward microservices .

 !! 2 ways to render react comps-
  1: Loads -> API Call (500 milli sec) -> render (This is the bad UI experience).
  2: Loads -> Render (Skeleton) -> API Call -> render (This is a good UI experience becaus gitteriness will not be there.)

 !! useEffect-
 * useEffect will be called after component gets rendred.

 * Whenever state variables updates, react triggers a reconciliation cycle (re-renders the component.)
  -->

=======

 <!-- 
 ! What are props in react comp?
 It' js at the end of the day and react functional comp is a function , so props is basically the argumants for a function.

 * Config Driven UI - It means that the UI is driven by config which are comming from backend (eg:Carousel, See All)
 -->

## Lec-6

<!--
! If you are exporting the single component in both ways like with default export and normal export than which export will work:

By default it will consider default export (priority will be high.)

* Only single default export you can give to a component.

* You shold not make your component more than 100 lines , if its more than 100 lines of code than you should convert it to different component and should import them.

! There are two layers in frontend :
1>UI layer which we see
2>Data layer which provides data to the UI.

! useState- A super powerful variable.
* useState is nothing but a js utility function which is created by facebook developers .
* When useState variables got updates or changes than it re-render the component.
* Hence is React is fast at DOM updates.(It keeps the UI layer insync with the data layer)
* React is fast because , it do efficient DOM manipulation.

! Reconciliation (React fiber)-
* Reconciliation is nothing but an algotithm react uses to check the difference between two trees (DOM trees) to determine which parts needs to be changed.

! Actual Dom-
* Its the HTML elements such as div, h1 etc..
! Virtual DOM-
* Virtual DOM is nothing but the representation of actual DOM. (Basiclly its represent in a js object) as we know that comparation of keys i object is a fast process.
! Diffing Algorithm-
* Diffing algorithm means it creates a difference between two virtual dom i.e updated virtual DOM and previous virtual dom.
e.g:- Let's take an array of items and map it to the UI with the help of react comps. and lets filter it with rating more than 4. Than diffing algo comes into the picture it will check how many nodes are more than 4 rating it will remove other nodes from the tree.
! Incremental rendering-
* The ability to split the rendering works into multiple chunks and spread it to multiple frames.
 -->

## Lec-7

 <!--
 ! Rules for useState Hook- 
 * Use useState hooks inside the body of the component.
 * Do not loop through the useState hook,
 * Never do conditional rendering on useState.

 ! Rules for useEffect Hook-
 * useEffect hook takes 2 arguments.
   a) Callback function.
   b) Dependency array .(optional)

 * Dependency array decides how useEffect will render
   a) If there is no depedency array than it will get called on evrey component render.
   b) If there is empty dependency array than it will get called on first render of the component only.(Mounting phase).
   c) If there is a variable present in the dependency array and if its changed than it will get called on mounting phase and also evreytime the variable changes.  
 -->

## Lec-8

<!--
! Class Components-

* We know in class components , its the javascript class and it extends the properties of React.Component.
* To excess the props we have to write this.props
* To maintaion state we need to write this.state , its a big object which can store multiple variables.
* To Update the state we need to call the function this.setState . Its a big object where we dont need to create more this.setState.

! How the component life cycle works in class components?

1> First the constructor will come into picture.
2> Than render() method will get excecuted.
3> At last the componentDidMount function will get excecuted.

! How the component lifecycle will works if there are multiple child comps?

- Parent component constructor will be called.
- Parent component render method will get called.

  - first child constructor will be called.
  - first child render will be called

  - second child constructor will be called.
  - second child render will be called.
-----COMMIT PHASE (mount will happen in batch to optimize the web app)
  - first child component did mount
  - second child component did mount

- Parent component did mount

>>> Class components life cycle
1> Constructor
2> render
3> ComponentDidMount
4>ComponentDidUpdate
5>ComponentWillUnMount

-->

## Lec-11

<!--
! Higher Order Components-
* This is a component which takes a component as input and also returns a new component . Basically the new component is the enhanced version of the old component.

* Higher Order components are the pure function means , we are not changing the component we are getting but we are enhancing the component.

* We generally sont change anything on the new component we just do any changes in props or small changes.

! Lifting state up 

! Contrlled and Uncontrolled components

->
