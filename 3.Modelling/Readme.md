# Modelling

## Tools:

### Moon Modeler:

used for data modelling which means defining structor for a data

For example: if there is a user which are all fields will be using,
If there is a Hospital: fields like Patient name, fields of patient medical history, and how these fields will be connected with each other

## Eraser.io: Alternative of moon modeler

## Coding tools / Text Editors

1. Github Codespaces
2. replit
3. starblitz

## Setup:

```
npm i mongoose
```

## Basic Mongoose structure

```
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({}); // this will create schema which accepts object of data points which defines fields of data

export const User = mongoose.model('User', userSchema);
```

User will be stored as users in database, this is mongoose standard pratice (all small letters and adding 's' at end basically it makes model as plural and store it )

```
type: mongoose.Schema.Types.ObjectId,
ref: "User"// this is name in mongoose.model('User', userSchema);
```

this is a special type in mongoose which means we are giving refrence of the model.
