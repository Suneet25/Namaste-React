Lec-2
------
package.json- Its nothing but configuration for npm.
dependencies are two types:-
1>Dev-Dependency- Required for development phase
2>Dependecy- It is used in prod also.
3>^(charet)-Will automatically update the minor upgrade version of a package and ~(tilde)-Will only update the major version of the pakage. (Generally Its advised to use ^ , because if we upgarade it to major version than it can break the prod.)
4>packagelock.json is holding the exact version of the dependencies. (It has hash also which keeps track of the version so that it will work same on the prod and it makes sure it will not break on prod.)