import { Router, RouterContext } from "https://deno.land/x/oak@v8.0.0/mod.ts";
import Character from "../models/Character.ts";
import User from "../models/User.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import { create, verify, decode, getNumericDate } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { config } from "https://deno.land/x/dotenv@v2.0.0/mod.ts";

const router = new Router();
const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"]
  );


//CREATE
router.post(
  "/starwars/character/",
  async ({ request, response }: RouterContext) => {
    //create a character and add to DB
    try {
      const { name } = await request.body().value;
      const character = await Character.create({ name });
      response.body = character;
    } catch (err) {
      console.log(err);
      response.body = { error: "Error creating: People" };
      response.status = 500;
    }
  }
);

//User Create
router.post("/user/", async ({ request, response }: RouterContext) => {
  //Create User
  try {
    const { username, password } = await request.body().value;
    //console.log(`${username} : ${password}`);
    const pwdhsh = await bcrypt.hash(password);
    // console.log(pwdhsh);
    // const result = await bcrypt.compare("1234567890", pwdhsh);
    // console.log(`PWD HASH MATCH : ${result}`);
    const usr = await User.create({ username, password: pwdhsh });
    response.body = usr;
    response.status = 200;
  } catch (err) {
    console.log(err);
    response.body = { error: "Error creating pwd: User" };
    response.status = 500;
  }
});

//READ
router.get("/starwars/character/", async ({ response }: RouterContext) => {
  //fetch all the starwars characters
  try {
    //const data = await (await fetch('https://swapi.dev/api/people/')).json();
    const data = await Character.all();
    response.body = data;
  } catch (err) {
    console.log(err);
    response.body = { error: "Error Fetching Starwars Data" };
    response.status = 500;
  }
});

//UPDATE
router.put(
  "/starwars/character/:id",
  async ({ params, request, response }: RouterContext) => {
    //Update Character by ID
    try {
      const character = await Character.where("id", params.id!).first();
      console.log(character);
      if (!character) {
        response.body = { character: "No Character found with id" };
        response.status = 400;
        return;
      }
      const { name } = await request.body().value;
      await Character.where("id", params.id!).update({ name: name });
      response.body = { Update: "Character Updated" };
      response.status = 200;
    } catch (err) {
      console.log(err);
      response.body = { error: "Error Update Starwars Data" };
      response.status = 500;
    }
  }
);
//DELETE
router.delete(
  "/starwars/character/:id",
  async ({ params, request, response }: RouterContext) => {
    //Find and Delete id
    try {
      const character = await Character.where("id", params.id!).first();
      if (!character) {
        response.body = { character: "No Character found with id" };
        response.status = 400;
        return;
      }
      Character.deleteById(params.id!);
      response.body = { character: "Character Deleted" };
      response.status = 200;
    } catch (err) {
      console.log(err);
      response.body = { error: "Error Deleting Character" };
      response.status = 500;
    }
  }
);
//Find
router.get(
  "/starwars/character/:id",
  async ({ params, request, response }: RouterContext) => {
    //find a character by id
    try {
      const character = await Character.where("id", params.id!).first();
      if (!character) {
        response.body = { character: "Character Not Found" };
        response.status = 400;
        return;
      }
      response.body = character;
    } catch (err) {
      console.log(err);
      response.body = { error: "Error Fetching Character" };
      response.status = 500;
    }
  }
);
router.post(
  "/user/auth/:id",
  async ({ params, request, response }: RouterContext) => {
    //find a character by id
    try {
      const usr = await User.where("id", params.id!).first();
      if (!usr) {
        response.body = { User: "User Not Found" };
        response.status = 400;
        return;
      }
      const { password } = await request.body().value;
      //console.log(password);
      const result = await bcrypt.compare(password, String(usr.password));
      //console.log(result);
      response.body = {
        user: usr,
        valid_Match: result,
      };
      response.status = 200;
    } catch (err) {
      console.log(err);
      response.body = { error: "Error Fetching User" };
      response.status = 500;
    }
  }
);

//Auth Test
//TODO: refactor to function for repeat usage in other routes.
router.get("/auth", async({params, request, response}: RouterContext) =>{
      const headers: Headers  = request.headers 
      const authorization = headers.get("Authorization");
      if(!authorization)
      {
          //No Auth header return error
          response.status = 401;
          return;
      }

      const jwt = authorization.split(" ")[1];
      if(!jwt){
          response.status = 401
          return;
      }
      try {
        const validation = await verify(jwt, key);
        const [header, payload, signature] = decode(jwt);
        if(payload.exp > getNumericDate(60) ){
            //Token is exp
            response.body = {Message: "Token Exp"}
            response.status = 401
            return;
        }
        //Token is good and can return to user.
        response.body = { header, payload,time:getNumericDate(60), signature, validation}
        response.status = 200;
        return;
      } catch (err) {
          response.status = 401
          response.body = err;
          return;
      }
});
router.get("/secret", async ({ params, request, response }: RouterContext) => {
  //Get Auth Header value
  const headerAuth = request.headers.get("authorization");
  //check if auth header present
  if (headerAuth) {
    //remove the Basic tag from header
    const creds = headerAuth.match(/^Basic\s+(.*)$/);
    //confirm it's not null if is empty it will crash app
    if (creds) {
      //split out the user and password and decode
      const [user, pw] = atob(creds[1]).split(":");
      //get user form DB
      const usr = await User.where("username", user).first();
      //check Creds not null
      if (usr) {
        const isValid = await bcrypt.compare(pw, String(usr.password!));
        //console.log(` is Valid Match : ${isValid}`);
        //if Valid match auth if not reject
        if (isValid) {

          const jwt = await create(
            { alg: "HS512", typ: "JWT" },
            { user: user, pw: pw, exp: getNumericDate(60) },
            key
          );
          response.body = {
            SECRET: " YOU HAVE ACCESS TO ALL THE SECRETS",
            user: user,
            pw: pw,
            token: jwt,
          };
          response.status = 200;
          return;
        } else {
          response.body = { Auth: "Invalid Auth Credentials" };
          response.status = 401;
          return;
        }
      } else {
        response.body = { Auth: "Basic Auth Failed" };
        response.status = 401;
        return;
      }
    }
  } else {
    response.body = { Auth: "Auth Required" };
    response.status = 401;
    return;
  }
});
export default router;
