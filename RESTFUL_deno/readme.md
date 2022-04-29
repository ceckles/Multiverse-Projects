# RESTFUL API using
- Framework: Deno
- Routes : Oak
- ENV var : dotenv - for DB config var's
- DB: PostgreSQL, denodb

#install:

-Deno:
-  curl -fsSL https://deno.land/x/install/install.sh | sh
  
-Denon(not needed):
-  deno install -qAf --unstable https://deno.land/x/denon/denon.ts

#Run
#w/o denon
- deno run --allow-read --allow-net --allow-env --unstable server.ts

#w/Denon
- denon run --allow-read --allow-net --allow-env --unstable server.ts