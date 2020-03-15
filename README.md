# The Quarantine Game

## Description

This is the game we make while the world falls to pieces.

## Rules for the Game

### Rule 1


## Ideas


## Working with This Repo

### Install the Builder
For the code to run, it needs to be built into a "bundle".

This means the code we write needs to be converted (transpiled) into JavaScript a browser can understand, and brought into a single file (the bundle) from the disparate files we create.

We'll use Parcel as our bundler.  It's an open-source NPM pacakge that will build our code, as well as run the local server where we can see our code functioning.

To install Parce, run this command in you command line:
```base
npm install -g parcel-bundler --save-dev
```

Note the `-g` in the above command.  Usually when we use the `npm install {package-name} --save` command, the package we're installing is added to the project's package.json file.  However, when using the `-g` flag, this indicates to NPM that you'd like the package installed "globally".  This means global to your entire system - not just in the project we're in.

In general, global dependencies are to be avoided.  The main reason: When sharing a project, a new user should be able to simply run `npm install`, and all of the necessary code should come rushing down to the user's local environment.

But how does NPM know what the necessary code is?  Why, because it's in the package.json!

But when we install something globally, it doesn't go into the project's package.json.  Thus, new users will `npm install`, then be confused by still not being able to run the project.

In the case of Parcel, it's doing some crazy system-wide stuff that just can't be contained by the project.  For this reason, the global installation is still necessary, as is the note in this README, telling you to install it before things will work.

### Start the App
To start testing as we build, we'll need to both build the code, then start our local test server.  This will make it possible to go into a browser and see the code we write, as we make changes.

Fortunately, Parcel makes this mega-easy.  To start the app, run the following command in your command line:
```bash
npm run start
```
